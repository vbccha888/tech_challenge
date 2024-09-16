import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="hero-section d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <h1 className="display-4 mb-4 text-white">Bem-vindo ao Gerenciamento de Livros</h1>
        <p className="lead mb-5 text-white">
          Organize sua coleção de livros com facilidade. Adicione novos títulos, visualize e edite seus favoritos.
        </p>
        <div>
          <Link to="/books" className="btn btn-primary btn-lg mr-3">
            <i className="fas fa-book-open"></i> Ver Livros
          </Link>
          <Link to="/add-book" className="btn btn-success btn-lg">
            <i className="fas fa-plus"></i> Adicionar Livro
          </Link>
        </div>
      </div>
    </div>
  );
}
//nova versao
export default Home;
