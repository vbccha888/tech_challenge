import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../services/api';

function BookList() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/livros')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => {
        setError('Erro ao buscar a lista de livros: ' + err.message);
      });
  }, []);

  const deleteBook = (id) => {
    axios.delete(`/livros/${id}`)
      .then(() => {
        setBooks(books.filter((book) => book._id !== id));
      })
      .catch((err) => {
        setError('Erro ao deletar o livro: ' + err.message);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lista de Livros</h2>
      {error && <p className="text-danger text-center">{error}</p>}
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th className="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book._id}</td>
              <td>{book.titulo}</td>
              <td>{book.autor}</td>
              <td className="text-center">
                <Link to={`/edit-book/${book._id}`} className="btn btn-primary btn-sm mr-2">
                  <i className="fas fa-edit"></i> Editar
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteBook(book._id)}
                >
                  <i className="fas fa-trash-alt"></i> Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
