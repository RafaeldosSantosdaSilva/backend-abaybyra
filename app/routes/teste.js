module.exports= function(app){
  
  app.get('/teste', function(req,res){

    let connection = app.app.config.database();
    let query = app.app.models.modelQueries;
    
    query.getTeachers(connection,
    function(error, results, fields){
      console.log(error,results)
      res.render('teste', {dados: results});
    });

    /* query.on('error', function(error){
      console.log("[mysql error: ]", error)
    }); */
  });
}