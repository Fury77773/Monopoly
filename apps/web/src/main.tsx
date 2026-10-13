import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
function App(){return <main><p>MONOPOLY · ATELIER DE DÉVELOPPEMENT</p><h1>Une ville miniature.<br/>Une vraie partie.</h1><p>Le dépôt est initialisé. Prochain jalon : preuve visuelle photoréaliste J1.</p><aside>Fondations uniquement — le jeu et les assets 3D restent à développer.</aside></main>}
createRoot(document.getElementById('root')!).render(<App/>);
