'use strict';
module.exports = (seq, DataTypes) => {
  return seq.define('user', {
    comment: {
      type: DataTypes.STRING
    },
  }, {
    freezeTableName: true
  })
}