import { or, where } from "sequelize";
import db from "../models/index";

// ====== review ======
const getReviewByBookId = async (bookID) => {
  try {
    let data = await db.Review.findAll({
      where: { bookID: bookID },
      attributes: ["bookID", "userID", "content", "ratting", "createdAt"],
      include: [
        {
          model: db.User,
          attributes: ["username", "avatar"],
        },
      ],
    });
    return {
      EC: 0,
      EM: "Get review success",
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EC: 1,
      EM: "Error from service",
      DT: [],
    };
  }
};
const createReview = async (data) => {
  try {
    let newReview = db.Review.create(data);
    return {
      EC: 0,
      EM: "Create review success",
      DT: [],
    };
  } catch (error) {
    console.log(error);
    return {
      EC: 1,
      EM: "Error from service",
      DT: [],
    };
  }
};

// ====== comment ======
const getCommentByChapterId = async (chapterID) => {
  try {
    let data = await db.Comment.findAll({
      where: { chapterID: chapterID },
      attributes: ["userID", "content", "createdAt"],
      include: [
        {
          model: db.User,
          attributes: ["username", "avatar"],
        },
      ],
    });
    return {
      EC: 0,
      EM: "Get comment success",
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EC: 1,
      EM: "Error from service",
      DT: [],
    };
  }
};
const createComment = async (data) => {
  try {
    let newComment = db.Comment.create(data);
    return {
      EC: 0,
      EM: "Create comment success",
      DT: [],
    };
  } catch (error) {
    console.log(error);
    return {
      EC: 1,
      EM: "Error from service",
      DT: [],
    };
  }
};

module.exports = {
  getReviewByBookId,
  createReview,
  createComment,
  getCommentByChapterId,
};
