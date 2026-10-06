/* =====================================================================
   DATOS EDITABLES DEL RADAR SWGOH
   IDs = "base_id" de swgoh.gg. Si alguno no existe, sale en "Diagnóstico".
   ===================================================================== */

window.CUENTAS = [
  { nombre: 'DARTHRASEC',      codigo: '684425683' },
  { nombre: 'CESGINSKYWALKER', codigo: '211524616' },
  { nombre: 'GINCESKYWALKER',  codigo: '473147155' },
  { nombre: 'TOUCHMEWOOK',     codigo: '785445299' },
  { nombre: 'DARTHRASEC2',     codigo: '295812246' }
];

/* Temporada 5v5 que abren los enlaces de counters (cámbiala cuando salga una nueva temporada 5v5) */
window.TEMPORADA_5V5 = 'CHAMPIONSHIPS_GRAND_ARENA_GA2_EVENT_SEASON_82';

/* Abreviaturas que se muestran en vez del nombre largo (el nombre completo sale al pasar el ratón) */
window.ABREV = {
  SITHPALPATINE:'SEE', SUPREMELEADERKYLOREN:'SLKR', GLREY:'Rey GL', GRANDMASTERLUKE:'JML', JEDIMASTERKENOBI:'JMK',
  LORDVADER:'LV', GLLEIA:'Leia GL', GLAHSOKATANO:'Ahsoka GL', GLHONDO:'Hondo GL', JABBATHEHUTT:'Jabba',
  COMMANDERAHSOKA:'CAT', GENERALKENOBI:'GK', KYLORENUNMASKED:'KRU', DARKREY:'Rey DS', GENERALSKYWALKER:'GAS',
  DARTHREVAN:'DR', JEDIKNIGHTREVAN:'JKR', BASTILASHANDARK:'BSF', BASTILASHAN:'Bastila', GRANDINQUISITOR:'GI',
  GRANDMASTERYODA:'GMY', HERMITYODA:'H. Yoda', JEDIKNIGHTLUKE:'JKL', JEDIKNIGHTCAL:'JKCK', LEIAJEDITRAINING:'Leia JT',
  REYJEDITRAINING:'RJT', EMPERORPALPATINE:'Palpatine', DARTHSIDIOUS:'Sidious', WATTAMBOR:'Wat', GRANDADMIRALTHRAWN:'Thrawn',
  MARAJADE:'Mara', SITHTROOPER:'Sith Tr.', FOSITHTROOPER:'FOST', GENERALHUX:'Hux', BENSOLO:'Ben Solo', EPIXFINN:'Finn',
  EPIXPOE:'Poe', AMILYNHOLDO:'Holdo', CAPTAINDROGAN:'Drogan', R2D2_LEGENDARY:'R2', CASSIANUNDERCOVER:'Cassian UC',
  KRRSANTAN:'Krrsantan', BOUSHH:'Boushh', UNDERCOVERLANDO:'Lando UC', SKIFFGUARD:'Skiff', BOBAFETT:'Boba',
  BOBAFETTSCION:'BFSJ', MANDALORBOKATAN:"Mand'alor", THEMANDALORIANBESKARARMOR:'Mando BA', PAZVIZSLA:'Paz', IG12:'IG-12',
  GREATMOTHERS:'G. Mothers', MORGANELSBETH:'Morgan', NIGHTSISTERSPIRIT:'NS Spirit', NIGHTSISTERZOMBIE:'Zombie',
  BAYLANSKOLL:'Baylan', SHINHATI:'Shin', MARROK:'Marrok', QUEENAMIDALA:'Queen', MASTERQUIGON:'MQG', PADAWANOBIWAN:'P. Obi',
  MAZKANATA:'Maz', QUIGGOLD:'Quiggold', SM33:'SM-33', DOCTORAPHRA:'Aphra', TRIPLEZERO:'0-0-0', MOTHERTALZIN:'Talzin',
  ASAJVENTRESS:'Ventress', MOFFGIDEONS3:'Gideon', GRIEVOUS:'GG', B1BATTLEDROIDV2:'B1', B2SUPERBATTLEDROID:'B2',
  CT7567:'Rex', CT5555:'Fives', CT210408:'Echo', ARCTROOPER501ST:'ARC', HERASYNDULLAS3:'Hera', DARTHMALAK:'Malak',
  DARTHMALGUS:'Malgus', DARTHTRAYA:'Traya', DARTHNIHILUS:'Nihilus', SAVAGEOPRESS:'Savage', BOSSNASS:'Boss Nass',
  CAPTAINTARPALS:'Tarpals', STRANGER:'Stranger', MAULHATEFUELED:'Maul HF', STARKILLER:'Starkiller',
  JEDIMASTERMACEWINDU:'Mace JM', MACEWINDU:'Mace', RACCOON:'Rotta', SATELESHAN:'Satele', VADERDUELSEND:'Vader DE',
  VADER:'Vader', APPO:'Appo', OPERATIVE:'Operative', EZRAEXILE:'Ezra Exile', PADAWANSABINE:'Sabine P.',
  CAPTAINSILVO:'Silvo', VANE:'Vane', HUMANTHUG:'Thug', GAMORREANGUARD:'Gamorrean', CADBANE:'Cad Bane', GREEDO:'Greedo',
  COUNTDOOKU:'Dooku', SITHASSASSIN:'Sith Assassin', DARTHTALON:'Talon', CEREJUNDA:'Cere', CALKESTIS:'Cal',
  AHSOKATANO:'Ahsoka', KIADIMUNDI:'Ki-Adi', JOLEEBINDO:'Jolee', HK47:'HK-47', SITHMARAUDER:'Marauder',
  FIRSTORDEROFFICERMALE:'FOO', FIRSTORDERTROOPER:'FOTP', HUYANG:'Huyang', BRUTUS:'Brutus', KLEYA:'Kleya',
  LUTHENRAEL:'Luthen', TARONMALICOS:'Taron', THIRDSISTER:'3rd Sister', SEVENTHSISTER:'7th Sister',
  ADMIRALPIETT:'Piett', GRANDMOFFTARKIN:'Tarkin', OLDBENKENOBI:'Old Ben', KIX:'Kix', BT1:'BT-1', IG90:'IG-90'
};

