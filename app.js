const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(process.env.PORT || 4000, () => {
    console.log("Servidor corriendo");
});
app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname, './src/views/home.html'));
});
app.get('/register',(req,res) => {
    res.sendFile(path.resolve(__dirname, './src/views/register.html'));
});
app.get('/login',(req,res) => {
    res.sendFile(path.resolve(__dirname, './src/views/login.html'));
});
