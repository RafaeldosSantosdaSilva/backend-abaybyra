module.exports = (app) => {
    app.get('/auth/:email/:senha', function(req,res){
  
        let connection = app.app.config.database();
        let query = app.app.models.modelQueries;
        const conteudo = {
          email: req.params.email,
          senha: req.params.senha
        }
    
          query.getAuth(connection, conteudo, function(error, results, fields){
          console.log(error,results)
          res.json(results);
 
    });
});
  }