"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserFollowBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserFollowBook.init(
    {
      userID: DataTypes.INTEGER,
      bookID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserFollowBook",
    }
  );
  return UserFollowBook;
};

// run code to create Table: npx sequelize-cli model:generate --name UserFollowBook --attributes email:string,password:string,username:string
