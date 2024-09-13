import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // useNavigate substitui useHistory
import { getBookById, updateBook } from '../services/bookService';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();  // useNavigate substitui useHistory
  const [book, setBook] = useState({ titulo: '', autor: '', editora: '' });

  useEffect(() => {
    const loadBook = async () => {
      const response = await getBookById(id);
      setBook(response.data);
    };
    loadBook();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBook(id, book);
    navigate('/books');  // useNavigate substitui history.push
  };

  return (
    <div className="container">
      <h1 className="mt-5">Editar Livro</h1>
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
        <button type="submit" className="btn btn-primary">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditBook;


//Edita livro existente 