/* Equipos meta.
   core = obligatorios · flex = opciones para completar · relic = reliquia mínima · tier 1 (mejor) a 5 · def = buena defensa */
window.EQUIPOS = [
  { key:'rey',   nombre:'Rey GL', lider:'GLREY', core:['GLREY'], flex:['BENSOLO','CALKESTIS','REYJEDITRAINING','EPIXFINN','EPIXPOE','AMILYNHOLDO','BB8'], relic:7, tier:1, def:true, faccion:'Resistencia' },
  { key:'ahsoka',nombre:'Ahsoka GL', lider:'GLAHSOKATANO', core:['GLAHSOKATANO'], flex:['EZRAEXILE','PADAWANSABINE','HUYANG'], relic:7, tier:1, def:true, faccion:'Rebeldes / Usuarios de la Fuerza' },
  { key:'hondo', nombre:'Hondo GL', lider:'GLHONDO', core:['GLHONDO'], flex:['CAPTAINSILVO','VANE','BRUTUS','SM33'], relic:7, tier:1, def:true, faccion:'Piratas' },
  { key:'lv',    nombre:'LV', lider:'LORDVADER', core:['LORDVADER'], flex:['APPO','OPERATIVE','MAULS7','GRANDADMIRALTHRAWN'], relic:7, tier:1, def:true, faccion:'Imperio' },
  { key:'jabba', nombre:'Jabba', lider:'JABBATHEHUTT', core:['JABBATHEHUTT'], flex:['BOUSHH','KRRSANTAN','UNDERCOVERLANDO','SKIFFGUARD','BOBAFETT'], relic:7, tier:1, def:true, faccion:'Cartel Hutt' },
  { key:'see',   nombre:'SEE', lider:'SITHPALPATINE', core:['SITHPALPATINE'], flex:['DARTHBANE','WATTAMBOR','VADER','DARTHSIDIOUS','GRANDADMIRALTHRAWN','MARAJADE','SITHTROOPER','DARTHTALON'], relic:7, tier:1, def:true, faccion:'Sith / Imperio' },
  { key:'slkr',  nombre:'SLKR', lider:'SUPREMELEADERKYLOREN', core:['SUPREMELEADERKYLOREN'], flex:['DARKREY','KYLORENUNMASKED','GENERALHUX','FIRSTORDERTROOPER','SITHTROOPER','FOSITHTROOPER','FIRSTORDEROFFICERMALE'], relic:7, tier:1, def:true, faccion:'Primera Orden' },
  { key:'jml',   nombre:'JML', lider:'GRANDMASTERLUKE', core:['GRANDMASTERLUKE'], flex:['JEDIKNIGHTCAL','LEIAJEDITRAINING','JEDIKNIGHTLUKE','HERMITYODA','GRANDMASTERYODA','JEDIKNIGHTREVAN'], relic:7, tier:1, def:true, faccion:'Jedi' },
  { key:'leia',  nombre:'Leia GL', lider:'GLLEIA', core:['GLLEIA'], flex:['CAPTAINDROGAN','R2D2_LEGENDARY','CASSIANUNDERCOVER','CAPTAINREX','ADMIRALRADDUS'], relic:7, tier:1, def:false, faccion:'Rebeldes' },
  { key:'jmk',   nombre:'JMK', lider:'JEDIMASTERKENOBI', core:['JEDIMASTERKENOBI','COMMANDERAHSOKA'], flex:['GENERALKENOBI','MACEWINDU','AHSOKATANO','KIADIMUNDI'], relic:7, tier:1, def:false, faccion:'República / Jedi' },
  { key:'stranger',nombre:'Stranger', lider:'STRANGER', core:['STRANGER'], flex:['MAULHATEFUELED','STARKILLER','TARONMALICOS'], relic:7, tier:2, def:true, faccion:'Usuarios de la Fuerza' },
  { key:'mace',  nombre:'Mace JM', lider:'JEDIMASTERMACEWINDU', core:['JEDIMASTERMACEWINDU'], flex:['MACEWINDU','KIADIMUNDI','AHSOKATANO'], relic:7, tier:2, def:true, faccion:'Jedi', nota:'verifica los miembros' },
  { key:'palp',  nombre:'Palpatine', lider:'EMPERORPALPATINE', core:['EMPERORPALPATINE'], flex:['MARAJADE','VADERDUELSEND','VADER','GRANDADMIRALTHRAWN'], relic:7, tier:2, def:true, faccion:'Imperio' },
  { key:'rotta', nombre:'Rotta', lider:'RACCOON', core:['RACCOON'], flex:['CADBANE','HUMANTHUG','GAMORREANGUARD','GREEDO'], relic:7, tier:2, def:true, faccion:'Cartel Hutt' },
  { key:'bane',  nombre:'Darth Bane', lider:'DARTHBANE', core:['DARTHBANE'], flex:['COUNTDOOKU','SITHASSASSIN','VADER','DARTHSIDIOUS','MAUL','SITHTROOPER'], relic:7, tier:2, def:true, faccion:'Sith' },
  { key:'baylan',nombre:'Baylan', lider:'BAYLANSKOLL', core:['BAYLANSKOLL','MARROK','SHINHATI'], flex:[], relic:7, tier:2, def:true, faccion:'Mercenarios' },
  { key:'queen', nombre:'Queen Amidala', lider:'QUEENAMIDALA', core:['QUEENAMIDALA','MASTERQUIGON','PADAWANOBIWAN'], flex:[], relic:7, tier:2, def:true, faccion:'República' },
  { key:'satele',nombre:'Satele', lider:'SATELESHAN', core:['SATELESHAN'], flex:['BASTILASHAN','JEDIKNIGHTREVAN','JOLEEBINDO'], relic:7, tier:2, def:false, faccion:'Antigua República' },
  { key:'cassian',nombre:'Cassian UC', lider:'CASSIANUNDERCOVER', core:['CASSIANUNDERCOVER'], flex:['KLEYA','LUTHENRAEL'], relic:7, tier:2, def:false, faccion:'Rebeldes' },
  { key:'maz',   nombre:'Maz', lider:'MAZKANATA', core:['MAZKANATA'], flex:['KIX','QUIGGOLD','SM33'], relic:7, tier:2, def:false, faccion:'Piratas' },
  { key:'mando', nombre:"Mand'alor", lider:'MANDALORBOKATAN', core:['MANDALORBOKATAN'], flex:['IG12','PAZVIZSLA','THEMANDALORIANBESKARARMOR','ARMORER'], relic:7, tier:2, def:false, faccion:'Mandalorianos' },
  { key:'gm',    nombre:'Great Mothers', lider:'GREATMOTHERS', core:['GREATMOTHERS'], flex:['MORGANELSBETH','NIGHTSISTERSPIRIT','NIGHTSISTERZOMBIE','DAKA'], relic:7, tier:2, def:true, faccion:'Hermanas de la Noche' },
  { key:'aphra', nombre:'Aphra', lider:'DOCTORAPHRA', core:['DOCTORAPHRA','BT1','TRIPLEZERO'], flex:['IG90'], relic:7, tier:3, def:false, faccion:'Droides / Canallas' },
  { key:'traya', nombre:'Traya', lider:'DARTHTRAYA', core:['DARTHTRAYA'], flex:['DARTHNIHILUS','SAVAGEOPRESS','DARTHTALON','DARTHSION'], relic:7, tier:3, def:true, faccion:'Sith' },
  { key:'malgus',nombre:'Malgus', lider:'DARTHMALGUS', core:['DARTHMALGUS'], flex:['DARTHMALAK','DARTHREVAN','BASTILASHANDARK'], relic:7, tier:3, def:true, faccion:'Imperio Sith' },
  { key:'dr',    nombre:'DR', lider:'DARTHREVAN', core:['DARTHREVAN','BASTILASHANDARK','DARTHMALAK'], flex:['HK47','SITHMARAUDER','SITHTROOPER'], relic:7, tier:3, def:true, faccion:'Imperio Sith' },
  { key:'jkr',   nombre:'JKR', lider:'JEDIKNIGHTREVAN', core:['JEDIKNIGHTREVAN'], flex:['JOLEEBINDO','BASTILASHAN','GRANDMASTERYODA','HERMITYODA','JEDIKNIGHTLUKE'], relic:7, tier:3, def:false, faccion:'Jedi / Antigua República' },
  { key:'gas',   nombre:'GAS', lider:'GENERALSKYWALKER', core:['GENERALSKYWALKER','CT7567'], flex:['CT5555','CT210408','ARCTROOPER501ST','AHSOKATANO'], relic:7, tier:3, def:true, faccion:'501 / Clones' },
  { key:'gungan',nombre:'Gungans', lider:'BOSSNASS', core:['BOSSNASS','CAPTAINTARPALS','BOOMADIER'], flex:['JARJARBINKS','GUNGANPHALANX'], relic:7, tier:3, def:true, faccion:'Gungans' },
  { key:'inq',   nombre:'GI / Inquisidores', lider:'GRANDINQUISITOR', core:['GRANDINQUISITOR'], flex:['THIRDSISTER','SEVENTHSISTER','FIFTHBROTHER','EIGHTHBROTHER','NINTHSISTER','SECONDSISTER'], relic:7, tier:3, def:true, faccion:'Inquisidores' },
  { key:'bb',    nombre:'Bad Batch', lider:'BADBATCHHUNTER', core:['BADBATCHHUNTER','BADBATCHWRECKER','BADBATCHTECH','BADBATCHECHO','BADBATCHOMEGA'], flex:[], relic:7, tier:4, def:false, faccion:'Bad Batch' },
  { key:'ns',    nombre:'Talzin', lider:'MOTHERTALZIN', core:['MOTHERTALZIN'], flex:['ASAJVENTRESS','MERRIN','NIGHTSISTERZOMBIE','DAKA','NIGHTTROOPER'], relic:7, tier:4, def:true, faccion:'Hermanas de la Noche' },
  { key:'gideon',nombre:'Gideon', lider:'MOFFGIDEONS3', core:['MOFFGIDEONS3'], flex:['DARKTROOPER','CAPTAINENOCH','SCOUTTROOPER_V3','NIGHTTROOPER'], relic:7, tier:4, def:true, faccion:'Remanente Imperial' },
  { key:'sep',   nombre:'GG Separatistas', lider:'GRIEVOUS', core:['GRIEVOUS','B1BATTLEDROIDV2','B2SUPERBATTLEDROID'], flex:['MAGNAGUARD','DROIDEKA','WATTAMBOR'], relic:7, tier:4, def:true, faccion:'Separatistas' },
  { key:'phoenix',nombre:'Hera Phoenix', lider:'HERASYNDULLAS3', core:['HERASYNDULLAS3'], flex:['KANANJARRUSS3','EZRABRIDGERS3','CHOPPERS3','ZEBS3','SABINEWRENS3'], relic:7, tier:4, def:false, faccion:'Phoenix' },
  { key:'cere',  nombre:'Cere (Zeffo)', lider:'CEREJUNDA', core:['CEREJUNDA','CALKESTIS'], flex:['MERRIN','SECONDSISTER','BENSOLO'], relic:7, tier:4, def:false, faccion:'Usuarios de la Fuerza' }
];

