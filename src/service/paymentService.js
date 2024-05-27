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
        let user = await db.User.increment("coin", {
          by: data.amount,
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
