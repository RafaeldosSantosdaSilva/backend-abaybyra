module.exports = (app) => {
  app.get('/teste2', function(req,res){

    let connection = app.app.config.database();
    let query = app.app.models.modelQueries;
    
    query.getTeachers(connection,
    function(error, results, fields){
      console.log(error,results)
      res.render('teste2', {dados: results});
    });
  });
}