import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/api';

function EditBook() {
  const { id } = useParams();
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => {
    axios.get(`/livros/${id}`)
      .then((response) => {
        setTitulo(response.data.titulo);
        setAutor(response.data.autor);
      })
      .catch((err) => {
        setMessage('Erro ao buscar o livro: ' + err.message);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/livros/${id}`, { titulo, autor })
      .then(() => {
        setMessage('Livro atualizado com sucesso!');
      })
      .catch((err) => {
        setMessage('Erro ao atualizar o livro: ' + err.message);
      });
  };

  return (
    <div>
      <h2>Editar Livro</h2>
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
        <button type="submit" className="btn btn-primary">
          Atualizar
        </button>
      </form>
    </div>
  );
}

export default EditBook;
