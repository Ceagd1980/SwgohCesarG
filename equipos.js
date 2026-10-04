/* =====================================================================
   DATOS EDITABLES DEL RADAR SWGOH
   - Aquí cambias cuentas, equipos meta, counters base y planetas de ROTE.
   - Los identificadores (IDs) son los "base_id" de swgoh.gg.
     Si un ID no existe, la página lo marca en "Diagnóstico" para corregirlo.
   ===================================================================== */

window.CUENTAS = [
  { nombre: 'DARTHRASEC',      codigo: '684425683' },
  { nombre: 'CESGINSKYWALKER', codigo: '211524616' },
  { nombre: 'GINCESKYWALKER',  codigo: '473147155' },
  { nombre: 'TOUCHMEWOOK',     codigo: '785445299' },
  { nombre: 'DARTHRASEC2',     codigo: '295812246' }
];

// Temporadas de GAC para los counters de swgoh.gg (actualízalas cuando cambie la temporada)
window.TEMPORADAS = [
  { id: 'CHAMPIONSHIPS_GRAND_ARENA_GA2_EVENT_SEASON_82', nombre: '5v5 · Temporada 82' },
  { id: 'CHAMPIONSHIPS_GRAND_ARENA_GA2_EVENT_SEASON_83', nombre: '3v3 · Temporada 83' }
];

/* Equipos meta.
   core  = obligatorios (si falta uno, el equipo no está disponible)
   flex  = opciones para completar hasta 5 (para 3v3 se usan 3)
   relic = reliquia mínima recomendada para GAC/TW
   tier  = 1 (mejor) a 5
   def   = buen equipo de defensa
   Los equipos marcados "verifica" son orientativos: revisa en swgoh.gg cuando cambie el meta. */