/* Counters por líder rival — datos públicos de swgoh.gg/gac/counters (GAC Temporada 83, 3v3), tomados el 4-oct-2026.
   Formato: 'LIDER,MIEMBRO,MIEMBRO|batallas|%victorias'. En 5v5 usa el mismo líder y completa con su facción. */
window.COUNTERS_FUENTE = 'swgoh.gg · GAC Temporada 83 (3v3) · 4-oct-2026';
window.COUNTERS_BASE = {
  SITHPALPATINE:['MAZKANATA,KIX,SM33|14|100','QUEENAMIDALA,MASTERQUIGON,PADAWANOBIWAN|10|100','JEDIMASTERKENOBI,COMMANDERAHSOKA,GENERALKENOBI|6|100','MAZKANATA,QUIGGOLD,SM33|6|100','DARTHBANE,COUNTDOOKU|5|100','DOCTORAPHRA,BT1,TRIPLEZERO|5|100','MANDALORBOKATAN,IG12,PAZVIZSLA|5|100','RACCOON|4|100','SUPREMELEADERKYLOREN,DARKREY,KYLORENUNMASKED|4|100','BAYLANSKOLL,MARROK,SHINHATI|3|100','GLLEIA,CAPTAINDROGAN,R2D2_LEGENDARY|3|100','JEDIMASTERKENOBI,COMMANDERAHSOKA,MACEWINDU|3|100','GREATMOTHERS,MORGANELSBETH,NIGHTSISTERSPIRIT|2|100'],
  GLAHSOKATANO:['GLLEIA,CAPTAINDROGAN,R2D2_LEGENDARY|1053|99','SITHPALPATINE,DARTHBANE|3826|94','SUPREMELEADERKYLOREN,DARKREY,GENERALHUX|2730|92','STRANGER,MAULHATEFUELED,STARKILLER|1143|90'],
  GLHONDO:['SUPREMELEADERKYLOREN,DARKREY,KYLORENUNMASKED|6127|99','STRANGER,MAULHATEFUELED,STARKILLER|4781|99','SUPREMELEADERKYLOREN,DARKREY,GENERALHUX|2337|99','GLLEIA,CAPTAINDROGAN,R2D2_LEGENDARY|895|98','DARTHBANE,COUNTDOOKU|406|98'],
  LORDVADER:['DARTHBANE,COUNTDOOKU|225|99','DARTHBANE,COUNTDOOKU,APPO|495|96','MANDALORBOKATAN,IG12,THEMANDALORIANBESKARARMOR|539|87','SUPREMELEADERKYLOREN,DARKREY,KYLORENUNMASKED|3313|86','SITHPALPATINE,DARTHBANE|6689|85','DARTHBANE,SITHASSASSIN|4019|84','DARTHBANE,FOSITHTROOPER|417|84','GLLEIA,CAPTAINDROGAN,R2D2_LEGENDARY|315|84','DARTHBANE,DARTHSIDIOUS|668|83'],
  JABBATHEHUTT:['SUPREMELEADERKYLOREN,DARKREY,KYLORENUNMASKED|5903|99','GLAHSOKATANO,EZRAEXILE,PADAWANSABINE|2602|99','SUPREMELEADERKYLOREN,DARKREY,GENERALHUX|2318|99','GLAHSOKATANO,EZRAEXILE,HUYANG|1517|99','JEDIMASTERKENOBI,COMMANDERAHSOKA,MACEWINDU|12600|98','LORDVADER,APPO,OPERATIVE|5614|98','SITHPALPATINE,DARTHBANE|851|97','RACCOON,CADBANE,HUMANTHUG|1066|95','JEDIMASTERKENOBI,COMMANDERAHSOKA,GENERALKENOBI|11900|92','CASSIANUNDERCOVER,KLEYA,LUTHENRAEL|2339|92','RACCOON,GAMORREANGUARD,HUMANTHUG|1828|91','GRANDMASTERLUKE,JEDIKNIGHTCAL,LEIAJEDITRAINING|1592|91'],
  BOSSNASS:['SUPREMELEADERKYLOREN,DARKREY,KYLORENUNMASKED|236|100','JEDIMASTERKENOBI,COMMANDERAHSOKA,GENERALKENOBI|1310|99','SITHPALPATINE,DARTHBANE|475|99','JEDIMASTERKENOBI,COMMANDERAHSOKA,MACEWINDU|328|99','SUPREMELEADERKYLOREN,DARKREY,GENERALHUX|654|98','DARTHTRAYA,DARTHNIHILUS,SAVAGEOPRESS|980|97','QUEENAMIDALA,MASTERQUIGON,PADAWANOBIWAN|827|95','DARTHMALGUS,DARTHMALAK,DARTHREVAN|534|94','LORDVADER,APPO,OPERATIVE|298|93','GREATMOTHERS,MORGANELSBETH,NIGHTSISTERSPIRIT|399|93','GRANDMASTERLUKE,JEDIKNIGHTCAL,LEIAJEDITRAINING|377|93'],
  STRANGER:['LORDVADER,APPO,OPERATIVE|4433|91','SATELESHAN,BASTILASHAN,JEDIKNIGHTREVAN|395|88','SATELESHAN,JEDIKNIGHTREVAN,JOLEEBINDO|4783|77','STRANGER,MAULHATEFUELED,STARKILLER|857|74','SATELESHAN,BASTILASHAN,JEDIKNIGHTREVAN|25800|71','DARTHBANE,SITHASSASSIN|249|66','QUEENAMIDALA,MASTERQUIGON,PADAWANOBIWAN|922|66','SITHPALPATINE,DARTHBANE|418|65','GLLEIA,CAPTAINDROGAN,R2D2_LEGENDARY|346|63'],
  JEDIMASTERMACEWINDU:['DARTHMALGUS,DARTHMALAK,DARTHREVAN|352|100','THIRDSISTER,GRANDINQUISITOR,SEVENTHSISTER|331|100','GRANDMASTERLUKE,JEDIKNIGHTCAL,JEDIKNIGHTLUKE|304|100','LORDVADER,APPO,OPERATIVE|232|100','SITHPALPATINE,DARTHBANE|190|100','SUPREMELEADERKYLOREN,DARKREY,GENERALHUX|187|100','DARTHMALGUS,BASTILASHANDARK,DARTHMALAK|177|100','QUEENAMIDALA,MASTERQUIGON,PADAWANOBIWAN|150|100','SITHPALPATINE,WATTAMBOR|132|100','GRANDMASTERLUKE,HERMITYODA,JEDIKNIGHTLUKE|626|99'],
  EMPERORPALPATINE:['GLHONDO,CAPTAINSILVO,VANE|446|100','JEDIMASTERKENOBI,AHSOKATANO,COMMANDERAHSOKA|353|100','GLHONDO,BRUTUS,VANE|214|100','SUPREMELEADERKYLOREN,DARKREY|205|100','MAZKANATA,KIX,QUIGGOLD|187|100','JEDIMASTERKENOBI,COMMANDERAHSOKA,GENERALKENOBI|3888|99','LORDVADER,APPO,OPERATIVE|995|99','GLLEIA,CAPTAINDROGAN,R2D2_LEGENDARY|1103|99','STRANGER,MAULHATEFUELED,STARKILLER|714|99','GLHONDO,SM33,VANE|590|99'],
  RACCOON:['SUPREMELEADERKYLOREN,DARKREY,GENERALHUX|1916|97','SUPREMELEADERKYLOREN,DARKREY,KYLORENUNMASKED|1789|96','LORDVADER,APPO,OPERATIVE|2895|94'],
  SUPREMELEADERKYLOREN:['DARTHBANE,DARTHREVAN|85|91','DARTHBANE,SITHASSASSIN|355|88','STRANGER,MAULHATEFUELED,STARKILLER|34|88','DARTHBANE,DARTHMALAK|221|87','DARTHBANE,COUNTDOOKU|1270|86','DARTHBANE,DARTHSIDIOUS|52|84','DARTHBANE,MAUL|45|84'],
  GRANDMASTERLUKE:['SITHPALPATINE,DARTHMALAK,WATTAMBOR|71|100','SITHPALPATINE,SITHTROOPER,WATTAMBOR|65|100','GLLEIA,CAPTAINDROGAN,R2D2_LEGENDARY|29|100','SITHPALPATINE,COUNTDOOKU,WATTAMBOR|25|100','SITHPALPATINE,DARTHSIDIOUS,WATTAMBOR|25|100','JEDIMASTERKENOBI,COMMANDERAHSOKA,GENERALKENOBI|22|100','SITHPALPATINE,WATTAMBOR|281|99'],
  JEDIMASTERKENOBI:['BAYLANSKOLL,MARROK,SHINHATI|2019|97','GLLEIA,CAPTAINDROGAN,R2D2_LEGENDARY|348|97','SUPREMELEADERKYLOREN,DARKREY,KYLORENUNMASKED|127|98','GLAHSOKATANO,EZRAEXILE,PADAWANSABINE|47|97','MANDALORBOKATAN,IG12,PAZVIZSLA|548|96','GRANDMASTERLUKE,JEDIKNIGHTCAL,LEIAJEDITRAINING|192|95','LORDVADER,APPO,OPERATIVE|21|100'],
  GLLEIA:['SUPREMELEADERKYLOREN,DARKREY,KYLORENUNMASKED|2114|94','SUPREMELEADERKYLOREN,DARKREY,GENERALHUX|956|94','RACCOON|745|90','STRANGER,MAULHATEFUELED,STARKILLER|672|88','STRANGER,STARKILLER,TARONMALICOS|80|88','SITHPALPATINE,DARTHBANE|444|83','GRANDMASTERLUKE,JEDIKNIGHTCAL,LEIAJEDITRAINING|436|82','RACCOON,GAMORREANGUARD,HUMANTHUG|207|81'],
  QUEENAMIDALA:['DARTHBANE,VADER|449|99','DARTHBANE,COUNTDOOKU|9440|98','DARTHBANE,SITHTROOPER|1919|98','DARTHBANE,MAUL|504|98','SUPREMELEADERKYLOREN,DARKREY,KYLORENUNMASKED|604|98','SUPREMELEADERKYLOREN,DARKREY,GENERALHUX|497|98','DARTHBANE,SITHASSASSIN|2687|97','SITHPALPATINE,DARTHBANE|663|97','DARTHBANE,DARTHSIDIOUS|759|96','RACCOON,GAMORREANGUARD,HUMANTHUG|899|92'],
  DARTHBANE:['JEDIMASTERKENOBI,COMMANDERAHSOKA,GENERALKENOBI|3|100','GRANDMASTERLUKE,HERMITYODA,JEDIKNIGHTLUKE|2|100','STRANGER,MAULHATEFUELED,STARKILLER|2|100','BAYLANSKOLL,MARROK,SHINHATI|1|100']
};

