module.exports = (seq, DataTypes) => {
  return seq.define('user', {
    name: {
      type: DataTypes.STRING
    },
    password: {
      type: DataType.STRING
    }
  }, {
    freezeTableName: true
  }),

}