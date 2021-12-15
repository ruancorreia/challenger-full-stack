const sequelize = require('sequelize');
const connection = new sequelize('traffico', 'root', null, {
    host:'localhost',
    dialect:'mysql'
});

module.exports = connection;