const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      max: 10,
      min: 0
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.candywarehouse.com/assets/item/thumbnail/rainbow-swirl-lollipop-134356-ic.jpg'
  }
});
