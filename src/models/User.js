"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.belongsTo(models.Group);
      // User.belongsToMany(models.Project, { through: "Project_User" });
    }
  }
  User.init(
    {
      userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      typeOfAccount: DataTypes.STRING,
      follow: DataTypes.INTEGER,
      avatar: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

// run code to create Table: npx sequelize-cli model:generate --name User --attributes email:string,password:string,username:string