window.EQUIPOS = [
  { key:'see',   nombre:'Sith Eternal Emperor',  lider:'SITHPALPATINE', core:['SITHPALPATINE'], flex:['VADER','WATTAMBOR','DARTHSIDIOUS','GRANDADMIRALTHRAWN','MARAJADE','SITHTROOPER','DARTHTALON'], relic:7, tier:1, def:true,  faccion:'Sith / Imperio' },
  { key:'slkr',  nombre:'Supreme Leader Kylo Ren', lider:'SUPREMELEADERKYLOREN', core:['SUPREMELEADERKYLOREN'], flex:['KYLORENUNMASKED','DARKREY','SITHTROOPER','FOSITHTROOPER','FIRSTORDEROFFICERMALE','GENERALHUX'], relic:7, tier:1, def:true, faccion:'Primera Orden' },
  { key:'rey',   nombre:'Rey (Leyenda Galáctica)', lider:'GLREY', core:['GLREY'], flex:['BENSOLO','REYJEDITRAINING','EPIXFINN','EPIXPOE','AMILYNHOLDO','BB8'], relic:7, tier:1, def:false, faccion:'Resistencia' },
  { key:'jml',   nombre:'Jedi Master Luke', lider:'GRANDMASTERLUKE', core:['GRANDMASTERLUKE'], flex:['JEDIKNIGHTLUKE','HERMITYODA','JEDIKNIGHTREVAN','GRANDMASTERYODA','OLDBENKENOBI'], relic:7, tier:1, def:true, faccion:'Jedi' },
  { key:'jmk',   nombre:'Jedi Master Kenobi', lider:'JEDIMASTERKENOBI', core:['JEDIMASTERKENOBI','COMMANDERAHSOKA'], flex:['GENERALKENOBI','MACEWINDU','AHSOKATANO','KIADIMUNDI'], relic:7, tier:1, def:false, faccion:'República / Jedi' },
  { key:'leia',  nombre:'Leia Organa (Leyenda)', lider:'GLLEIA', core:['GLLEIA'], flex:['CAPTAINDROGAN','R2D2_LEGENDARY','CASSIANUNDERCOVER','CAPTAINREX','ADMIRALRADDUS'], relic:7, tier:1, def:false, faccion:'Rebeldes' },
  { key:'jabba', nombre:'Jabba the Hutt', lider:'JABBATHEHUTT', core:['JABBATHEHUTT'], flex:['KRRSANTAN','BOUSHH','UNDERCOVERLANDO','SKIFFGUARD','BOBAFETT'], relic:7, tier:1, def:true, faccion:'Cartel Hutt' },
  { key:'lv',    nombre:'Lord Vader', lider:'LORDVADER', core:['LORDVADER'], flex:[], relic:7, tier:1, def:true, faccion:'Imperio', nota:'Completa con 4 a tu elección (verifica en swgoh.gg).' },
  { key:'bane',  nombre:'Darth Bane', lider:'DARTHBANE', core:['DARTHBANE'], flex:['COUNTDOOKU','VADER','MAUL','DARTHMALGUS','SAVAGEOPRESS'], relic:7, tier:2, def:true, faccion:'Sith' },
  { key:'baylan',nombre:'Baylan Skoll', lider:'BAYLANSKOLL', core:['BAYLANSKOLL','MARROK','SHINHATI'], flex:[], relic:7, tier:2, def:true, faccion:'Mercenarios' },
  { key:'queen', nombre:'Queen Amidala', lider:'QUEENAMIDALA', core:['QUEENAMIDALA','MASTERQUIGON','PADAWANOBIWAN'], flex:[], relic:7, tier:2, def:false, faccion:'República' },
  { key:'maz',   nombre:'Maz Kanata', lider:'MAZKANATA', core:['MAZKANATA'], flex:['QUIGGOLD','SM33','KIX'], relic:7, tier:2, def:false, faccion:'Piratas', nota:'verifica' },
  { key:'aphra', nombre:'Doctor Aphra', lider:'DOCTORAPHRA', core:['DOCTORAPHRA','BT1','TRIPLEZERO'], flex:['IG90'], relic:7, tier:2, def:false, faccion:'Droides / Canallas' },
  { key:'mando', nombre:"Bo-Katan (Mand'alor)", lider:'MANDALORBOKATAN', core:['MANDALORBOKATAN'], flex:['IG12','PAZVIZSLA','THEMANDALORIANBESKARARMOR','ARMORER','BOKATAN'], relic:7, tier:2, def:false, faccion:'Mandalorianos' },
  { key:'gm',    nombre:'Great Mothers', lider:'GREATMOTHERS', core:['GREATMOTHERS'], flex:['MORGANELSBETH','NIGHTSISTERSPIRIT','NIGHTSISTERZOMBIE','DAKA'], relic:7, tier:2, def:true, faccion:'Hermanas de la Noche' },
  { key:'dr',    nombre:'Darth Revan', lider:'DARTHREVAN', core:['DARTHREVAN','BASTILASHANDARK','DARTHMALAK'], flex:['HK47','SITHMARAUDER','SITHTROOPER'], relic:7, tier:3, def:true, faccion:'Imperio Sith' },
  { key:'jkr',   nombre:'Jedi Knight Revan', lider:'JEDIKNIGHTREVAN', core:['JEDIKNIGHTREVAN'], flex:['JOLEEBINDO','BASTILASHAN','GRANDMASTERYODA','HERMITYODA','JEDIKNIGHTLUKE'], relic:7, tier:3, def:false, faccion:'Jedi / Antigua República' },
  { key:'gas',   nombre:'General Skywalker (501)', lider:'GENERALSKYWALKER', core:['GENERALSKYWALKER','CT7567'], flex:['CT5555','CT210408','ARCTROOPER501ST','AHSOKATANO'], relic:7, tier:3, def:true, faccion:'501 / Clones' },
  { key:'bb',    nombre:'Bad Batch', lider:'BADBATCHHUNTER', core:['BADBATCHHUNTER','BADBATCHWRECKER','BADBATCHTECH','BADBATCHECHO','BADBATCHOMEGA'], flex:[], relic:7, tier:3, def:false, faccion:'Bad Batch' },
  { key:'gungan',nombre:'Gungans', lider:'BOSSNASS', core:['BOSSNASS','CAPTAINTARPALS','BOOMADIER'], flex:['JARJARBINKS','GUNGANPHALANX'], relic:7, tier:3, def:true, faccion:'Gungans' },
  { key:'ns',    nombre:'Hermanas de la Noche (Talzin)', lider:'MOTHERTALZIN', core:['MOTHERTALZIN'], flex:['ASAJVENTRESS','MERRIN','NIGHTSISTERZOMBIE','DAKA','NIGHTTROOPER'], relic:7, tier:3, def:true, faccion:'Hermanas de la Noche' },
  { key:'inq',   nombre:'Inquisidores', lider:'GRANDINQUISITOR', core:['GRANDINQUISITOR'], flex:['THIRDSISTER','SEVENTHSISTER','FIFTHBROTHER','EIGHTHBROTHER','NINTHSISTER','SECONDSISTER'], relic:7, tier:3, def:true, faccion:'Inquisidores' },
  { key:'gideon',nombre:'Moff Gideon (Remanente)', lider:'MOFFGIDEONS3', core:['MOFFGIDEONS3'], flex:['DARKTROOPER','CAPTAINENOCH','SCOUTTROOPER_V3','NIGHTTROOPER'], relic:7, tier:4, def:true, faccion:'Remanente Imperial' },
  { key:'sep',   nombre:'Separatistas (Grievous)', lider:'GRIEVOUS', core:['GRIEVOUS','B1BATTLEDROIDV2','B2SUPERBATTLEDROID'], flex:['MAGNAGUARD','DROIDEKA','WATTAMBOR'], relic:7, tier:4, def:true, faccion:'Separatistas' },
  { key:'phoenix',nombre:'Phoenix (Hera)', lider:'HERASYNDULLAS3', core:['HERASYNDULLAS3'], flex:['KANANJARRUSS3','EZRABRIDGERS3','CHOPPERS3','ZEBS3','SABINEWRENS3'], relic:7, tier:4, def:false, faccion:'Phoenix' },
  { key:'cere',  nombre:'Cere Junda (Zeffo)', lider:'CEREJUNDA', core:['CEREJUNDA','CALKESTIS'], flex:['MERRIN','SECONDSISTER','BENSOLO'], relic:7, tier:4, def:false, faccion:'Usuarios de la Fuerza', nota:'verifica' }
];

