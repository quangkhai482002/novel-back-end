"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserFollowUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserFollowUser.init(
    {
      userID: DataTypes.INTEGER,
      followerID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserFollowUser",
    }
  );
  return UserFollowUser;
};

// run code to create Table: npx sequelize-cli model:generate --name UserFollowUser --attributes email:string,password:string,username:string
