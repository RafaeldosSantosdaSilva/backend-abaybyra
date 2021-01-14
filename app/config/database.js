let mysql = require('mysql');

let connMySQL=function(){
  console.log("conexão com o banco de dados estabelecida.");

  return connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'abaybyra'
  });
}

module.exports = function(){
  return connMySQL;
}