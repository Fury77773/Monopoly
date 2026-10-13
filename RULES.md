# Règles et moteur
## Statut documentaire
Spécification de travail du Monopoly classique. L’édition exacte n’a pas encore été choisie et son livret complet n’a pas été récupéré : le téléchargement officiel consulté a échoué. Il faut auditer ces exigences contre une seule édition avant de labelliser le jeu « fidèle aux règles officielles ». Ne pas présenter les points ci-dessous comme une transcription certifiée du livret. Ne pas copier de longues cartes officielles dans le code; séparer libellés autorisés et effets structurés.

## Données d’édition
40 cases ordonnées; type, prix, hypothèque, groupe, loyers par niveau, coût de construction; 4 gares; 2 services; deux paquets de 16 cartes dans le profil classique; 32 maisons et 12 hôtels; argent initial 1500 et départ 200 comme valeurs provisoires à confirmer. Une carte définit des actions (moveTo, moveBy, transfer, collectFromPlayers, payEachPlayer, repairs, prison, heldReleaseCard), pas du code arbitraire. Chaque donnée indique source et statut verified/pending.

## Tour et doubles
Lancer deux dés, déplacer, résoudre la case puis terminer ou relancer si double autorisé. Au troisième double consécutif, aller directement en prison avant de résoudre un déplacement normal. Réinitialiser le compteur au tour suivant. Les animations ne modifient pas ce séquencement.

## Départ et mouvement
Recevoir le montant prévu en franchissant Départ dans le sens normal, suivant le contexte de la carte. Aller en prison n’accorde pas le départ. Une carte peut provoquer un autre effet de case : conserver une chaîne de résolution explicite. Reculer ne doit pas devenir un franchissement avant par erreur.

## Achats et enchères
À une propriété libre : acheter au prix ou décliner. Décliner déclenche l’enchère; le joueur qui refuse peut participer. Valider chaque offre contre les liquidités disponibles. Montants et incrément minimum de l’enchère sont configurés et audités. Politique réseau proposée : passage définitif pour cette enchère, fin quand il reste un enchérisseur ou tous passent; tous passent sans offre => propriété reste libre. Le délai technique n’est pas une règle officielle : l’identifier comme adaptation numérique.

## Loyers
Tables de loyers exactes dans l’édition. Terrain non bâti avec groupe complet : appliquer le multiplicateur prévu, même si d’autres propriétés du groupe sont hypothéquées lorsque le livret le permet. Aucune perception sur la propriété hypothéquée. Gares selon quantité détenue; services selon dés et nombre de services. Les cartes vers gares/services peuvent imposer un calcul spécial ou un nouveau lancer; ne pas réutiliser aveuglément le loyer ordinaire.
Automatisation proposée : paiement immédiat du loyer. Auditer la disposition du livret sur la réclamation du loyer; afficher cette différence éventuelle avec le jeu physique.

## Construction
Groupe complet; aucune propriété hypothéquée dans le groupe. Construction uniforme, stock de banque limité, coût exact de l’édition. Maximum quatre maisons avant hôtel, remplacement suivant coût et règles. Vente à la banque au taux prévu et de façon uniforme. Conversion d’un hôtel en maisons exige le stock nécessaire; si absent, appliquer la procédure exacte du livret, jamais créer du stock. Arbitrage de pénurie/achats simultanés à auditer; opérations sérialisées côté serveur.
Les créneaux de gestion hors tour doivent être documentés : l’UI propose une fenêtre de gestion avant lancer/après résolution. Si cela restreint une permission du livret, la déclarer comme adaptation et ajuster pour le mode strict.

## Hypothèques
Vendre d’abord les bâtiments du groupe selon le livret. Hypothéquer donne la valeur de la table. Lever l’hypothèque coûte principal et intérêt de l’édition. Le transfert d’une propriété hypothéquée impose une décision au receveur : intérêt immédiat puis option de remboursement; auditer le nouvel intérêt si remboursement différé. Pas de cumul fictif par tour.

## Prison
Visite simple distincte de détenu. Entrée par case, carte ou troisième double. Choix de payer avant lancer, carte de sortie ou tentative de double; nombre d’essais limité par l’édition. Sortie sur double en prison n’accorde pas automatiquement un autre lancer. À la dernière tentative ratée : payer puis avancer avec les dés obtenus, suivant le livret. Les loyers et la gestion immobilière restent permis si l’édition le prévoit. Compteur persisté entre tours.

## Cartes
Paquets mélangés une fois, tirage/replacement dans l’ordre prévu. Carte de sortie conservée hors paquet jusqu’à usage/transfert/restitution. Les réparations comptent les maisons et hôtels selon les tarifs propres à la carte. Les transferts multijoueurs sont résolus dans un ordre fixé et documenté, avec gestion de dette et faillite, pas en ignorant un joueur insolvant.

## Taxes et cases neutres
Montants selon l’édition. Stationnement gratuit sans cagnotte en mode classique. Pas de prime maison sur Départ, prêt entre joueurs ni argent gagné en prison par défaut. Toute variante est verrouillée au démarrage et visible.

## Échanges
Argent, propriétés autorisées et cartes de sortie admissibles. Pas de bâtiments vendus entre joueurs; vendre les bâtiments du groupe avant transaction concernée. Offre versionnée, fonds et état revalidés à acceptation. Aucun transfert avant validation de tous les éléments; exécution atomique. Offre périmée => rejet explicite. Les futures promesses de loyers et prêts ne sont pas supportés en mode classique.

## Dette et faillite
Dette en attente => phase dédiée; bloquer fin de tour et achats non nécessaires. Autoriser ventes/hypothèques et actions de financement permises. Ne pas déclarer faillite simplement parce que le solde courant est insuffisant. Créancier joueur : transfert des actifs/carte et traitement des hypothèques conforme au livret. Créancier banque : restituer cartes/actifs et organiser les enchères prévues. Aucun solde négatif non représenté par une dette. Dernier joueur actif gagne.

## Machine d’état
lobby -> awaiting_roll -> moving/resolving -> purchase_decision/auction/debt/card_resolution -> awaiting_roll si double ou turn_end -> joueur suivant; prison_choice avant lancement lorsque détenu; game_over quand un seul reste. moving est présentation côté client : le serveur conserve une phase de règle stable. États transitoires des cartes, enchères et dettes sérialisables.

## Audit avant V1
Confirmer édition et noms; saisir toutes les tables; relire cartes et cas spéciaux; valider prison, pénuries, faillite, intérêts et fenêtres de gestion; identifier les adaptations numériques. Ajouter une référence et un test pour chaque point. L’interface ne doit pas appeler « officiel » un profil pending.
