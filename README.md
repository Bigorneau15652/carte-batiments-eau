# carte-batiments-eau

Fork de [`carte-batiments`](https://bigorneau15652.github.io/map/carte-batiments/) (widget Grist
personnalisé, sans build) dédié à la cartographie du **réseau d'eau** de l'UMPV : quels bâtiments
sont raccordés au **forage**, au **réseau de ville**, ou aux **deux** — plus le repérage des
installations liées au forage (forage, puits, fontaine, bassins).

- **Widget en ligne** : https://bigorneau15652.github.io/carte-batiments-eau/
- **Démo autonome** (sans Grist) : https://bigorneau15652.github.io/carte-batiments-eau/demo.html
- **Documentation complète** : voir [`grist-schema.md`](./grist-schema.md)

Nouveautés par rapport à l'original : une couche **Points d'eau** (forage / puits / fontaine /
bassins), éditable directement sur la carte (glisser-déposer), et une configuration de catégories
recommandée à 2 couleurs (Forage / Ville) avec une 3ᵉ couleur automatique pour les bâtiments
raccordés aux deux réseaux.
