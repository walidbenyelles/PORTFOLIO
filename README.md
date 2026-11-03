# Portfolio — Mohammed Walid Ben-Yelles

Portfolio personnel inspiré de la **capture fournie** du site de Zava Anjaranantenaina.

## Fonctionnalités

- Design clair avec dégradé violet → bleu → cyan, typographie large et barre de navigation fixe.
- Page d'accueil avec texte animé, boutons de navigation et disponibilité pour un stage.
- Sections : À propos, Compétences, Projets, Parcours, Contact.
- **FR / EN** avec conservation du choix.
- **Mode clair / sombre** avec conservation du choix.
- Animations d'apparition, design responsive (ordinateur, tablette, mobile).
- Formulaire de contact (ouvre le logiciel mail quand une adresse est configurée ; copie le message sinon).

## Démarrage dans VS Code (Windows)

1. Décompresse l'archive.
2. Ouvre le dossier `portfolio-walid` dans VS Code (**Fichier → Ouvrir un dossier**).
3. Ouvre le terminal de VS Code (**Terminal → Nouveau terminal**).
4. Exécute :

```powershell
npm install
npm run dev
```

5. Clique l'adresse locale affichée dans le terminal, généralement `http://localhost:5173/`.

**Prérequis :** Node.js installé (version récente, idéalement 20.19+ ou 22+).

## Personnalisation

Dans `src/config.js`, ajoute :

```js
export const profile = {
  firstName: 'Mohammed Walid',
  lastName: 'Ben-Yelles',
  github: 'https://github.com/walidbenyelles',
  linkedin: 'https://www.linkedin.com/in/TON-PROFIL/',
  email: 'TON-EMAIL@example.com',
  cvPath: '/CV.pdf',
  aiNidsDemo: 'https://ai-nids-walid.streamlit.app/',
};
```

Les textes en français et en anglais se trouvent dans `src/App.jsx`, dans l'objet `content`.

### CV

Ajoute ton fichier **CV.pdf** dans `public/` pour le rendre disponible sur `https://ton-site/CV.pdf` (aucun CV n'a été inclus ni inventé).

### Contact

Le formulaire prépare un email (`mailto:`). Il **n'envoie pas** de message depuis un serveur. Si `profile.email` est vide, il copie le message dans le presse-papiers lorsque le navigateur l'autorise et affiche un message de configuration. Aucun backend ni service externe n'est utilisé.

### Projets

La démonstration de **AI-NIDS** pointe vers Streamlit ; les autres projets renvoient vers ton profil GitHub faute de liens précis à leurs dépôts. Personnalise chaque lien dans `src/App.jsx` si nécessaire.

## Build de production

```powershell
npm run build
npm run preview
```

## Publication sur Vercel

1. Push le dossier sur GitHub.
2. Importe le dépôt sur Vercel.
3. Framework : **Vite** ; commande de build : `npm run build` ; dossier de sortie : `dist`.
4. Publie.

## Organisation

- `index.html` : balises et métadonnées.
- `src/App.jsx` : composants React, traductions et contenu.
- `src/styles.css` : styles, animations, adaptation mobile et thème.
- `src/config.js` : informations et liens personnels.
- `public/` : images et CV éventuels.

**Remarque :** ce projet est une recréation originale basée sur la capture de l'accueil et non une copie du code source du site de référence. Les parties non visibles dans la capture ont été conçues pour être cohérentes avec son style.

## Aperçu immédiat sans installation

Pour voir rapidement le rendu graphique sans installer Node.js, ouvre **`apercu.html`** dans un navigateur. Ce fichier est un aperçu autonome du portfolio (sans framework) ; pour travailler sur le vrai projet React, utilise `npm install` puis `npm run dev`. L'aperçu offre le mode sombre et un aperçu FR/EN de l'accueil ; la version React possède toutes les traductions des sections.
