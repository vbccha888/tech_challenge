import React, { useState } from 'react';
import axios from '../services/api';
import { Link } from 'react-router-dom';

function BookForm() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');
  const [message, setMessage] = useState(null);  // Para mensagens de sucesso ou erro

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/livros', { titulo, autor, editora })
      .then(() => {
        setMessage('Livro adicionado com sucesso!');
        setTitulo('');
        setAutor('');
        setEditora('');
      })
      .catch((err) => {
        setMessage('Erro ao adicionar o livro: ' + err.message);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Adicionar Novo Livro</h2>
      {message && <p className="text-info text-center">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite o título do livro"
          />
        </div>
        <div className="form-group">
          <label>Autor</label>
          <input
            type="text"
            className="form-control"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            placeholder="Digite o nome do autor"
          />
        </div>
        <div className="form-group">
          <label>Editora</label>
          <input
            type="text"
            className="form-control"
            value={editora}
            onChange={(e) => setEditora(e.target.value)}
            placeholder="Digite o nome da editora"
          />
        </div>

        <div class="row max-content">
          <div class="col-4">
            <Link to="/">
              <button type="button" className="btn btn-danger btn-md">
                Cancelar
              </button>
            </Link>
          </div>
          <div class="col-4"></div>
          <div class="col-4 text-right">
            <button type="submit" className="btn btn-success btn-md">
              Adicionar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookForm;
