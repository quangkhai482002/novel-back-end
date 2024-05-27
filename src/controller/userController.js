import userAPIService from "../service/userAPIService";
import userService from "../service/userService";

const readUserFunc = async (req, res) => {
  try {
    let data = await userService.getUserList();
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EC: -1,
      EM: "Error from server",
      DT: "",
    });
  }
};

const createFunc = async (req, res) => {
  try {
    //validate
    let data = await userAPIService.createNewUser(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    return res.status(500).json({
      EC: -1,
      EM: "Error from server",
      DT: "",
    });
  }
};
const getInforUserbyIDFunc = async (req, res) => {
  let userID = req.params.id;
  try {
    let data = await userService.getInforByUserID(userID);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    return res.status(500).json({
      EC: -1,
      EM: "Error from server",
      DT: "",
    });
  }
};
const updateUserFunc = async (req, res) => {
  try {
    let data = await userService.updateUser(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EC: -1,
      EM: "Error from server",
      DT: "",
    });
  }
};

const deleteFunc = async (req, res) => {
  try {
    let data = await userAPIService.deleteUser(req.body.id);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    return res.status(500).json({
      EC: -1,
      EM: "Error from server",
      DT: "",
    });
  }
};
const getUserAccount = async (req, res) => {
  return res.status(200).json({
    EM: "Get user account successfully",
    EC: 0,
    DT: {
      access_token: req.token,
      role: req.user.role,
      email: req.user.email,
      username: req.user.username,
      userID: req.user.userID,
      avatar: req.user.avatar,
      coin: req.user.coin,
      typeOfAccount: req.user.typeOfAccount,
    },
  });
};
module.exports = {
  readUserFunc,
  createFunc,
  updateUserFunc,
  deleteFunc,
  getUserAccount,
  getInforUserbyIDFunc,
};
