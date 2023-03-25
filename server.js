const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT||3000;

app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

app.get('/', (req,res)=>{
    res.render('base',{title : "Login System"});
})

app.listen(port,() => {console.log("listening on the port http://localhost:3000")})