import { where } from "sequelize";
import db from "../models/index";
const { Op } = require("sequelize");

const createPayment = async (data) => {
  try {
    let newPayment = await db.Payment.create({
      userID: data.userID,
      serviceName: data.serviceName,
      amount: data.amount,
      time: data.time,
      codePayment: data.codePayment,
      status: data.status,
    });
    if (newPayment) {
      if (data.serviceName === "premium") {
        let user = await db.User.update(
          {
            typeOfAccount: "premium",
          },
          {
            where: {
              userID: data.userID,
            },
          }
        );
      } else {
        let incrementValue;

        if (data.amount === 10000) {
          incrementValue = 99;
        } else if (data.amount === 20000) {
          incrementValue = 300;
        } else if (data.amount === 60000) {
          incrementValue = 980;
        } else if (data.amount === 100000) {
          incrementValue = 1990;
        } else if (data.amount === 150000) {
          incrementValue = 1990;
        } else {
          // Default increment value or throw an error
          incrementValue = 0;
        }
        let user = await db.User.increment("coin", {
          by: incrementValue,
          where: {
            userID: data.userID,
          },
        });
      }
    }
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
const getPayment = async () => {
  try {
    let data = await db.Payment.findAll({
      //   attributes: [

      //   ],
      include: [
        {
          model: db.User,
          attributes: ["username", "avatar", "email"],
        },
      ],
    });
    return {
      EC: 0,
      EM: "Get payment successfully",
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EC: -1,
      EM: "Error from server",
      DT: [],
    };
  }
};

module.exports = {
  createPayment,
  getPayment,
};
