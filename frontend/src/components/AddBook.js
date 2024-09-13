import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Substituir useHistory por useNavigate
import { addBook } from '../services/bookService';

const AddBook = () => {
  const [book, setBook] = useState({ titulo: '', autor: '', editora: '' });
  const navigate = useNavigate();  // useNavigate substitui useHistory

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook(book);
    navigate('/books');  // useNavigate faz a navegação
  };

  return (
    <div className="container">
      <h1 className="mt-5">Adicionar Novo Livro</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input type="text" className="form-control" name="titulo" value={book.titulo} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Autor</label>
          <input type="text" className="form-control" name="autor" value={book.autor} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Editora</label>
          <input type="text" className="form-control" name="editora" value={book.editora} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Adicionar</button>
      </form>
    </div>
  );
};

export default AddBook;

//adiciona novo livro