import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Certifique-se de que tudo está importado corretamente
import HomePage from './components/HomePage';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        {/* Menu de navegação */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Gerenciamento de Livros</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/books">Listagem de Livros</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add">Adicionar Novo Livro</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Definindo as rotas */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



//configuração de rotas no frontend 
