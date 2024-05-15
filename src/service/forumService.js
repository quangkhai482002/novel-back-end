import { where } from "sequelize";
import db from "../models/index";
const { Op } = require("sequelize");

// forum
const createForum = async (data) => {
  try {
    let newForum = await db.Forum.create(data);
    return {
      EC: 0,
      EM: "Create forum successfully",
      DT: [],
    };
  } catch (error) {
    console.log(error);
    return {
      EC: -1,
      EM: "Error from server",
      DT: {},
    };
  }
};

const readForum = async () => {
  try {
    let data = await db.Forum.findAll({
      include: {
        model: db.User,
        attributes: ["avatar", "username"],
      },
    });
    return {
      EC: 0,
      EM: "Get forum successfully",
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EC: -1,
      EM: "Error from server",
      DT: {},
    };
  }
};
const readForumByForumID = async (forumID) => {
  try {
    let data = await db.Forum.findOne({
      where: {
        postID: forumID,
      },
      include: {
        model: db.User,
        attributes: ["avatar", "username"],
      },
    });
    return {
      EC: 0,
      EM: "Get forum successfully",
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EC: -1,
      EM: "Error from server",
      DT: {},
    };
  }
};

module.exports = {
  createForum,
  readForum,
  readForumByForumID,
};
