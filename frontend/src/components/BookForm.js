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
    <div>
      <h2>Adicionar Novo Livro</h2>
      {message && <p className="text-info">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Autor</label>
          <input
            type="text"
            className="form-control"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default BookForm;
