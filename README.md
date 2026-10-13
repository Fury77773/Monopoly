# Monopoly — environnement de départ

## Démarrage local / Codex
Node 22+, Corepack et pnpm. Exécuter `bash scripts/setup.sh`, puis `pnpm dev`.
Web : port 5173. Serveur bootstrap : port 3001, route /health.
Base locale optionnelle : `docker compose up -d db`.
Vérifications : `pnpm build`, `pnpm typecheck`, `pnpm test`.

Lire CODEX_START.md et PROMPT_CODEX.md. Les versions du bootstrap sont épinglées pour installation; Codex doit les vérifier et les actualiser selon compatibilité, puis conserver le lockfile. La structure seule ne représente pas un jeu développé.

# Monopoly photoréaliste — dossier de préparation pour Codex
Date : 12 octobre 2026. Commanditaire : David St-Germain. Version : 1.0.

## Objectif
Développer un jeu de transactions immobilières fidèle à l’édition classique de Monopoly choisie, en français, jouable dans un navigateur sur ordinateur et téléphone. Lors des séquences de plateau, afficher une ville miniature photoréaliste comparable aux références jointes. Ce dossier est une spécification, pas un jeu déjà développé ni une garantie de performance.

## Démarrage
1. Extraire cette archive dans un nouveau dépôt.
2. Ouvrir le dossier dans Codex et lui donner PROMPT_CODEX.md.
3. Faire livrer le jalon J0 puis J1 de ROADMAP.md avant le multijoueur complet.
4. Examiner les captures de la ville et les mesures sur les appareils réels.
5. Continuer les jalons suivants seulement après la validation visuelle de J1.

## Décisions retenues
- React + Vite + TypeScript pour l’interface; Babylon.js complet pour la scène.
- WebGL2 comme compatibilité de base; WebGPU activé après détection et test, jamais requis pour jouer.
- Blender pour les assets, matériaux et éclairages préparés; GLB et KTX2 à la distribution.
- Serveur Node.js TypeScript avec Fastify et WebSockets; PostgreSQL; assets séparés sur stockage/CDN.
- pnpm workspace : moteur de règles séparé du rendu et du réseau.
- Serveur autoritaire; aucun modèle IA ne décide des règles ou de l’argent.
- Première livraison : 2–4 humains; architecture extensible sans promettre tous les modes.
- Prototype privé; édition, noms de rues et données officielles exactes à confirmer avant d’annoncer une fidélité intégrale.
- Pas de serveur GPU dans la solution initiale. Unreal + Pixel Streaming reste une solution alternative si les essais visuels échouent.

## Lecture
PROJECT.md : produit et périmètre.
ARCHITECTURE.md : composants, contrats et persistance.
RULES.md : spécification fonctionnelle et points à vérifier.
ART_DIRECTION.md : référence visuelle et pipeline 3D.
UX.md : écrans et parcours.
ROADMAP.md : livraisons et ordre de développement.
VALIDATION.md : tests, critères et budgets.
AGENTS.md : instructions de travail pour Codex.
STATUS.md : état initial et dépendances.
PROMPT_CODEX.md : instruction prête à copier.
SOURCES.md : documentation à consulter.

## Prérequis à confirmer
« Portable » couvre ici ordinateur portable et téléphone. Il faut mesurer la scène sur au moins un ordinateur Windows, un Android et un iPhone réels avant de déclarer ces appareils pris en charge. Les visuels fournis sont une cible artistique; ils ne sont pas des modèles 3D exploitables automatiquement.
