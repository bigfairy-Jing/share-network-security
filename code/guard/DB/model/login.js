'use strict';
module.exports = (seq, DataTypes) => {
  return seq.define('login', {
    name: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  })
}