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

// função em js para busca do livro em um array 
//function buscaLivro(id){
//    return livros.findIndex(livro => {
//        return livro.id === Number(id);
//   })
//}

//app.get("/", (req, res) => {
//    res.status(200).send("Curso de Node.JS");
//});

//busca geral
//app.get("/livros", async (req, res) => {
//    const listaLivros = await livro.find({});
//    res.status(200).json(listaLivros);
//});

//Buscar por id
//app.get("/livros/:id", (req, res) => {
//    const index = buscaLivro(req.params.id);
//    res.status(200).json(livros[index])
//})

//Inclusão
//app.post("/livros", (req, res) => {
//    livros.push(req.body);
//    res.status(201).send("Livro cadastrado com sucesso");
//}); 

//Alteração 
//app.put("/livros/:id", (req, res) => {
//    const index = buscaLivro(req.params.id);
//    livros[index].titulo = req.body.titulo; 
//    res.status(200).json(livros);
//});

//app.delete("/livros/:id", (req, res) => {
//  const index = buscaLivro(req.params.id);
//   livros.splice(index, 1);
//   res.status(200).send("livro removido com sucesso");
//});



export default app; 

