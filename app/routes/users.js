module.exports = (app) => {
    app.get('/users', function(req,res){
    
    res.header('Access-Control-Allow-Origin', '*');

  

      let connection = app.app.config.database();
      let query = app.app.models.modelQueries;
      
        query.users(connection,
      function(error, results, fields){
        console.log(error,results)
        res.json(results);
      });
    });
  }