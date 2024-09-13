import axios from 'axios';

const API_URL = 'http://localhost:5000/api/livros';  // URL da API do backend

// Função para buscar todos os livros
export const getBooks = () => {
  return axios.get(API_URL);
};

// Função para buscar um livro por ID
export const getBookById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// Função para adicionar um novo livro
export const addBook = (book) => {
  return axios.post(API_URL, book);
};

// Função para atualizar um livro
export const updateBook = (id, book) => {
  return axios.put(`${API_URL}/${id}`, book);
};

// Função para deletar um livro
export const deleteBook = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
