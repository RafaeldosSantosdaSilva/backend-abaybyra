module.exports = function (app){
    app.post('/add_turma', function (req, res) {
     let connection = app.app.config.database();
     let query = app.app.models.modelQueries; 
   
     let conteudo = { //OBJETO DO MÉTODO POST
          escola_id: req.body.escola,
          professor_id: req.body.professor,
          turma_num: req.body.turma
         
        }
    
       query.cadastroTurmas(connection, conteudo, function(error, results){ //QUERY 
       console.log(error)
   
       res.send("teste" + conteudo.senha + conteudo.nome)
   
     });
   
    })
     }