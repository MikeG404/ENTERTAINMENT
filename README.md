# Entertainment Web App — Frontend Mentor (Advanced)

[![Live – Vercel](https://img.shields.io/badge/live-Vercel-000)](https://entertainment-psi-roan.vercel.app/)
[![Stack](https://img.shields.io/badge/stack-React%2018%20%2B%20Vite%20%2B%20SCSS-blue)](#tech-stack)
[![Frontend Mentor](https://img.shields.io/badge/challenge-Frontend%20Mentor-6C63FF)](https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X)

Application front-end multi-pages de type “streaming catalog” réalisée à partir du challenge **Frontend Mentor – Entertainment web app**. L’objectif : gérer un catalogue (films / séries), la recherche, le bookmarking, le routing, et l’état global côté client — le tout avec des perfs et une accessibilité propres à un projet de portfolio.

> 🎯 Démo : **https://entertainment-psi-roan.vercel.app/**

![Preview](./preview.jpg)

---

## Fonctionnalités

- **Routing client** (structure multi-pages simulée) : *Home*, *Movies*, *TV Series*, *Bookmarks*.  
- **Recherche instantanée** sur les pages (débounce + matching par titre).  
- **Bookmarks** persistés côté client (p. ex. `localStorage`) avec ajout/retrait depuis les listes et cartes.  
- **Sections “Trending” & “Recommended”** sur l’accueil (jeu de données local JSON).  
- **Filtres / tags** par catégorie (Movies/TV).  
- **UI responsive** mobile → desktop, hover states, focus states, et clavier.
- **API** The Movie DB.
  
---

## Tech stack

- **React 18** + **Vite** (dev server ultra-rapide, HMR).  
- **SCSS** (architecture modulaire, variables/mixins).  
- **ESLint** (règles pour JS/React).  
- **Déploiement** : Vercel.  