/* Counters base (de swgoh.gg, para cuando la consulta en vivo no responda).
   Formato: LIDER_RIVAL: [[líder, miembro, miembro], ...] */
window.COUNTERS_BASE = {
  SITHPALPATINE: [
    ['JEDIMASTERKENOBI','COMMANDERAHSOKA','GENERALKENOBI'],
    ['QUEENAMIDALA','MASTERQUIGON','PADAWANOBIWAN'],
    ['MAZKANATA','QUIGGOLD','SM33'],
    ['DARTHBANE','COUNTDOOKU'],
    ['GLLEIA','CAPTAINDROGAN','R2D2_LEGENDARY'],
    ['SUPREMELEADERKYLOREN','DARKREY','KYLORENUNMASKED'],
    ['BAYLANSKOLL','MARROK','SHINHATI'],
    ['MANDALORBOKATAN','IG12','PAZVIZSLA'],
    ['DOCTORAPHRA','BT1','TRIPLEZERO']
  ]
};

/* ROTE · Rise of the Empire (datos de genskaar.github.io/tb_empire)
   lado: DS = Lado Oscuro, LS = Lado Luminoso, MX = Mixto
   relic = reliquia mínima para misiones de combate de esa fase */
window.ROTE = [
  { fase:1, relic:5, planetas:[ {n:'Mustafar',lado:'DS',estrellas3:248333333}, {n:'Corellia',lado:'MX',estrellas3:238333333}, {n:'Coruscant',lado:'LS',estrellas3:248333333} ] },
  { fase:2, relic:6, planetas:[ {n:'Geonosis',lado:'DS',estrellas3:316000000}, {n:'Felucia',lado:'MX',estrellas3:316000000}, {n:'Bracca',lado:'LS',estrellas3:303500000} ] },
  { fase:3, relic:7, planetas:[ {n:'Dathomir',lado:'DS',estrellas3:339116667}, {n:'Tatooine',lado:'MX',estrellas3:407366667}, {n:'Kashyyyk',lado:'LS',estrellas3:407366667}, {n:'Zeffo (bonus)',lado:'LS',estrellas3:287179167,bonus:true} ] },
  { fase:4, relic:8, planetas:[ {n:'Haven-class Medical Station',lado:'DS',estrellas3:500304479}, {n:'Kessel',lado:'MX',estrellas3:500304479}, {n:'Lothal',lado:'LS',estrellas3:524984167} ] },
  { fase:5, relic:9, planetas:[ {n:'Malachor',lado:'DS',estrellas3:729948167}, {n:'Vandor',lado:'MX',estrellas3:729948167}, {n:'Kafrene',lado:'LS',estrellas3:729948167} ] },
  { fase:6, relic:9, planetas:[ {n:'Death Star',lado:'DS',estrellas3:1246272567}, {n:'Hoth',lado:'MX',estrellas3:1246272567}, {n:'Scarif',lado:'LS',estrellas3:1188686629} ] }
];
