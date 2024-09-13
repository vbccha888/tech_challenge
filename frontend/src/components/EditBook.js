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
    <div className="container mt-5">
      <h2 className="text-center mb-4">Editar Livro</h2>
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
        <button type="submit" className="btn btn-primary btn-block">
          Atualizar
        </button>
      </form>
    </div>
  );
}

export default EditBook;
