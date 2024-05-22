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
      User.hasMany(models.Book);
      User.hasMany(models.Forum, {
        foreignKey: "userID",
      });
      User.hasMany(models.Payment, { foreignKey: "userID" });
      User.hasMany(models.ListBook);
      User.hasMany(models.Chapter, { foreignKey: "writerID" });
      User.hasMany(models.Comment);
      User.hasMany(models.Review);
      User.belongsToMany(models.Book, {
        through: "UserFollowBook",
        foreignKey: "userID",
      });
      User.belongsToMany(models.User, {
        through: "UserFollowUser",
        foreignKey: "userID",
        as: "Followers",
      });
      User.belongsToMany(models.Book, {
        through: "Review",
        foreignKey: "userID",
      });
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
      birthday: DataTypes.STRING,
      gender: DataTypes.STRING,
      bio: DataTypes.STRING,
      coin: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

// run code to create Table: npx sequelize-cli model:generate --name User --attributes email:string,password:string,username:string
