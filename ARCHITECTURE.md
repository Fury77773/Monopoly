# Architecture technique
## Organisation cible
```text
apps/web/src/{app,ui,scene,network,audio}
apps/server/src/{http,rooms,commands,persistence,auth}
packages/rules/src/{state,commands,events,reducer,invariants}
packages/protocol/src/{schemas,messages}
packages/edition-data/{schemas,classic-fr-pending,fixtures}
packages/config
assets/source/blender
assets/runtime/{models,textures,audio}
assets/manifests
scripts/{assets,validation}
docs
```
Les dossiers sont une proposition à créer. Aucun fichier logiciel n’est déjà implémenté dans ce dossier de préparation.

## Dépendances
rules ne dépend ni de Babylon.js, ni de React, ni de Postgres. protocol définit les messages validés à la frontière. edition-data fournit les tables et actions de cartes. web convertit l’état public en présentation. server identifie les acteurs, valide, applique, sauvegarde puis diffuse. Une seule version d’édition est verrouillée par partie.

## Modèle de données
GameState : gameId, schemaVersion, editionId/version/hash, revision, phase, currentPlayerId, turnCounter, players, board, bankInventory, decks, pendingAction, debt, auction, trades, winner.
Player : id, pseudo, tokenId, balance entier, position 0..39, prisonStatus, prisonAttempts, heldCards, bankrupt. Garder le nombre de doubles consécutifs dans le tour.
Property : propertyId, ownerId nullable, mortgage booléen, buildingCount 0..5 (5 = hôtel).
Deck : ordre secret côté serveur, index, cartes retenues hors paquet. La vue publique n’inclut jamais l’ordre ou le générateur aléatoire.
PendingAction : union discriminée pour achat, carte, règlement de dette, choix de prison ou paiement. La résolution d’une carte garde sa continuation et son contexte de loyer.

## Commandes
Envelope : protocolVersion, gameId, commandId unique, expectedRevision, type, payload. L’actorId vient de la session authentifiée, jamais de la confiance accordée au payload.
Types : StartGame, RollDice, BuyProperty, DeclinePurchase, Bid, PassAuction, PayPrisonFine, UsePrisonCard, Build, SellBuilding, Mortgage, Unmortgage, ProposeTrade, AcceptTrade, RejectTrade, DeclareBankruptcy, EndTurn.
Le serveur refuse les commandes hors phase, les prix invalides, les montants non entiers et les actions d’un autre joueur. Retour : accepted/rejected avec code stable, nouvelle revision et état public adapté au destinataire.

## Flux autoritaire
1. Authentifier et valider le schéma.
2. Dédupliquer commandId pour ce joueur et cette partie.
3. Vérifier expectedRevision; état périmé => renvoyer état actuel.
4. Charger/verrouiller la partie et vérifier règles/phase.
5. Le serveur fournit les résultats aléatoires, jamais le client.
6. Le moteur pur produit état et événements; tester les invariants.
7. Transaction SQL : état, événements, réception de commande et revision.
8. Commit puis diffusion. Les animations représentent ces événements; leur durée ne bloque pas l’autorité.
Un crash après commit mais avant diffusion est rattrapé par une resynchronisation. Pas d’optimisme sur l’argent ou la propriété.

## Aléatoire
crypto.randomInt côté serveur pour les dés; Fisher–Yates avec source sécurisée pour les paquets. Injecter une source déterministe dans les tests. Journaliser les résultats produits, sans exposer les prochains tirages. Le résultat des dés 3D s’aligne sur le résultat serveur; une simulation physique ne sélectionne pas le résultat officiel.

## Réseau et concurrence
WSS, heartbeat, reconnexion avec délai croissant et jeton de reprise. Le client transmet sa dernière revision; V1 renvoie un snapshot autoritaire puis continue les événements. File par partie dans une instance serveur. Verrouillage transactionnel / compare-and-swap pour éviter les écritures perdues. Une seule instance en V1; ne pas prétendre fonctionner en multi-instance sans routage des salles et coordination.
Une déconnexion ne change pas le joueur actif. Montrer attente/reconnexion, permettre une pause; ne pas éliminer automatiquement. Les enchères ont une échéance serveur affichée; la politique de reprise après redémarrage est explicite et testée.

## Persistance
Tables proposées : games (state_jsonb, revision, edition hash, timestamps, status), game_members (playerId, token hash, revokedAt), game_events (gameId, sequence, type, payload), command_receipts (gameId, actorId, commandId, résultat), asset_versions. Contraintes uniques sur séquences et commandes. Snapshot à chaque commande acceptée en V1; archivage ultérieur si nécessaire. Les événements décrivent la partie; la garantie de reprise vient du snapshot transactionnel. Sauvegarder les données d’édition utilisées ou leur copie immuable.

## Rendu
SceneController observe snapshots/événements. AssetManager charge un manifeste versionné. BoardMapper associe caseId => position et propertyId => parcelle, bâtiment, couleur, points de caméra. Les événements changent les constructions; le décor permanent ne représente pas de maisons possédées. CameraDirector gère vue générale, déplacement et détail, annulables. Après reconnexion, reconstruire depuis l’état au lieu de rejouer toute la partie.

## Déploiement
Web statique sur Vercel ou équivalent. Serveur persistant sur hébergement supportant WebSockets; pas de WebSocket longue durée supposée fonctionner dans une fonction serverless. PostgreSQL managé; modèles sur CDN versionné avec CORS configuré. Docker Compose local pour web, serveur et Postgres. Secrets uniquement serveur; variables d’exemple sans valeurs réelles. Endpoints /health et /ready; logs structurés commandId/gameId sans jetons.

## Accès
Codes de salle pour trouver la partie, tokens aléatoires privés pour autoriser. Le code de salle seul ne permet pas de reprendre l’identité d’un joueur. Token de reprise révocable, stockage de hash serveur. Limites de débit HTTP/WS, tailles maximales, pseudos bornés et échappés. Cookies sécurisés lorsque même origine; préciser CSRF et validation Origin, ou tokens d’accès courts si architecture séparée. Aucune clé de base de données dans le navigateur.
