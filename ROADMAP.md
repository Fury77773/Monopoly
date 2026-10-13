# Plan de développement
## J0 — fondations
Créer workspace, TypeScript strict, Vite/React, serveur, protocol, rules, Postgres local et README d’exécution. Épingler les versions réellement installées et commit du lockfile. Vérifier API Babylon et export GLB. Livrer écran et connexion locale. Sortie : installation reproductible, lint/typecheck et démarrage documentés.

## J1 — preuve visuelle décisive
Un coin de plateau, assets finaux, lumière fixe, caméra générale/détail, dés et mouvement de pion, achat et construction démonstratifs explicitement marqués comme mode démo. Fournir captures comparables aux références, poids chargés, mesures FPS/frame time et appareils. Aucun multijoueur complet exigé ici. Sortie : accord visuel du commanditaire; si rejet, améliorer assets/lumière ou tester Unreal avant de poursuivre. Ne pas écrire « terminé » avec seulement des cubes.

## J2 — moteur complet sans rendu
Valider édition, données, machine d’état, banque, achats, enchères, prison, cartes, constructions, hypothèques, échanges, dettes/faillites. Test source déterministe, invariants et scénarios ci-joints. Interface de debug/table suffisante. Sortie : partie simulée terminable, audit données fini ou statut fidélité pending explicite.

## J3 — multijoueur et persistance
Rooms privées, accès, serveur autoritaire, transactions, reconnexion, commandes dupliquées, redémarrage, enchères réseau. 2–4 clients. Sortie : partie après reconnexion sans perte ni double paiement.

## J4 — plateau complet
Étendre 40 cases et quartiers; mapper propriétés et constructions; intégrer événements, UI, échanges, dette et journal. Préserver budget mesuré. Sortie : toutes actions jouables sur téléphone/ordinateur; snapshots reconstruisent la ville correctement.

## J5 — validation finale
Parcours familiaux, tests navigateur, performance sur appareils réels, déconnexions, audit données et provenance d’assets, sauvegardes. Publication uniquement dans le cadre autorisé. Sortie : rapport honnête, défauts restants et version démontrable.

## Backlog prioritaire
RULE-001 données et audit; RULE-002 tour/doubles; RULE-003 achat/enchère; RULE-004 loyers/cartes; RULE-005 prison; RULE-006 construction/stock; RULE-007 hypothèque/échange; RULE-008 dette/faillite; NET-001 commandes/identité; NET-002 transaction/reconnexion; ART-001 scène J1; ART-002 mapping/LOD; UX-001 mobile/guidage; QA-001 scénarios de partie.
Chaque ticket : dépendances, acceptance tests et résultat observable. Ne pas fixer une estimation de durée avant J1 et l’inventaire des assets.
