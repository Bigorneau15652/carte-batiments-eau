// Points d'eau (forage / puits / fontaine / bassins) par site.
// Coordonnées en pixels "plan" (même repère que SITE_SHAPES dans buildings-data.js),
// estimées à partir du PDF de référence fourni par l'utilisateur. Ce sont des positions
// de départ approximatives : affinez-les avec le bouton "💧 Points d'eau" sur la carte,
// puis "💾 Enregistrer" pour les figer dans le document Grist.
const WATER_FEATURES_DEFAULT = {
  'Route de Mende': [
    {id:'forage',    type:'circle', label:'Forage',             x:2037, y:203,  r:22},
    {id:'puits',     type:'circle', label:'Puits',              x:1037, y:2057, r:22},
    {id:'fontaine',  type:'circle', label:'Fontaine',           x:1239, y:1998, r:22},
    {id:'bassin-l',  type:'rect',   label:'Bassin (bât. L)',    x:840,  y:1379, w:110, h:44,  rot:-27},
    {id:'bassin-km', type:'rect',   label:'Bassin (bât. K/M)',  x:1050, y:1847, w:50,  h:480, rot:66},
  ],
};
