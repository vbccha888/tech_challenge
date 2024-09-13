//file livros

import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId }, 
    titulo: { type: String, require: true},
    autor: {type: String, require: true}, 
    editora: { type: String}, 
    
}, {versionKey: false}); 

const livro = mongoose.model("livros", livroSchema); 

export default livro; 