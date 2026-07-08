# Schéma Grist – Carte des Bâtiments — Réseau d'eau

> Ce dépôt est un **fork** de [`carte-batiments`](https://bigorneau15652.github.io/map/carte-batiments/),
> dédié à la cartographie du **réseau d'eau** (forage vs. réseau de ville) des bâtiments de l'UMPV.
> Toute la mécanique de base (sites, formes des bâtiments, catégories, calage sur satellite) est
> identique à l'original ; ce document ne détaille que ce qui est spécifique à cette variante — voir
> aussi la nouvelle section **"Points d'eau"** plus bas.

Ce widget reprend le principe de `carte-france`, mais colorie les **bâtiments** de vos 5 sites
au lieu des départements. Les formes de chaque bâtiment ont été tracées à partir du plan
"Plan classement énergétique des bâtiments" et sont embarquées dans `buildings-data.js`
(aucune requête réseau nécessaire pour la géométrie).

## Table 1 : `Batiments`

| Colonne | Type Grist | Description |
|---------|-----------|-------------|
| `Site` | Text | Nom du site (voir liste exacte ci-dessous) |
| `Bâtiment` | Text | Nom du bâtiment (voir liste exacte ci-dessous) |
| `note` (ou le nom que vous voulez) | Text | **Optionnel.** Nom de la catégorie active pour ce bâtiment (doit correspondre exactement au `nom` d'une ligne de la table `Categories`, ex : `Très bon`). Laisser vide = bâtiment non coloré. |
| `visible` (ou le nom que vous voulez) | Bool | **Optionnel.** `true`/coché = couleur normale · `false`/décoché = bâtiment grisé. Laisser ce menu vide dans ⚙️ → tous les bâtiments sont toujours visibles. |
| `nom_court` (ou le nom que vous voulez) | Text | **Optionnel.** Nom abrégé (ex : `Bât. A`) affiché dans la liste "Bâtiments" quand le panneau de droite est replié (voir "Panneau repliable" ci-dessous). Laissé vide dans ⚙️ → le widget raccourcit automatiquement le nom complet aux 5 premiers caractères si celui-ci dépasse 5 caractères. |
| `sanitaires` (ou le nom que vous voulez) | Numeric | **Optionnel.** Nombre de sanitaires du bâtiment, affiché dans l'étiquette au survol après le type d'alimentation (ex : `Réseau d'eau - 4 sanitaires`). Laissé vide, à 0, ou colonne non configurée → rien n'est affiché après le type d'alimentation. |

> Comme pour la table Catégories, les noms `note`/`visible` sont juste indicatifs : dans ⚙️, vous
> choisissez la colonne exacte de **votre** table (ex : `Categories_energie`, `Active`…).

> **Important** : les valeurs de `Site` et `Bâtiment` doivent correspondre **exactement** aux
> intitulés ci-dessous (accents compris) pour que le widget retrouve la bonne forme sur le plan.
> C'est directement la liste de votre fichier `Site et bâtiment.xlsx` — vous pouvez l'importer telle quelle.

> **Colonnes de type Référence** : si `Site` et/ou `Bâtiment` sont des colonnes **Référence**
> (par exemple `Site` qui pointe vers une table `Sites` séparée, comme c'est utile si un même nom
> de bâtiment existe sur 2 sites), le widget suit maintenant automatiquement la référence pour
> retrouver le texte affiché (via la "colonne d'affichage" configurée sur cette référence dans
> Grist). Vous n'avez rien à faire de spécial — choisissez simplement cette colonne Référence
> normalement dans ⚙️. Si un bandeau d'avertissement apparaît quand même, c'est que la référence
> n'a pas de "colonne d'affichage" définie côté Grist (clic droit sur la colonne → *Modifier la
> colonne* → *Afficher la colonne* pour la table référencée).

> La colonne `note` doit être de type **Texte** (pas Référence) pour que le widget puisse y écrire
> directement le nom de la catégorie quand vous cliquez une pastille de couleur.

<details>
<summary>Liste complète des 56 lignes (cliquer pour déplier)</summary>

| Site | Bâtiment |
|------|----------|
| Route de Mende | Amphis 1 2 3 |
| Route de Mende | Amphis 5 6 7 |
| Route de Mende | Bâtiment A |
| Route de Mende | Bâtiment ATRIUM |
| Route de Mende | Bâtiment B |
| Route de Mende | Bâtiment C |
| Route de Mende | Bâtiment D |
| Route de Mende | Bâtiment E |
| Route de Mende | Bâtiment F |
| Route de Mende | Bâtiment G |
| Route de Mende | Bâtiment H |
| Route de Mende | Bâtiment I |
| Route de Mende | Bâtiment J |
| Route de Mende | Bâtiment K |
| Route de Mende | Bâtiment L |
| Route de Mende | Bâtiment M |
| Route de Mende | Bâtiment N |
| Route de Mende | Maison des Personnels |
| Route de Mende | Bâtiment O |
| Route de Mende | Bâtiment P |
| Route de Mende | Préfa 1-2-3 |
| Route de Mende | P4 |
| Route de Mende | P5 |
| Route de Mende | P6 |
| Route de Mende | P7 |
| Route de Mende | P8 |
| Route de Mende | P9 |
| Route de Mende | P10 |
| Route de Mende | P11 |
| Route de Mende | P12 |
| Route de Mende | P13 |
| Route de Mende | P14 |
| Route de Mende | Bâtiment Q |
| Route de Mende | Kiosque |
| Route de Mende | Bâtiment R |
| Route de Mende | Bâtiment S |
| Route de Mende | Bâtiment T |
| Route de Mende | Bâtiment U |
| Route de Mende | Bâtiment V |
| Route de Mende | Bâtiment W |
| Route de Mende | Bâtiment Z |
| Béziers | Du Guesclin |
| Béziers | Préfa |
| Béziers | Projet d'extension |
| Boutonnet | Bâtiment A |
| Boutonnet | Bâtiment H |
| Boutonnet | Bâtiment I |
| Boutonnet | Bâtiment J |
| Saint-Charles | Saint-Charles 1 |
| Saint-Charles | Saint-Charles 2 |
| Saint-Louis | Saint-Louis |
| Route de Mende | Forage |
| Route de Mende | Puit |
| Route de Mende | Fontaine |
| Route de Mende | Bassin KM |
| Route de Mende | Bassin L |

</details>

> Les 5 dernières lignes ci-dessus (`Forage`, `Puit`, `Fontaine`, `Bassin KM`, `Bassin L`) sont
> les **points d'eau** de cette variante (voir section "Points d'eau" plus bas) — ajoutez-les à
> votre table `Batiments` exactement comme n'importe quel autre bâtiment (même `Site`, mêmes
> colonnes `note`/`visible`) pour pouvoir les colorer et les gérer depuis la liste "Bâtiments".

