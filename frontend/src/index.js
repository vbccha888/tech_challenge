import React from 'react';
import ReactDOM from 'react-dom/client';  // Atualize a importação para usar 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap para estilos
import './index.css'; // Seu arquivo de CSS, se houver
import App from './App'; // Importando o componente App

// Crie a raiz com createRoot e renderize o App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

