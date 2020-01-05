'use strict';
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING(200),
    author: DataTypes.STRING,
    publisher_id: DataTypes.INTEGER,
    ISBN: DataTypes.STRING,
    published_date: DataTypes.DATE,
    cover: DataTypes.BLOB,
    price: DataTypes.FLOAT,
    unpublished: DataTypes.INTEGER(2),
    updated_at: DataTypes.DATE
  }, {});
  Books.associate = function(models) {
    // associations can be defined here
  };
  return Books;
};