/* ROTE · Rise of the Empire (datos de genskaar.github.io/tb_empire) */
window.ROTE = [
  { fase:1, relic:5, planetas:[ {n:'Mustafar',lado:'DS',estrellas3:248333333}, {n:'Corellia',lado:'MX',estrellas3:238333333}, {n:'Coruscant',lado:'LS',estrellas3:248333333} ] },
  { fase:2, relic:6, planetas:[ {n:'Geonosis',lado:'DS',estrellas3:316000000}, {n:'Felucia',lado:'MX',estrellas3:316000000}, {n:'Bracca',lado:'LS',estrellas3:303500000} ] },
  { fase:3, relic:7, planetas:[ {n:'Dathomir',lado:'DS',estrellas3:339116667}, {n:'Tatooine',lado:'MX',estrellas3:407366667}, {n:'Kashyyyk',lado:'LS',estrellas3:407366667}, {n:'Zeffo (bonus)',lado:'LS',estrellas3:287179167,bonus:true} ] },
  { fase:4, relic:8, planetas:[ {n:'Haven-class Medical Station',lado:'DS',estrellas3:500304479}, {n:'Kessel',lado:'MX',estrellas3:500304479}, {n:'Lothal',lado:'LS',estrellas3:524984167} ] },
  { fase:5, relic:9, planetas:[ {n:'Malachor',lado:'DS',estrellas3:729948167}, {n:'Vandor',lado:'MX',estrellas3:729948167}, {n:'Kafrene',lado:'LS',estrellas3:729948167} ] },
  { fase:6, relic:9, planetas:[ {n:'Death Star',lado:'DS',estrellas3:1246272567}, {n:'Hoth',lado:'MX',estrellas3:1246272567}, {n:'Scarif',lado:'LS',estrellas3:1188686629} ] }
];

