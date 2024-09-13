import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Gerenciamento de Livros
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/books">
              Listagem de Livros
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-book">
              Adicionar Livro
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
