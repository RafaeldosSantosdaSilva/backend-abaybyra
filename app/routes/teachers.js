module.exports = (app) => {
  app.get('/teste2/:id', function(req,res){
 
    let connection = app.app.config.database();
    let query = app.app.models.modelQueries;
    const conteudo = {
      id: req.params.id,
      nome: req.params.nome
    }

      query.getTeachers(connection, conteudo, function(error, results, fields){
      console.log(error,results)
      res.json(results);
    });
  });
}