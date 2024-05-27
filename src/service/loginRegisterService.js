import db from "../models/index.js";
import bcrypt from "bcryptjs";
import { op } from "sequelize";
import { getGroupWithRole } from "./JWTService";
import { createJWT } from "../middleware/JWTAtion";
require("dotenv").config();

const salt = bcrypt.genSaltSync(10);
const hashPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const checkEmail = async (usereEmail) => {
  let isExist = await db.User.findOne({
    where: { email: usereEmail },
  });
  if (isExist) {
    return true;
  }
  return false;
};

const registerNewUser = async (rawuserData) => {
  try {
    //check email/username is already exist
    let isEmailExist = await checkEmail(rawuserData.email);
    if (isEmailExist === true) {
      return {
        EM: "Email is already exist",
        EC: 1,
      };
    }

    //hash password
    let hashPass = hashPassword(rawuserData.password);

    //create new user
    await db.User.create({
      fullname: rawuserData.email.split("@")[0],
      email: rawuserData.email,
      username: rawuserData.email.split("@")[0],
      password: hashPass,
      role: "USER",
      typeOfAccount: "free",
      follow: 0,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FAhwhYIjaPus1tva6Pb8Upi4KBwRothf0vP_7-jRz4VNPgVmRHqWstkDyc3ATGRwPyo&usqp=CAU",
      birthday: "",
      gender: "",
      bio: "",
      coin: 0,
    });
    return { EM: "Register successfully", EC: 0 };
  } catch (error) {
    console.log(error);
    return { EM: "Something went wrong", EC: -1 };
  }
};

const checkPassword = async (inputPassword, hashPassword) => {
  return bcrypt.compareSync(inputPassword, hashPassword);
};
const handleUserLogin = async (rawuserData) => {
  try {
    let user = await db.User.findOne({
      where: { email: rawuserData.email },
    });
    if (user) {
      let isCorrectPassword = await checkPassword(
        rawuserData.password,
        user.password
      );

      //=============== create token ==============
      let payload = {
        email: user.email,
        username: user.username,
        role: user.role,
        userID: user.userID,
        avatar: user.avatar,
        coin: user.coin,
        typeOfAccount: user.typeOfAccount,
      };
      let token = createJWT(payload);
      //===========================================
      if (isCorrectPassword === true) {
        return {
          EM: "Login successfully",
          EC: 0,
          DT: {
            access_token: token,
            email: user.email,
            username: user.username,
            role: user.role,
            userID: user.userID,
            avatar: user.avatar,
            coin: user.coin,
            typeOfAccount: user.typeOfAccount,
          },
        };
      }
    }
    console.log(
      "user not found:",
      rawuserData.email,
      "checkPassword:",
      rawuserData.password
    );
    return {
      EM: "Thông tin đăng nhập không chính xác",
      EC: 1,
      DT: "",
    };
  } catch (error) {
    console.log(error);
    return { EM: "Something went wrong", EC: -1 };
  }
};
module.exports = { registerNewUser, handleUserLogin, hashPassword, checkEmail };
