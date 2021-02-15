const {check, validationResult } = require("express-validator");

module.exports = function (app){
 
app.get('/add_prof', function(req, res){
  res.render('views/index', {validacao:{errors:{},}, dados:{}});
});

 app.post('/add_prof/salvar',[
  check('nome', 'Nome é Obrigatótio').notEmpty(),
  check('email', 'Email é Obrigatório').notEmpty(),
  check('senha', 'A senha precisa ter no mínimo 8 digitos').isLength({min:8}),
  check('disciplina', 'Informe a Diciplina').notEmpty(),
 ], function (req, res) {

  let erros = validationResult(req);
      
      if(!erros.isEmpty()){
      res.render("views/index", {validacao:erros})
      console.log(erros);
      return;
    }


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