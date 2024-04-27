"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UsergiveCoupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UsergiveCoupon.init(
    {
      userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      bookID: DataTypes.INTEGER,
      countOfCoupon: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UsergiveCoupon",
    }
  );
  return UsergiveCoupon;
};

// run code to create Table: npx sequelize-cli model:generate --name UsergiveCoupon --attributes email:string,password:string,username:string
