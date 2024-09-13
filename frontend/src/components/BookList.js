import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBooks, deleteBook } from '../services/bookService';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const response = await getBooks();
    setBooks(response.data);
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    loadBooks(); // Recarrega a lista após deletar
  };

  return (
    <div className="container">
      <h1 className="mt-5">Lista de Livros</h1>
      <Link to="/add" className="btn btn-primary mb-3">Adicionar Novo Livro</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map(book => (
              <tr key={book._id}>
                <td>{book.titulo}</td>
                <td>{book.autor}</td>
                <td>
                  <Link to={`/edit/${book._id}`} className="btn btn-warning">Editar</Link>
                  <button onClick={() => handleDelete(book._id)} className="btn btn-danger ms-2">Deletar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">Nenhum livro encontrado</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Corrigido: Exportar como default
export default BookList;


// Exibe lista de livros 