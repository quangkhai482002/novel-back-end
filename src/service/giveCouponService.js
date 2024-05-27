import { where } from "sequelize";
import db from "../models/index";
const { Op } = require("sequelize");

const createGiveCoupon = async (data) => {
  try {
    let newGiveCoupon = await db.UsergiveCoupon.create({
      userID: data.userID,
      bookID: data.bookID,
      countOfCoupon: data.gift,
    });
    if (newGiveCoupon) {
      let user = await db.User.increment("coin", {
        by: -data.gift,
        where: {
          userID: data.userID,
        },
      });
      // Find the book with the given bookID
      let book = await db.Book.findOne({
        where: {
          bookID: data.bookID,
        },
      });

      // If the book exists, increment the coin of the writer
      if (book) {
        await db.User.increment("coin", {
          by: data.gift,
          where: {
            userID: book.writerID,
          },
        });
      }
    }
    return {
      EC: 0,
      EM: "Create coupon successfully",
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
export default {
  createGiveCoupon,
};
