 module.exports = function (app){
 app.post('/add_prof', function (req, res) {
  let connection = app.app.config.database();
  let query = app.app.models.modelQueries; 

  let conteudo = { //OBJETO DO MÉTODO POST
       nome: req.body.nome,
       email: req.body.email,
       senha: req.body.senha,
       disciplina: req.body.disciplina
     }
 
    query.cadastroProfessor(connection, conteudo, function(error, results){ //QUERY 
    console.log(error)

    res.send("teste" + conteudo.senha + conteudo.nome)

  });

 })
  }