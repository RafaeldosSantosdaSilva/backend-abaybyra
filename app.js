let app = require('./app/config/server');
const PORT = process.env.PORT || 3000
app.listen(PORT,function(){
  console.log("Servidor rodando!");
});