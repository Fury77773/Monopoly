# Produit et exigences
## Vision
Une maquette architecturale vivante, avec un parcours de 40 cases identifiable et une interface qui guide une partie familiale. La ville est visible à chaque vue de plateau. Les écrans d’échange ou de détail ne font pas perdre l’état de la partie.

## Périmètre de la V1
Salles privées, pseudo, choix de pion, 2–4 joueurs, banque automatique, achats, enchères, loyers, cartes, prison, constructions, hypothèques, échanges, faillite, sauvegarde, reprise et reconnexion. Français, souris et tactile. Pas de compte obligatoire pour une session familiale; jeton d’accès et de reprise privé.

## Hors V1
Adversaires IA, voix conversationnelle, chat public, classement, argent réel, boutiques, avatar personnalisé, ville ouverte, météo dynamique, plusieurs villes et règles modernes. Ne pas ajouter ces fonctions avant la fidélité classique et la stabilité.

## Fidélité
L’édition est un package de données versionné, indépendant du code. Nom de travail : classic-fr-pending. Les noms, valeurs, loyers et effets exacts sont audités à partir d’une édition unique. Aucun mélange de règles vintage et modernes. Options maison explicitement désactivées par défaut. La capacité de quatre joueurs est une limite du MVP et non une affirmation sur les limites du jeu physique.

## Priorités
P0 : état financier correct, partie terminable, ville convaincante, reconnecter sans perte.
P1 : onboarding, erreurs claires, animations fluides, performance adaptative.
P2 : sons, caméra cinéma, embellissements.

## Résultat attendu
Livraison du code, commandes de démarrage, migrations, tests significatifs, assets avec provenance, captures et limites connues. Aucune dépendance à un service IA pour jouer. La production d’assets réalistes constitue une tâche réelle, distincte de la génération du code.
