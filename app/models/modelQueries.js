module.exports = function(){

  this.getTeachers = function (connection, callback){
    connection.query("select * from professores", callback);
  }
/* 
  this.getConteudoFront = function (connection, callback){
    connection.query("select * from conteudo where categoria = 'frontend'", callback);
  }

  this.getConteudoBack = function (connection, callback){
    connection.query("select * from conteudo where categoria = 'backend'", callback);
  }

  this.salvarConteudo = function (conteudo, connection, callback){
    connection.query("insert into conteudo set ?", conteudo);
  }
   */
  return this;
}