/* =====================================================================
   GUERRA TERRITORIAL (TW)
   ===================================================================== */

/* Gremios extra (los de tus 5 cuentas se detectan solos). ID = lo que va en swgoh.gg/g/ID/ */
window.GREMIOS_EXTRA = [
  { id: 'soUHsxSGQzCZpauteDFt1g', nombre: '???BrotherSithOrder???' },
  { id: 'zZUQ0vrMRJSiUHSIz1rmcA', nombre: 'Remanente mandaloriana' }
];

/* Tier list de DEFENSA 5v5 de swgoh.gg (swgoh.gg/tier-list/gac/?side=defense) · Temporada 82 · 6-oct-2026.
   t = tier · e = líder + miembros (nombres como salen en swgoh.gg) · hold = % de defensas que aguantan. */
window.TW_FUENTE = 'swgoh.gg tier list GAC 5v5 · Temporada 82 · 6-oct-2026';
window.TW_META = [
 {t:'S',hold:39.8,e:['The Stranger','Barriss Offee','Maul (Hate-Fueled)','Starkiller','Visas Marr']},
 {t:'S',hold:38.1,e:['Rey','Ben Solo','Cal Kestis','General Kenobi','Barriss Offee']},
 {t:'S',hold:41.6,e:['Supreme Leader Kylo Ren','Rey (Dark Side Vision)','Sith Trooper','General Hux','Kylo Ren (Unmasked)']},
 {t:'S',hold:28.3,e:['Leia Organa','Admiral Raddus','Captain Drogan','Jyn Erso','R2-D2']},
 {t:'S',hold:19.3,e:['Ahsoka Tano','Ezra Bridger (Exile)','General Syndulla','Huyang','Padawan Sabine Wren']},
 {t:'A',hold:27.3,e:['Rotta the Hutt','Cad Bane','Gamorrean Guard','Greedo','Mob Enforcer']},
 {t:'A',hold:22.4,e:['Lord Vader','CC-1119 "Appo"','Disguised Clone Trooper','CX-2','RC-1262 "Scorch"']},
 {t:'A',hold:11.1,e:['General Syndulla','Ezra Bridger (Exile)','Ahsoka Tano','Huyang','Padawan Sabine Wren']},
 {t:'A',hold:21.3,e:['Jango Fett','4-LOM','Asajj Ventress (Dark Disciple)','Greef Karga','The Mandalorian']},
 {t:'A',hold:15.7,e:['Pirate King Hondo Ohnaka','Brutus','Captain Silvo','SM-33','Vane']},
 {t:'A',hold:25.9,e:['Cere Junda','Cal Kestis','Ahsoka Tano (Fulcrum)','Kylo Ren (Unmasked)','Taron Malicos']},
 {t:'A',hold:28.2,e:['Bastila Shan','Jedi Master Luke Skywalker','Hermit Yoda','Jedi Knight Luke Skywalker','Wat Tambor']},
 {t:'A',hold:22.5,e:['Sith Eternal Emperor','Bastila Shan (Fallen)','Darth Malak','Darth Malgus','Darth Revan']},
 {t:'A',hold:21.0,e:['Baylan Skoll','Dengar','Hondo Ohnaka','Marrok','Shin Hati']},
 {t:'A',hold:16.8,e:['Jabba the Hutt','Boushh (Leia Organa)','Embo','Krrsantan','Skiff Guard (Lando Calrissian)']},
 {t:'A',hold:17.3,e:['Cassian Andor (Undercover)','Cinta Kaz','Kleya Marki','Luthen Rael','Vel Sartha']},
 {t:'A',hold:18.1,e:['Jedi Master Kenobi','Ahsoka Tano (Snips)','Commander Ahsoka Tano','General Kenobi','Padmé Amidala']},
 {t:'A',hold:25.0,e:['Doctor Aphra','BT-1','IG-90','0-0-0','Darth Vader']},
 {t:'A',hold:21.1,e:['Boss Nass','Gungan Boomadier','Captain Tarpals','Gungan Phalanx','Jar Jar Binks']},
 {t:'A',hold:21.3,e:["Bo-Katan (Mand'alor)",'Bo-Katan Kryze','IG-12 & Grogu','Paz Vizsla','The Mandalorian (Beskar Armor)']},
 {t:'B',hold:12.5,e:['Queen Amidala','Grand Master Yoda','Master Qui-Gon','Padawan Obi-Wan','Shaak Ti']},
 {t:'B',hold:20.4,e:['Savage Opress','Darth Nihilus','Darth Sion','Darth Talon','Darth Traya']},
 {t:'B',hold:16.3,e:['Captain Carson Teva','Colonel Ward','Grogu & Anzellans','R5-D4','Zeb Orrelios (New Republic Pilot)']},
 {t:'B',hold:17.8,e:['Satele Shan','Bastila Shan','Jedi Knight Revan','Jolee Bindo','Juhani']},
 {t:'B',hold:15.0,e:['Maz Kanata','Hondo Ohnaka','Captain Ithano','Kix','Quiggold']},
 {t:'B',hold:13.4,e:['Emperor Palpatine','Grand Moff Tarkin',"Mara Jade (The Emperor's Hand)",'Royal Guard',"Darth Vader (Duel's End)"]},
 {t:'B',hold:16.6,e:['Darth Traya','Darth Nihilus','Darth Sion','Darth Talon','Savage Opress']},
 {t:'B',hold:14.0,e:['Cobb Vanth','Chief Nebit','Coruscant Underworld Police','Jawa Scavenger','Lobot']},
 {t:'B',hold:19.7,e:['Darth Maul','Darth Nihilus','Darth Sion','Darth Traya','Savage Opress']},
 {t:'B',hold:12.3,e:['Third Sister','Eighth Brother','Fifth Brother','Grand Inquisitor','Seventh Sister']},
 {t:'B',hold:19.4,e:['4-LOM','Asajj Ventress (Dark Disciple)','Boba Fett, Scion of Jango','Fennec Shand','Zuckuss']},
 {t:'B',hold:12.8,e:['Great Mothers','Death Trooper (Peridea)','Morgan Elsbeth','Nightsister Spirit','Night Trooper']},
 {t:'B',hold:15.7,e:['Finn','Resistance Hero Finn','Resistance Hero Poe','Rose Tico','Zorii Bliss']},
 {t:'B',hold:20.9,e:['Admiral Ackbar','Captain Han Solo','Princess Leia','Stormtrooper Han','Stormtrooper Luke']},
 {t:'B',hold:12.5,e:['Darth Nihilus','Darth Sion','Darth Talon','Darth Traya','Savage Opress']},
 {t:'B',hold:10.1,e:['Jedi Master Mace Windu','Aayla Secura','Depa Billaba','Jocasta Nu','Temple Guard']},
 {t:'B',hold:11.0,e:['Darth Malgus','Bastila Shan (Fallen)','Darth Malak','Darth Revan','Sith Marauder']},
 {t:'B',hold:11.9,e:['Kelleran Beq','Depa Billaba','Jedi Master Mace Windu','Jocasta Nu','Temple Guard']},
 {t:'B',hold:16.5,e:['Mon Mothma','Cara Dune','Kyle Katarn','Luthen Rael','Pao']},
 {t:'B',hold:10.7,e:['Saw Gerrera','Baze Malbus','Chirrut Îmwe','Kyle Katarn','Luthen Rael']},
 {t:'B',hold:12.5,e:['Padmé Amidala','Ahsoka Tano (Snips)','Jedi Knight Anakin','Commander Ahsoka Tano','General Kenobi']},
 {t:'B',hold:10.5,e:['Admiral Trench','Count Dooku','Jango Fett','Nute Gunray','Wat Tambor']},
 {t:'B',hold:10.1,e:['Omega (Fugitive)','Batcher','Crosshair (Scarred)','Hunter (Mercenary)','Wrecker (Mercenary)']},
 {t:'B',hold:12.6,e:['CT-7567 "Rex"','ARC Trooper','Captain Rex','CT-21-0408 "Echo"','CT-5555 "Fives"']},
 {t:'B',hold:8.4,e:['Darth Revan','Bastila Shan (Fallen)','Darth Malak','Darth Malgus','Sith Marauder']},
 {t:'B',hold:12.8,e:['Qui-Gon Jinn','Jedi Knight Anakin','Kelleran Beq','Ki-Adi-Mundi','Mace Windu']},
 {t:'B',hold:11.0,e:['General Skywalker','ARC Trooper','CT-21-0408 "Echo"','CT-5555 "Fives"','CT-7567 "Rex"']},
 {t:'B',hold:9.0,e:['Major Partagaz','Dedra Meero','Director Krennic','Imperial Probe Droid','KX Security Droid']},
 {t:'B',hold:11.4,e:['Hera Syndulla','Captain Rex','Chopper','Kanan Jarrus','Sabine Wren']},
 {t:'B',hold:7.4,e:['Colonel Ward','Captain Carson Teva','Grogu & Anzellans','R5-D4','Zeb Orrelios (New Republic Pilot)']},
 {t:'B',hold:8.2,e:['Boba Fett, Scion of Jango','4-LOM','Asajj Ventress (Dark Disciple)','Fennec Shand','Zuckuss']},
 {t:'B',hold:9.1,e:['Commander Luke Skywalker','Threepio & Chewie','C-3PO','Chewbacca','Han Solo']},
 {t:'B',hold:6.8,e:['Tarfful','Clone Wars Chewbacca','Veteran Smuggler Chewbacca','Yoda & Chewie','Zaalbar']},
 {t:'B',hold:6.7,e:['Jedi Master Luke Skywalker','Grand Master Yoda','Hermit Yoda','Jedi Knight Cal Kestis','Jedi Knight Luke Skywalker']},
 {t:'B',hold:7.8,e:['Captain Enoch','Death Trooper (Peridea)','Night Trooper','Scout Trooper','TIE Fighter Pilot']},
 {t:'C',hold:10.3,e:['Dash Rendar','IG-11','Kuiil','L3-37','Vandor Chewbacca']},
 {t:'C',hold:13.4,e:['Sana Starros','Cara Dune','Captain Han Solo','Rebel Officer Leia Organa','Stormtrooper Han']}
];

