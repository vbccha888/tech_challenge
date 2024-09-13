import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import EditBook from './components/EditBook';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/add-book" element={<BookForm />} />
          <Route path="/edit-book/:id" element={<EditBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



//configuração de rotas no frontend 
