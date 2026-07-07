// Points d'eau (forage / puits / fontaine / bassins) par site.
// Coordonnées en pixels "plan" (même repère que SITE_SHAPES dans buildings-data.js),
// estimées à partir du PDF de référence fourni par l'utilisateur. Ce sont des positions
// de départ approximatives : affinez-les avec le bouton "💧 Points d'eau" sur la carte,
// puis "💾 Enregistrer" pour les figer dans le document Grist.
//
// Chaque "code" doit correspondre EXACTEMENT à une ligne de la table Grist Batiments
// (colonne Bâtiment) pour ce site — c'est ce qui permet de colorer/lister ces points
// d'eau exactement comme des bâtiments (voir grist-schema.md).
const WATER_FEATURES_DEFAULT = {
  'Route de Mende': [
    {id:'forage',    type:'circle', code:'Forage',      x:2037, y:203,  r:22},
    {id:'puits',     type:'circle', code:'Puits',       x:1037, y:2057, r:22},
    {id:'fontaine',  type:'circle', code:'Fontaine',    x:1239, y:1998, r:22},
    {id:'bassin-l',  type:'rect',   code:'Bassin L',    x:840,  y:1379, w:110, h:44,  rot:-27},
    // Accolé au flanc ouest de K/M, parallèle à leur axe (K→M ≈ 63°, donc rot ≈ 63-90).
    {id:'bassin-km', type:'rect',   code:'Bassin K/M',  x:1106, y:1835, w:45,  h:450, rot:-27},
  ],
};