### ⚠️ Points à vérifier avec vous

- **`P12`** est maintenant tracé (petit bâtiment bleu entre `Kiosque` et `G`), d'après votre
  dernier plan.
- **`Préfa 1-2-3`** est une **seule ligne / un seul bâtiment** dans Grist : les 3 rectangles
  visibles sur le plan changent tous de couleur ensemble quand vous colorez cette ligne (ce n'est
  pas 3 bâtiments distincts, conformément à votre remarque).
- **`Projet d'extension`** (Béziers) est tracé mais **volontairement sans catégorie par défaut**
  (le bâtiment n'existe pas encore) — vous choisirez sa couleur/catégorie vous-même le moment venu.
- **Zones non maîtrisées / hangars** (partie hachurée à Saint-Charles, 2 hangars à Boutonnet) ne
  sont **pas des lignes Grist** — ce sont des zones fixes, verrouillées, non cliquables, affichées
  automatiquement par le widget (voir plus bas). Vous n'avez rien à ajouter dans Grist pour elles.
- **Saint-Charles** retracé à partir de votre nouveau plan (zone verrouillée plus petite, forme
  affinée). Aucun changement de votre côté dans Grist.
- **Correction Saint-Charles (dessin corrompu)** : `Saint-Charles 2` était stocké comme un seul
  contour auto-croisant (créant un X visible avec `Saint-Charles 1`) — séparé en 2 parties
  indépendantes, comme `Préfa 1-2-3`. La zone verrouillée hachurée était elle aussi un polygone
  auto-sécant (traits rouges qui débordaient sur toute la carte) — remplacée par un contour simple
  correspondant à la petite encoche voulue, accolée au coin sud de `Saint-Charles 1`. Aucun
  changement de votre côté dans Grist.
- **Correction interne** : plusieurs bâtiments avec une cour intérieure/fenêtre (`L`, `S`, `K`,
  `H`, `Bâtiment ATRIUM`) s'affichaient à tort comme des blocs pleins — leurs découpes internes
  s'affichent maintenant correctement. Aucun changement de votre côté dans Grist.
- **`Projet d'extension`** (Béziers) retracé selon votre dernier plan — c'est maintenant un
  rectangle détaché de `Du Guesclin` (au lieu de la forme en croix précédente).
- **Configuration simplifiée** : le widget accepte maintenant directement une table Bâtiments
  avec une colonne "note/catégorie" (une seule catégorie par bâtiment), sans avoir besoin de la
  table `Batiment_categories`. Voir "Configuration du widget" ci-dessous pour le détail des
  menus déroulants.
- **Boutonnet (A / H / I / J)** : confirmé sur votre dernier plan (labels visibles) — `A` est le
  grand bâtiment en M, `H`/`I`/`J` les 3 petits blocs séparés. Les 2 hangars adjacents sont
  verrouillés (voir point ci-dessus).
- Les bâtiments `A`, `H`, `I`, `J` existent à la fois sur **Route de Mende** et **Boutonnet** :
  le widget les distingue bien via la colonne `Site` (clé `Site|Bâtiment`).

---

## Table 2 : `Categories`

| Colonne | Type Grist | Description |
|---------|-----------|-------------|
| `nom` | Text | Nom de la catégorie (ex : `Très bon`) |
| `couleur` | Text | Couleur : nom FR (`rouge`, `bleu`…) ou HEX (`#e74c3c`) |
| `active` | Bool | **Optionnel.** `true` = catégorie affichée sur la carte. Si votre table n'a pas cette colonne (ou si vous ne la configurez pas dans ⚙️), **toutes les catégories sont considérées actives** par défaut. |

> Les noms de colonnes ci-dessus (`nom`, `couleur`, `active`) sont juste les noms **par défaut**.
> Dans ⚙️, vous pouvez faire correspondre ces 3 rôles à **n'importe quel nom de colonne** de votre
> table Catégories (ex : `Catégorie`, `Couleur`, `Niveau`…) via les menus "Colonne 'nom'/'couleur'/'active'
> dans la table Catégories".

**Exemple recommandé pour ce fork (réseau d'eau) :**
```
Forage        | marron | true
Réseau d'eau  | bleu   | true
Puit          | cyan   | true
```
Utilisez la **variante à 3 tables** ci-dessous (`Batiment_categories`) plutôt que la colonne
`note` : elle seule permet à un bâtiment de cumuler **plusieurs** catégories à la fois (ex :
`Forage` + `Puit` pour un bassin alimenté par les deux, ou `Forage` + `Réseau d'eau` pour des
sanitaires raccordés aux deux réseaux). Un bâtiment coché dans 2 catégories ou plus prend
automatiquement la **couleur "Cumul"** (nom et couleur réglables dans 🏷 Catégories → par défaut
"Cumul"/orange, choisissez un nom et une couleur bien distincts des autres catégories).

**Couleurs nommées disponibles :** bleu, rouge, vert, jaune, orange, violet, rose, marron, gris, noir, blanc, cyan, turquoise, emeraude, brique

---

## Table 3 (optionnelle) : `Batiment_categories`

**N'existe que si vous voulez qu'un même bâtiment puisse cumuler plusieurs catégories à la fois.**
Si vous utilisez la colonne `note` de la table `Batiments` (une seule catégorie par bâtiment,
cas le plus courant), vous n'avez **pas besoin** de cette table — ignorez cette section.

| Colonne | Type Grist | Description |
|---------|-----------|-------------|
| `batiment` | Ref → Batiments | Référence vers la ligne Batiments |
| `categorie` | Ref → Categories | Référence vers la ligne Categories |

Cette table peut être laissée **vide** : le widget la remplit automatiquement quand vous
cliquez sur les pastilles de couleur dans le panneau "Bâtiments" (uniquement si "Colonne
Catégorie / Note" n'est pas configurée).

---

## Configuration du widget dans Grist — pas à pas

1. Dans la vue, ajouter un **Custom Widget**.
2. URL : `https://bigorneau15652.github.io/carte-batiments-eau/`.
3. Accès requis : **Accès complet au document** (sinon le widget ne peut ni lire ni écrire vos tables).
4. Ouvrir ⚙️ dans le widget. Voici **exactement** ce que chaque menu déroulant attend. Exemple
   avec une table `INFOENERGIE` (Site, Bâtiment, une colonne catégorie, une colonne active) et
   une table `Table_Categories_Infoenergie` (nom, couleur, éventuellement un niveau) :

| Menu déroulant | Que choisir |
|---|---|
| **Table des Bâtiments** | votre table qui liste les bâtiments (ex : `INFOENERGIE`) |
| **Colonne "Site" dans la table Bâtiments** | la colonne qui contient le nom du site (`Route de Mende`, `Béziers`…) |
| **Colonne "Bâtiment" dans la table Bâtiments** | la colonne qui contient le nom du bâtiment (`Bâtiment A`, `Amphis 1 2 3`…) |
| **Colonne "Catégorie / Note" (optionnel)** | la colonne qui contient **la catégorie actuelle de chaque bâtiment**. Sa valeur doit être le nom exact d'une ligne de votre table Catégories (ex : `Très bon`) |
| **Colonne "Visible / Active" (optionnel)** | la colonne booléenne qui grise un bâtiment (laisser vide si vous n'en avez pas → tout reste visible) |
| **Table des Catégories** | votre table catégorie ↔ couleur (ex : `Table_Categories_Infoenergie`) |
| **Colonne "nom" dans la table Catégories** | la colonne avec le nom de chaque catégorie (ex : `Catégorie`, `Niveau`…) |
| **Colonne "couleur" dans la table Catégories** | la colonne avec la couleur (ex : `Couleur`) |
| **Colonne "active" dans Catégories (optionnel)** | laissez vide si votre table n'a pas de colonne "active"/"sélection" — dans ce cas **toutes les catégories sont affichées par défaut** |
| **Table des Affiliations** | **laissez sur "— choisir —" / vide** si vous utilisez la colonne "Catégorie / Note" ci-dessus (cas le plus courant) |
| **Colonne "bâtiment" / "catégorie" dans Affiliations** | n'apparaissent que si vous avez rempli "Table des Affiliations" — ignorez-les sinon |

5. Cliquez **💾 Enregistrer**.

Après l'enregistrement, chaque bâtiment doit se colorer selon la valeur de votre colonne
"Catégorie / Note". Cliquer une pastille de couleur dans le panneau "Bâtiments" **écrit
directement** le nom de la catégorie dans cette colonne (et un second clic sur la même pastille
l'efface).

> **Le calage (position/échelle/rotation du plan sur le satellite) et le fond de carte ne sont
> jamais perdus** en changeant/ré-enregistrant cette configuration : chaque sauvegarde ne modifie
> que les réglages qu'elle concerne, le reste est conservé.

> ⚠️ Si après avoir enregistré, la liste "Bâtiments" reste vide (`0/0`) ou qu'un message
> d'avertissement orange apparaît en haut du widget, vérifiez que vos colonnes "Site" et
> "Bâtiment" sont bien de type **Texte** dans Grist (pas *Référence*). Une colonne Référence
> renvoie un identifiant numérique et non le texte affiché, ce que le widget ne sait pas
> interpréter pour retrouver la forme du bâtiment sur le plan.

## Panneau repliable

Un petit triangle ▸ / ◂ entre la carte et le panneau de droite permet de replier ce dernier pour
laisser plus de place à la carte. En version repliée, chaque catégorie garde sa case à cocher et
sa couleur, et la liste des bâtiments garde sa case "Visible/grisé" — seuls les noms sont raccourcis
(colonne "Nom court" si configurée, sinon les 5 premiers caractères du nom complet). Le nom complet
reste visible au survol de la souris. L'état replié/déplié est mémorisé par navigateur.

## Fonds de carte

Un sélecteur 🗺️ en bas à gauche de la carte permet de changer de fond à la volée (aucune clé API
requise) :

| Fond | Usage recommandé |
|------|-------------------|
| **OpenStreetMap Standard** *(par défaut)* | le plus précis pour positionner les bâtiments (rues, emprises au sol) |
| **Esri Satellite** | vue aérienne réelle — pratique pour voir la végétation / le bâti existant |
| Esri Street Map, Esri World Topo, CartoDB Positron, CartoDB Voyager | variantes plus sobres selon le rendu souhaité |

Le curseur de transparence à droite du sélecteur s'applique au fond actif. Le choix de fond est
mémorisé (options du widget) pour tous les utilisateurs du document.

## Zones verrouillées (non sélectionnables)

Ces zones sont affichées avec une **trame hachurée grise et un contour gris uni**, en
permanence, quel que soit le mode d'affichage. Elles n'ont pas de ligne dans la table `Batiments`
et ne réagissent pas au clic — elles servent uniquement de repère visuel :

- **Saint-Charles** : partie du bâtiment que vous ne possédez pas.
- **Boutonnet** : les 2 hangars (non modifiables).

Si d'autres sites ont des zones similaires, indiquez-les-moi et je les ajoute de la même façon
(fichier `buildings-data.js`, variable `LOCKED_ZONES`).

## Calage du plan sur le satellite

Le dessin de chaque site est positionné par défaut sur le centre GPS réel du site (à partir des
liens Google Maps fournis), avec une échelle approximative. **Ce calage de départ est une
estimation** — un plan PowerPoint n'est pas géoréférencé nativement.

Pour l'affiner :
1. Cliquez **📐 Caler le plan** dans la barre du haut (pour le site actuellement affiché).
2. **Glissez** le dessin directement sur la carte pour le positionner sur les vrais bâtiments.
3. Ajustez les curseurs **Échelle** et **Rotation** jusqu'à ce que chaque forme corresponde
   au bâtiment réel visible sur l'image satellite.
4. Cliquez **💾 Enregistrer** — le calage est mémorisé (via les options du widget) pour tous
   les utilisateurs du document, pas seulement votre session.

Répétez l'opération pour chacun des 5 sites (le calage est indépendant par site).

## Points d'eau (forage, puits, fontaine, bassins)

Cette variante ajoute 5 éléments pour repérer les installations liées au réseau de forage :

- 3 points (cercles) : **Forage**, **Puit**, **Fontaine**.
- 2 rectangles : les **bassins** devant les bâtiments **K/M** et **L**.

**Ce sont des bâtiments comme les autres** : ils se colorent, se listent et se survolent (même
étiquette au survol, même pastilles de catégorie) exactement comme `Bâtiment A`, `Bâtiment K`,
etc. — la seule différence est que leur *forme* (cercle/rectangle) est définie dans le widget
plutôt que tracée depuis le plan d'origine. Pour qu'un point d'eau soit coloré et apparaisse dans
la liste "Bâtiments", il **doit avoir une ligne dans votre table Grist `Batiments`** avec le
`Site` et le `Bâtiment` correspondants exactement (voir les 5 noms dans la liste complète
ci-dessus). Sans cette ligne, le point reste visible sur la carte mais non coloré/non listé
(comme un bâtiment sans ligne Grist).

Leur **géométrie** (position, taille, rotation) est pré-remplie sur le site **Route de Mende** à
partir du plan de référence fourni, mais ce sont des **positions approximatives de départ** —
affinez-les avec le bouton **💧 Points d'eau** en haut de la carte :

1. Cliquez **💧 Points d'eau** → chaque point/rectangle devient déplaçable.
2. **Glissez** un élément sur la carte pour le repositionner précisément.
3. Ajustez sa **taille** (cercle) ou sa **largeur/hauteur/rotation** (rectangle) avec les boutons
   −/+ du panneau. Supprimez-le avec 🗑 si besoin.
4. Ajoutez de nouveaux points/rectangles depuis le bas du panneau si besoin (autres forages,
   citernes, etc.) — pensez à ajouter la ligne correspondante dans la table `Batiments` avec le
   même nom exact pour pouvoir le colorer.
5. Cliquez **💾 Enregistrer** : comme le calage du plan, les positions sont mémorisées dans les
   options du widget et partagées avec tous les utilisateurs du document — aucune donnée n'est
   perdue en rechargeant la page ou en changeant de configuration Grist.

> Le champ texte de chaque point dans le panneau **💧 Points d'eau** modifie son nom (et donc la
> ligne Grist à laquelle il correspond) — ne le renommez que si vous renommez aussi la ligne
> `Batiments` associée, sous peine de perdre la coloration.
