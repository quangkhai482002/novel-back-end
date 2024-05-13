import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import bluebird from "bluebird";
import db from "../models/index.js";

// create the connection, specify bluebird as Promise

const salt = bcrypt.genSaltSync(10);
const hashPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createNewUser = async (email, password, username) => {
  let hashPass = hashPassword(password);
  try {
    await db.User.create({
      email: email,
      password: hashPass,
      username: username,
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserList = async () => {
  try {
    let users = await db.User.findAll({
      attributes: ["userID", "email", "username", "avatar", "role", "gender"], // chỉ lấy những trường này
      // raw: true,
      // nest: true, // dùng để lấy dữ liệu của các bảng liên kết thành 1 object
    });
    return {
      EC: 0,
      EM: "Get user list successfully",
      DT: users,
    };
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (userId) => {
  try {
    await db.User.destroy({
      where: {
        id: userId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (id) => {
  try {
    let user = {};
    user = await db.User.findOne({
      where: {
        id: id,
      },
    });
    // return user;

    // Để trả về dữ liệu thuần khi dùng sequelize
    return user.get({ plain: true });
  } catch (error) {
    console.log(error);
  }
};
const getInforByUserID = async (userID) => {
  try {
    let user = await db.User.findOne({
      where: {
        userID: userID,
      },
    });
    return {
      EC: 0,
      EM: "Get user successfully",
      DT: user,
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
const updateUser = async (data) => {
  try {
    let user = await db.User.update(
      {
        username: data.username,
        email: data.email,
        avatar: data.avatar,
        // birthday: data.birthday,
        // gender:  data.gender,
        // bio: data.bio,
      },
      {
        where: {
          userID: data.userID,
        },
      }
    );
    return {
      EC: 0,
      EM: "Update user successfully",
      DT: [],
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
  createNewUser,
  getUserList,
  deleteUser,
  getUserById,
  updateUser,
  getInforByUserID,
};
