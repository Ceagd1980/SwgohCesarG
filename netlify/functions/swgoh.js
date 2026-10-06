// Función intermediaria (proxy) para leer la API pública de swgoh.gg desde la página.
// Rutas permitidas:
//   ?path=player/123456789   -> perfil + roster del código de aliado (resumido)
//   ?path=characters | ships -> base de unidades (nombre, imagen, facciones, lado)
//   ?path=guild-profile/ID   -> gremio: nombre, PG y miembros con su código de aliado
// Las respuestas se recortan para no pasar el límite de 6 MB de las funciones de Netlify.

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36';

function json(status, data, maxAge) {
  return {
    statusCode: status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': `public, max-age=${maxAge || 0}`
    },
    body: JSON.stringify(data)
  };
}

const slimUnits = arr => (arr || []).map(u => ({
  b: u.base_id, n: u.name, i: u.image, c: u.categories || [], a: u.alignment || '', r: u.role || '',
  s: ((u.url || '').match(/units\/([^/]+)/) || [])[1] || ''
}));

function slimGuild(g) {
  const d = g.data || g;
  return { data: {
    guild_id: d.guild_id, name: d.name, galactic_power: d.galactic_power, member_count: d.member_count,
    members: (d.members || []).map(m => ({
      ally_code: m.ally_code, player_name: m.player_name, galactic_power: m.galactic_power,
      league_name: m.league_name, member_level: m.member_level, last_activity_time: m.last_activity_time
    }))
  } };
}

function slimPlayer(p) {
  const units = (p.units || []).map(x => {
    const u = x.data || x;
    return { data: {
      base_id: u.base_id, name: u.name, gear_level: u.gear_level, level: u.level, power: u.power,
      rarity: u.rarity, relic_tier: u.relic_tier, combat_type: u.combat_type,
      is_galactic_legend: u.is_galactic_legend,
      zeta_abilities: u.zeta_abilities || [], omicron_abilities: u.omicron_abilities || []
    } };
  });
  return { data: p.data, units };
}

exports.handler = async (event) => {
  const q = event.queryStringParameters || {};
  const path = (q.path || '').replace(/^\/+|\/+$/g, '');
  const isPlayer = /^player\/\d{9}$/.test(path);
  const isDB = /^(characters|ships)$/.test(path);
  const isGuild = /^guild-profile\/[A-Za-z0-9_-]{10,40}$/.test(path);
  if (!isPlayer && !isDB && !isGuild) return json(400, { error: 'Ruta no permitida' });

  try {
    const r = await fetch(`https://swgoh.gg/api/${path}/`, {
      headers: { 'User-Agent': UA, Accept: 'application/json,text/plain,*/*', 'Accept-Language': 'es-EC,es;q=0.9,en;q=0.8' }
    });
    if (!r.ok) return json(r.status, { error: `swgoh.gg respondió ${r.status}` });
    const data = await r.json();
    if (isPlayer) return json(200, slimPlayer(data), 900);
    if (isGuild) return json(200, slimGuild(data), 3600);
    return json(200, slimUnits(data), 86400);
  } catch (e) {
    return json(502, { error: String(e) });
  }
};
