const express = require('express');

require('dotenv').config();  //cargar variables en .env (a traves de process)

const app = express();

//Config
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
})
