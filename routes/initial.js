const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
  res.render('initial/index') //cria diretórios com o res.render
})

router.get('/login', (req,res) => {
  res.send("Page of login")
})

router.get('/register', (req,res) =>{
  res.send("Page of register")
})

router.get('/aboutus', (req,res) => {
  res.send ("Page of about us")
})





module.exports = router