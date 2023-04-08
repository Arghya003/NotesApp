require('dotenv').config()


const express= require('express')
const expressLayouts=require('express-ejs-layouts')


const app= express()
const PORT=5000||process.env.PORT;


app.use(express.urlencoded({extended:true}))
app.use(express.json())


//static files
app.use(express.static('public'))


//templating engines
app.use(expressLayouts)
app.set('layout','./layouts/main')
app.set('view engine','ejs')


//routes
app.use('/',require('./server/routes/index'))


//handle 404
app.get("*",function(req,res){
    res.status(404).render('404')

})


app.listen(PORT,()=>{
    console.log(`listening to sever${PORT} `)
})