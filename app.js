const express=require('express');
const app= express();

const bodyparser=require('body-parser');
app.use(bodyparser.json({extended:false}));
app.use(express.json());

const sequelize=require('./util/database');

const router=require('./route/shoproute');
app.use(router);

const cors=require('cors');
app.use(cors());

const path=require('path');
app.use(express.static(path.join(__dirname,'public')));

sequelize
.sync()
.then(result=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
})


