import { or, where } from "sequelize";
import db from "../models/index";

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

module.exports = {
  getReviewByBookId,
  createReview,
};
