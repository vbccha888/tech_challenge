import livro from "../models/livros.js"; 

class LivroController {

    //Lista todos os livros - GET
    static async listarLivros(req, res){
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch(erro){
            res.status(500).json({ message: `${erro.message} - falha na requisição`});
        }
    };

    //Lista livro por ID - GET
    static async listarLivroPorId(req, res){
        try{
            const id = req.params.id
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch(erro){
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro`});
        }
    };

    //Cadastra novo livro - POST
    static async cadastrarLivro (req, res){
        try{
            const novoLivro = await livro.create(req.body);    
            res.status(201).json({ message: "criado com sucesso", livro: novoLivro });

        } catch (erro){
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        }
    };
    
    //Atualiza livro - PUT
    static async atualizarLivro(req, res){
        try{
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "livro atualizado" });
        } catch(erro){
            res.status(500).json({ message: `${erro.message} - falha na atualziação do livro` });
            }
        };

    //Exclui livro - DELETE
    static async excluirLivro(req, res){
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro excluido com sucesso" });
        } catch(erro){
            res.status(500).json({ message: `${erro.message} - falha na exclusão do livro` });
            }
        };    

    };

export default LivroController; 

