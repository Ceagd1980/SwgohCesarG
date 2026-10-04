// Función intermediaria (proxy) para leer swgoh.gg desde la página sin bloqueos del navegador.
// Rutas permitidas:
//   ?path=player/123456789        -> perfil + roster del código de aliado
//   ?path=characters | ships      -> base de datos de unidades (imágenes, facciones)
//   ?path=counters/LIDER&season=X -> counters GAC de swgoh.gg (leídos de la página pública)

const UA = 'Mozilla/5.0 (RadarSWGOH; uso personal)';

function json(status, data, maxAge) {
  return {
    statusCode: status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': `public, max-age=${maxAge || 0}`
    },
    body: typeof data === 'string' ? data : JSON.stringify(data)
  };
}

function parseCounters(html) {
  // Cada bloque empieza con un enlace ?a_lead=ID; dentro vienen ?a_member=ID, Seen N, Win % P%, y ?d_member=ID
  const parts = html.split(/[?&]a_lead=/).slice(1);
  const map = new Map();
  for (const part of parts) {
    const lead = (part.match(/^([A-Z0-9_]+)/) || [])[1];
    if (!lead) continue;
    const members = [...part.matchAll(/[?&]a_member=([A-Z0-9_]+)/g)].map(m => m[1]);
    const defm = [...part.matchAll(/[?&]d_member=([A-Z0-9_]+)/g)].map(m => m[1]);
    const text = part.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    const seen = +((text.match(/Seen\s*(\d+)/i) || [])[1] || 0);
    const win = +((text.match(/Win\s*%\s*(\d+(?:\.\d+)?)/i) || [])[1] || 0);
    if (!seen) continue;
    const key = [lead, ...members.slice().sort()].join('|');
    const prev = map.get(key);
    if (prev) {
      const total = prev.seen + seen;
      prev.win = Math.round((prev.win * prev.seen + win * seen) / total);
      prev.seen = total;
    } else {
      map.set(key, { lead, members: [...new Set(members)], seen, win, vs: [...new Set(defm)] });
    }
  }
  return [...map.values()].sort((a, b) => b.seen * b.win - a.seen * a.win).slice(0, 25);
}

exports.handler = async (event) => {
  const q = event.queryStringParameters || {};
  const path = (q.path || '').replace(/^\/+|\/+$/g, '');

  try {
    if (/^player\/\d{9}$/.test(path) || /^(characters|ships)$/.test(path)) {
      const r = await fetch(`https://swgoh.gg/api/${path}/`, { headers: { 'User-Agent': UA, Accept: 'application/json' } });
      const body = await r.text();
      return json(r.status, body, path.startsWith('player') ? 900 : 86400);
    }

    const m = path.match(/^counters\/([A-Z0-9_]+)$/);
    if (m) {
      const season = /^[A-Z0-9_]+$/.test(q.season || '') ? q.season : '';
      const url = `https://swgoh.gg/gac/counters/${m[1]}/` + (season ? `?season_id=${season}` : '');
      const r = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'text/html' } });
      if (!r.ok) return json(r.status, { error: `swgoh.gg respondió ${r.status}`, url });
      const html = await r.text();
      return json(200, { url, counters: parseCounters(html) }, 21600);
    }

    return json(400, { error: 'Ruta no permitida' });
  } catch (e) {
    return json(502, { error: String(e) });
  }
};