/* Tier list de ATAQUE 5v5 (swgoh.gg/tier-list/gac/) · Temporada 82: líder → [tier, % de victorias atacando] */
window.TW_ATAQUE = {
 'Leia Organa':['S',91.6],'Supreme Leader Kylo Ren':['S',91.6],'The Stranger':['S',90.1],'Satele Shan':['S',82.0],'Jango Fett':['S',84.7],
 'Lord Vader':['A',87.9],'Ahsoka Tano':['A',90.4],'Darth Bane':['A',88.4],'Cere Junda':['A',83.6],'Baylan Skoll':['A',91.4],'Doctor Aphra':['A',89.3],
 'Sith Eternal Emperor':['A',81.9],'Queen Amidala':['A',77.1],'Jedi Master Kenobi':['A',83.6],'Pirate King Hondo Ohnaka':['A',81.9],'Omega (Fugitive)':['A',72.1],
 'Boss Nass':['A',83.3],'Darth Malgus':['A',91.3],'Cobb Vanth':['A',80.7],'Darth Traya':['A',85.6],
 "Bo-Katan (Mand'alor)":['B',80.3],'Maz Kanata':['B',87.3],'Ugnaught':['B',84.5],'Jabba the Hutt':['B',80.4],'Boba Fett, Scion of Jango':['B',69.2],
 'Jedi Master Luke Skywalker':['B',81.5],'Hondo Ohnaka':['B',81.9],'Cassian Andor (Undercover)':['B',77.2],'Ezra Bridger':['B',80.2],'Rotta the Hutt':['B',76.0],
 'Rey':['B',63.1],'Savage Opress':['B',72.1],'Third Sister':['B',78.5],'General Skywalker':['B',84.5],'Darth Maul':['B',72.5],'Great Mothers':['B',66.7],
 'Mon Mothma':['B',73.2],'Dark Trooper Moff Gideon':['B',90.0],'Emperor Palpatine':['B',72.1],'Jedi Master Mace Windu':['B',79.8],'Jedi Knight Luke Skywalker':['B',70.7],
 'Tusken Chieftain':['B',65.0],'Hera Syndulla':['B',76.4],'Captain Carson Teva':['B',69.5],'Darth Revan':['B',70.3],'50R-T':['B',65.1],'Saw Gerrera':['B',63.9],
 'Maul (Hate-Fueled)':['B',83.9],'Taron Malicos':['B',83.3],'General Veers':['B',79.3],'Finn':['B',62.4],
 'Commander Luke Skywalker':['C',77.3],'Padmé Amidala':['C',68.3],'Qui-Gon Jinn':['C',66.9],'Rey (Dark Side Vision)':['C',74.9],'Jedi Knight Revan':['C',35.7],'Tarfful':['C',66.3]
};

/* Mapa de TW como lo divide tu gremio: el FRENTE está a la DERECHA.
   col 1 = A (frente) · 2 = B · 3 = C · 4 = D (fondo) · fila = posición de arriba hacia abajo en esa columna
   tipo: pj (personajes) o nave. Si tu gremio lo divide distinto, cámbialo aquí. */
window.TW_MAPA = [
  { id:'A1', col:1, fila:1, filas:2, tipo:'pj' }, { id:'A2', col:1, fila:2, filas:2, tipo:'pj' },
  { id:'B1', col:2, fila:1, filas:2, tipo:'pj' }, { id:'B2', col:2, fila:2, filas:2, tipo:'pj' },
  { id:'C1', col:3, fila:1, filas:3, tipo:'nave' }, { id:'C2', col:3, fila:2, filas:3, tipo:'pj' }, { id:'C3', col:3, fila:3, filas:3, tipo:'pj' },
  { id:'D1', col:4, fila:1, filas:3, tipo:'nave' }, { id:'D2', col:4, fila:2, filas:3, tipo:'pj' }, { id:'D3', col:4, fila:3, filas:3, tipo:'pj' }
];
