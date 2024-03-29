"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ListBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // ListBook.belongsToMany(models.User, { through: "ListBook_User" });
    }
  }
  ListBook.init(
    {
      listID: DataTypes.INTEGER,
      userID: DataTypes.INTEGER,
      listName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ListBook",
    }
  );
  return ListBook;
};

// run code to create Table: npx sequelize-cli model:generate --name ListBook --attributes email:string,password:string,username:string
