const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser') //recebe dados de qualquer formulário no express
const app = express() //app é a instancia principal do express
const initial = require ("./routes/initial") //const para utilizar as rotas da pasta routes
const path = require("path") //Modulo padrão do node usado para trabalhar com diretórios. Usar pastas

//Configure
  //Body Parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
  //Handlebars
    app.engine('handlebars', handlebars.engine())
    app.set('view engine', 'handlebars')
  //Mongoose

//Public (página estática)
    app.use(express.static(path.join(__dirname,"public"))) //__dirname usado p/ pegar o caminho absoluto para a página public - evita muitos erros
//Routes
    app.use('/', initial)
//Outros
const PORT = 8081
app.listen(PORT, () =>{
  console.log("Servidor Rodando!!!")
})

//app.use(express.json()) -> Middleware to Parse json
