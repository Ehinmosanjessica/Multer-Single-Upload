const {Sequelize} = require('sequelize');

const user = process.env.DBUSERNAME
const password = process.env.DBPASSWORD
const db = process.env.DBNAME   
const host = process.env.DBHOST

const sequelize = new Sequelize(db, user,
    password,{
        host:host,
        dialect:'mysql'
    })


module.exports = sequelize