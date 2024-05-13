"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.belongsTo(models.User, {
        foreignKey: "userID",
      });
    }
  }
  Payment.init(
    {
      paymentID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userID: DataTypes.INTEGER,
      serviceName: DataTypes.STRING,
      amount: DataTypes.STRING,
      time: DataTypes.DATE,
      codePayment: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};

// run code to create Table: npx sequelize-cli model:generate --name Payment --attributes email:string,password:string,username:string
