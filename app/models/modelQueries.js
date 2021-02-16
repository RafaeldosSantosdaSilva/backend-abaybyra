module.exports = function(){

 // const id = req.params.id
  /*QUERYS DE INSERÇÃO NO BANCO / CADASTROS */

  /* Cadastrar professor*/ 
  this.cadastroProfessor = function (connection, conteudo, callback){
    connection.query(`insert into professores values(null, '${conteudo.nome}' , '${conteudo.email}', '${conteudo.senha}', '${conteudo.disciplina}', null)`, callback);
  }

    /* Cadastrar Alunos*/ 
  this.cadastroAlunos= function (connection, conteudo, callback){
    connection.query(`insert into alunos values(null, '${conteudo.email}' , '${conteudo.senha}', ${conteudo.turma}, ${conteudo.id_escola},'${conteudo.nome}',${conteudo.data_nascimento} null)`, callback);
  }

     /* Cadastrar Escola*/ 
  this.cadastroEscola = function (connection, conteudo, callback){
    connection.query(`insert into escolas values(null,'${conteudo.nome}', '${conteudo.email}', '${conteudo.senha}', '${conteudo.codigo_escola}','${conteudo.logradouro}',${conteudo.numero},'${conteudo.complemento}','${conteudo.bairro}', '${conteudo.cidade}', '${conteudo.estado}', '${conteudo.cep}','${conteudo.telefone}', '${conteudo.telefone2}', ${conteudo.publica}, null)`,callback);
  }

  this.cadastroTurmas= function (connection, conteudo, callback){
    connection.query(`insert into turmas values(${conteudo.escola_id} , ${conteudo.professor_id}, ${conteudo.turma_num})`, callback);
  }


  /* AS QUERYS ABAIXO SÃO DE CONSULTAS */

  /* QUERY QUE RETORNA TURMAS CADASTRADAS com ID DA ESCOLA*/ 
  this.TurmasProfessor= function (connection, conteudo, callback){
  connection.query(`select e.nome as nome_escola, p.nome as nome_professor, turma_num as turma from turmas join escolas e on e.escola_id= ${conteudo.escola_id}  join professores p on p.professor_id;`, callback);
  }

  /* QUERY QUE RETORNA ALUNOS CADASTRADAS com ID DA ESCOLA*/ 
  this.getTeachers = function (connection, conteudo, callback){
    connection.query(`select * from escola where id_escola=${conteudo.id};`, callback);
  }

    /* QUERY QUE RETORNA BOOLEAN DE LOGIN*/ 
    this.getTeachers = function (connection, conteudo, callback){
      connection.query(`select * from escola where id_escola=${conteudo.id};`, callback);
    }

     /* QUERY QUE RETORNA BOOLEAN DE LOGIN*/ 
     this.getAuth = function (connection, conteudo, callback){
      connection.query(`SELECT COUNT(professor_id) as professor, (select COUNT(escola_id) 
      from escolas where email='${conteudo.email}' and senha='${conteudo.senha}') as escola 
      from professores where email='${conteudo.email}' and senha='${conteudo.senha}'`, callback);
    }


  this.users = function (connection, callback){
    connection.query("select * from usuario", callback);
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