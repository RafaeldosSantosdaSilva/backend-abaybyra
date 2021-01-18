module.exports = function (app){
    app.post('/add_escola', function (req, res) {
     let connection = app.app.config.database();
     let query = app.app.models.modelQueries; 
   
     let conteudo = { //OBJETO DO MÉTODO POST
          nome: req.body.nome,
          email: req.body.email,
          senha: req.body.senha,
          codigo_escola: req.body.codigo_escola,
          logradouro: req.body.logradouro,
          numero: req.body.numero,
          complemento: req.body.complemento,
          bairro: req.body.bairro,
          cidade: req.body.cidade,
          estado: req.body.estado,
          cep: req.body.cep,
          telefone: req.body.telefone,
          telefone2: req.body.telefone2,
          publica: req.body.publica 
        }
    
       query.cadastroEscola(connection, conteudo, function(error, results){ //QUERY 
       console.log(error)
   
       res.send("teste" + conteudo.senha + conteudo.nome)
   
     });
   
    })
     }