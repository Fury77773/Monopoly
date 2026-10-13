# Direction artistique et pipeline
## Cible des références
reference-01-concept.png : intégration plateau/interface, ambiance immersive. Les avatars et effets sont plus stylisés que les deux autres captures.
reference-02-city.png : ville miniature photographique, tours vitrées, lumière du soir, fenêtres chaudes, échelle cohérente.
reference-03-neighborhood.png : quartiers résidentiels, végétation dense, rues lisibles, profondeur de champ de maquette.
Priorité photoréalisme : captures 02 et 03. Éviter les immeubles en simples boîtes uniformes et l’éclairage plat. Ces PNG sont des références, pas une scène reconstruite ni une texture à plaquer sur tout le plateau.

## Composition
Parcours carré lisible de 40 cases; centre : parc et décor; périphérie : skyline compacte. Chaque propriété possède une parcelle associée, distincte du décor. Palette de groupe présente sur bordure/repère discret. Pions métalliques réalistes en première version. Garder routes, cases et bâtiments à des échelles artistiquement cohérentes; définir une convention métrique interne unique.

## Caméra
Vue principale trois-quarts, preset panoramique et gros plans limités. Positionner les bâtiments pour éviter de masquer les cases. Clic/toucher sur une case => fiche. Flou de profondeur seulement en séquence cinéma; le désactiver pendant les décisions. Animations annulables, préférence mouvement réduit, retour immédiat au plateau. Pas de caméra libre au ras des rues en V1.

## Pipeline
1. Blender : collection par quartier/parcelle, transforms appliquées, pivots au sol, modèles modulaires.
2. Matériaux PBR : albedo sans ombres peintes, normal, roughness/metalness et emissive; variation réelle des façades.
3. UV séparées pour matériaux et lightmaps; atlas sans chevauchement pour l’éclairage unique.
4. Préparer lumière fixe du soir, ombrages/occlusion et environnement HDR. Choisir un seul schéma pour éviter de compter l’éclairage deux fois.
5. Export GLB; lightmaps documentées dans manifeste, ne pas supposer qu’elles sont exportées automatiquement par glTF standard.
6. Compression KTX2 avec paramètres adaptés au type de texture; tester artefacts et décodage sur les cibles.
7. LOD par bâtiment; instances pour végétation/statique répétitive. Les variations de lightmap peuvent nécessiter modèles séparés ou atlas adapté.
8. Tester Babylon.js contre rendu de référence Blender avec caméra identique.

## Dynamique
Maisons et hôtels séparés de l’éclairage précalculé du décor; ne pas laisser leurs ombres figées après retrait. Lumière environnementale + ombres dynamiques limitées ou ombres locales discrètes pour les éléments évolutifs. Fenêtres émissives regroupées : pas une lumière ponctuelle par fenêtre. Voitures sur quelques chemins décoratifs, arrêtables en qualité basse. Pas de physique par arbre ou immeuble.

## Assets requis pour J1
Un coin complet, 3 propriétés, 3–5 façades variées, 2 types d’arbres, routes/marquages, banc/lampadaire, dé et pion, une maison et un hôtel. Fond de skyline optimisé. Réaliser au moins un asset final de bâtiment : les placeholders ne valident pas le photoréalisme.

## Contrat du manifeste
assetId, version, uri, sha256, bytes, licenseId, lods, bounds, pivot, materialVariant, lightmapUri, uvSet, qualityTier. Board mapping : caseId, propertyId, boardAnchor, parcelAnchor, cameraPreset, maxBuildings. Mapping validé automatiquement : 40 positions, identifiants uniques, 28 propriétés, aucun propriétaire décoratif ambigu.

## Livraison artistique
.blend sources, GLB distribués, textures, rapport de poids et captures même angle; provenance/licence par asset. Les fichiers de référence utilisateur restent des références internes. Si aucun asset final n’est disponible, Codex doit l’indiquer et proposer le minimum à produire, sans annoncer un rendu photoréaliste terminé.

## IA
Utiliser l’IA pour moodboard et textures avec retouches contrôlées; le code ne remplace pas le travail de modélisation. Aucun choix définitif de modèle IA n’est requis dans l’architecture. Évaluer les modèles disponibles au moment de la production sur une même tâche, selon qualité, cohérence, coût et assets exportables. Ne pas convertir une image unique en ville complète en promettant une fidélité non vérifiée.
