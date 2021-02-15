const {check, validationResult } = require("express-validator");

module.exports = function (app){

  app.get('/add_escola', function(req, res){
    res.render('views/index', {validacao:{errors:{},}, dados:{}});
  });

    app.post('/add_escola/salvar',[
      check('nome', 'Nome é Obrigatótio').notEmpty(),
      check('email', 'Email é Obrigatório').notEmpty(),
      check('senha', 'A senha precisa ter no mínimo 8 digitos').isLength({min:8}),
      check('logradouro', 'Informe o logradouro').notEmpty(),
      check('numero', 'Informe o número').notEmpty(),
      check('complemento', 'Informe o complemento').notEmpty(),
      check('bairro', 'Informe o bairro').notEmpty(),
      check('cidade', 'Informe a cidade').notEmpty(),
      check('estado', 'Informe o Estado').notEmpty(),
      check('cep', 'CEP inválido').notEmpty().isLength({min:8, max:8}),
      check('telefone', 'Informe o telefone').notEmpty(),
      check('telefone2', 'Informe o telefone 2').notEmpty(),
      check('publica', 'Informe se é publica').notEmpty(),
    ], function (req, res){

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