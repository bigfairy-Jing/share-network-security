const Sequelize = require('sequelize');
const config = require('./conf');
const comments = require('./model/comments');
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
});



const testConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnect();

module.exports = {
  sequelize,
  login: sequelize.import("./model/login.js"),
  comments: sequelize.import("./model/login.js")
}