"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Forum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Forum.belongsTo(models.User, {
        foreignKey: "userID",
      });
      Forum.hasMany(models.Comment, {
        foreignKey: "postID",
      });
    }
  }
  Forum.init(
    {
      postID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userID: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      tag: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Forum",
    }
  );
  return Forum;
};
