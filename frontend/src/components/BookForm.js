import React, { useState } from 'react';
import axios from '../services/api';

function BookForm() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [message, setMessage] = useState(null);  // Para mensagens de sucesso ou erro

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/livros', { titulo, autor })
      .then(() => {
        setMessage('Livro adicionado com sucesso!');
        setTitulo('');
        setAutor('');
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
        <button type="submit" className="btn btn-success btn-block">
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default BookForm;
