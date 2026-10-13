# Prompt à copier dans Codex
Tu développes pour David St-Germain un jeu de Monopoly classique avec une ville miniature photoréaliste visible pendant toutes les vues du plateau. Lis les documents et les trois références de ce dossier avant de coder. Les captures city/neighborhood définissent le niveau visuel attendu; le poster définit l’intégration du plateau.

Construis d’abord les jalons J0 et J1. Utilise React/Vite/TypeScript, Babylon.js, pnpm workspace, moteur de règles indépendant, serveur Node.js/Fastify/WebSockets et PostgreSQL pour la suite. WebGL2 de base, WebGPU optionnel vérifié. Ne change pas de stack sans raison concrète consignée.

Crée une structure propre, README de démarrage, .env.example sans secrets et commandes reproductibles. Implémente une preuve visuelle avec un coin de plateau, trois propriétés, un pion, des dés, vue générale et gros plan, un achat et une maison qui apparaît. Marque les actions de démonstration et fixtures comme telles. Utilise des assets réalistes, matériaux PBR et éclairage préparé; ne présente pas des cubes colorés ou un fond PNG comme une ville photoréaliste terminée.

Si tu ne peux pas produire les assets Blender finaux avec les outils présents, livre une scène intégrable, un inventaire précis des assets manquants et les scripts/presets de préparation possibles. Ne prétends pas avoir atteint la référence. Ne télécharge pas d’assets à provenance inconnue et n’engage aucun achat.

Mesure poids de chargement et frame time; capture les angles de comparaison. Rapport : appareil/navigateur, qualité, captures, résultats de tests et limites. Actualise STATUS.md. Rends J1 vérifiable et attends la validation visuelle avant les jalons suivants. Une fois approuvé, suis ROADMAP, en commençant par le moteur complet et l’audit de l’édition.

Serveur autoritaire pour dés, argent, propriétés et phases. Commandes idempotentes, revision et transactions. La physique des dés est une présentation du résultat serveur. Ne mélange pas les éditions ni les règles maison. Profil classic-fr-pending jusqu’à vérification des données officielles. Avance sur les choix techniques réversibles sans confirmations répétées; signale uniquement les blocages réels. Ne publie rien et ne facture rien dans ce premier jalon.
