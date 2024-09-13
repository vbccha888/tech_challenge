//file app.js

import express from "express"; 
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

// conexão com o mangoose
const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});
// fim da conexão com o mangoose 

//Utilização da biblioteca express
const app = express(); 
//app.use(express.json()); 

routes(app);

export default app; 

