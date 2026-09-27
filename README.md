# Portfolio — Nathan Drancourt

Dépôt du portfolio personnel de Nathan Drancourt, administrateur systèmes & réseaux.

**Site en ligne : [imnvthan.github.io](https://imnvthan.github.io)**

## Contenu du site

- Profil et parcours (formations, expériences)
- Compétences techniques
- Équipements & technologies manipulés (réseau, virtualisation, systèmes, cloud, ITSM)
- Projets et réalisations
- Homelab personnel (Proxmox, LXC, services auto-hébergés)
- Diplômes, certifications et formations
- Contact
- Mentions légales

## Stack technique

Le site est une page statique, sans framework ni build :

- HTML5 / CSS3, sans dépendance CSS externe
- JavaScript vanilla : le contenu (`assets/js/data.js`) est séparé du rendu (`assets/js/main.js`), qui construit le DOM et gère la navigation
- [GSAP](https://gsap.com/) + ScrollTrigger pour les animations au scroll
- [Three.js](https://threejs.org/) pour la scène 3D en fond de page
- Polices via Google Fonts (Bricolage Grotesque, Inter)
- Hébergé sur GitHub Pages

## Structure du dépôt

```
index.html
mentions-legales.html
assets/
  css/style.css       styles
  js/data.js          contenu du site (texte, projets, compétences...)
  js/main.js          rendu du contenu + interactions
  js/scene.js         scène Three.js du fond de page
  equipment/          logos des technologies citées
  certs/              logos des certifications
  vendor/             bibliothèques tierces (GSAP, ScrollTrigger, Three.js)
```

## Lancer le projet en local

Le site n'a besoin d'aucune dépendance ni build. Cloner le dépôt puis ouvrir `index.html` dans un navigateur, ou servir le dossier avec un serveur statique :

```bash
git clone https://github.com/ImNvthan/ImNvthan.github.io.git
cd ImNvthan.github.io
npx serve .
```

## Modifier le contenu

Le texte du site (profil, expériences, compétences, projets, équipements, homelab, certifications) est centralisé dans `assets/js/data.js`. Modifier ce fichier suffit à mettre à jour le contenu affiché, sans toucher au HTML.
