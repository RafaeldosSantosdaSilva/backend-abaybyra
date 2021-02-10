let app = require('./app/config/server');
const PORT = process.env.PORT || 3005
app.listen(PORT,function(){
  console.log("Servidor rodando na porta:", PORT);
});