const express  = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',require('../src/routes/userRoute'));

app.listen(3000,()=>console.log(`server run at port 3000`));

module.exports =app;