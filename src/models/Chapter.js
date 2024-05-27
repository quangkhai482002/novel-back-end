"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chapter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chapter.belongsTo(models.Book, {
        foreignKey: "bookID",
      });
      Chapter.belongsTo(models.User, {
        foreignKey: "writerID",
      });
      Chapter.hasMany(models.Comment);
    }
  }
  Chapter.init(
    {
      chapterID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      bookID: DataTypes.INTEGER,
      writerID: DataTypes.INTEGER,
      chapterName: DataTypes.STRING,
      orderNumber: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      audio: DataTypes.STRING,
      view: DataTypes.INTEGER,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Chapter",
    }
  );
  return Chapter;
};

// run code to create Table: npx sequelize-cli model:generate --name Chapter --attributes email:string,password:string,username:string
