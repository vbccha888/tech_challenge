import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from '../services/api';

function EditBook() {
  const { id } = useParams();
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => {
    axios.get(`/livros/${id}`)
      .then((response) => {
        setTitulo(response.data.titulo);
        setAutor(response.data.autor);
        setEditora(response.data.editora);
      })
      .catch((err) => {
        setMessage('Erro ao buscar o livro: ' + err.message);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/livros/${id}`, { titulo, autor, editora })
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
            <button type="submit" className="btn btn-primary btn-md">
              Atualizar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditBook;
