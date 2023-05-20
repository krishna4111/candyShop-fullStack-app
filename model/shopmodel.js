const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const candy=sequelize.define('candyDetail',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        unique:true
    },
    candy:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    quantity:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports=candy;