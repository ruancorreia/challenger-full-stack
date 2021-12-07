const sequelize = require('sequelize');
const connection = new sequelize('traffico', 'root', '1990', {
    host:'localhost',
    dialect:'mysql'
});

module.exports = connection;