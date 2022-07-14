const { json } = require("express");
const express = require("express");
const api = require('./src/routes');

const PORT = process.env.PORT ||3000;

const app = express();
app.use(express.json());

app.use(api());

app.listen(PORT,()=>{
    console.log(`Example app listening on port ${PORT}`);
});