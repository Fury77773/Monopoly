# Validation et critères d’acceptation
## Budgets initiaux à mesurer
Cibles, pas performances garanties : 30 FPS mobile, 60 FPS ordinateur milieu de gamme. Mobile => p95 frame time <= 33 ms pendant vue générale; ordinateur <= 17 ms selon profil. Mesurer après chargement et warmup, sur au moins 60 secondes, avec appareils/GPU/navigateurs/résolution identifiés. Mesurer aussi transitions, pics, température et perte de contexte.
Premier contenu jouable : cible <= 10 Mo transférés; pack détaillé progressif <= 50 Mo mobile. Première scène utilisable <= 8 s sur profil réseau explicitement défini. Ces seuils sont révisables après J1, sans déclarer un succès quand ils ne sont pas atteints.
Qualité mobile : résolution plafonnée, ombres limitées, LOD, flou désactivé par défaut, trafic réduit. Haute qualité : textures plus riches, reflets préparés et DOF cinéma. Afficher un réglage qualité; baisse adaptative avec hystérésis pour éviter les oscillations.

## Tests moteur
- Trois doubles => prison, aucune perception Départ accidentelle.
- Double ordinaire => relance après résolution; double sortie prison => cas propre.
- Refus achat => enchère; refusant peut gagner.
- Groupe incomplet bloque construire; hypothèque groupe bloque; construction uniforme.
- Stock 32/12 conservé en achats, hôtels et ventes; pénurie correctement traitée.
- Loyers gare/service et contextes spéciaux de cartes.
- Prison trois tentatives et paiement forcé selon édition.
- Carte retenue sortie absente du paquet et revient correctement.
- Mouvement de carte vers une autre carte avec continuation.
- Échange invalide ne transfère aucun actif; version périmée refusée.
- Transfert hypothèque et intérêts corrects.
- Dette autorise financement; faillite différente banque/joueur; dernier actif gagne.
- Aucun actif avec deux propriétaires, aucun compte négatif masqué, identités stables, conservation stock, paquet sans duplication.

## Tests réseau/persistance
Deux commandes même revision => une gagne, autre resynchronisée. Même commandId => aucun nouvel effet. Identité falsifiée rejetée. Déconnexion après achat => solde/propriété corrects. Redémarrage serveur => état/prison/enchère/cartes retrouvés. Crash commit avant diffusion => reprise correcte. Client jamais capable de fixer dés/argent. Session invitée ne reprend pas le pion d’autrui.

## Tests UI
Playwright : salon 2 navigateurs, lancer/acheter/payer, enchère, échange, construire, hypothéquer, dette, victoire et reconnexion. Toucher une propriété; petits écrans; panneau lisible; clavier; mode mouvement réduit; audio désactivé.

## Validation visuelle
Captures 3 angles fixes, même cadrage référence, texture façade visible, fenêtres variées, végétation naturelle, lumière douce, cases nettes, maisons possédées identifiables. Le commanditaire valide subjectivement le photoréalisme; un test automatique ne peut pas prouver ce critère. Browser screenshot seul ne démontre pas la performance sur téléphone réel.

## Done
Build/typecheck/lint passent; tests pertinents; aucune erreur console persistante; README et .env.example; assets traçables; données auditées ou limitation nommée; commandes de reproduction; captures et rapport; aucun mock annoncé comme multijoueur réel.
