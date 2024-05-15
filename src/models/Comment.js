"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, {
        foreignKey: "userID",
      });
      Comment.belongsTo(models.Chapter, {
        foreignKey: "chapterID",
      });
      Comment.belongsTo(models.Forum, {
        foreignKey: "postID",
      });
    }
  }
  Comment.init(
    {
      commentID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userID: DataTypes.INTEGER,
      chapterID: DataTypes.INTEGER,
      postID: DataTypes.INTEGER,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};

// run code to create Table: npx sequelize-cli model:generate --name Comment --attributes email:string,password:string,username:string
