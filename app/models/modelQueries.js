module.exports = function(){

  this.getTeachers = function (connection, callback){
    connection.query("select * from escola", callback);
  }
  this.users = function (connection, callback){
    connection.query("select * from usuario", callback);
  }

  this.cadastroProfessor = function (connection, conteudo, callback){
    connection.query(`insert into professores values(null, '${conteudo.nome}' , '${conteudo.email}', '${conteudo.senha}', '${conteudo.disciplina}', null)`, callback);
  }

  this.cadastroAlunos= function (connection, conteudo, callback){
    connection.query(`insert into alunos values(null, '${conteudo.email}' , '${conteudo.senha}', ${conteudo.turma}, ${conteudo.id_escola},'${conteudo.nome}',${conteudo.data_nascimento} null)`, callback);
  }

  this.cadastroEscola = function (connection, conteudo, callback){
    connection.query(`insert into escolas values(null,'${conteudo.nome}', '${conteudo.email}', '${conteudo.senha}', '${conteudo.codigo_escola}','${conteudo.logradouro}',${conteudo.numero},'${conteudo.complemento}','${conteudo.bairro}', '${conteudo.cidade}', '${conteudo.estado}', '${conteudo.cep}','${conteudo.telefone}', '${conteudo.telefone2}', ${conteudo.publica}, null)`,callback);
  }

  this.cadastroTurmas= function (connection, conteudo, callback){
    connection.query(`insert into turmas values(${conteudo.escola_id} , ${conteudo.professor_id}, ${conteudo.turma_num})`, callback);
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