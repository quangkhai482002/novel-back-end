import forumService from "../service/forumService.js";

const createForumFunc = async (req, res) => {
  try {
    let data = await forumService.createForum(req.body);
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
const readForumFunc = async (req, res) => {
  try {
    let data = await forumService.readForum();
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
const readForumByForumIDFunc = async (req, res) => {
  try {
    let data = await forumService.readForumByForumID(req.params.forumID);
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
const updateForumFunc = async (req, res) => {
  try {
    let data = await forumService.updateForum(req.body);
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
const deleteForumFunc = async (req, res) => {
  try {
    let data = await forumService.deleteForum(req.body);
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
module.exports = {
  createForumFunc,
  readForumFunc,
  readForumByForumIDFunc,
  updateForumFunc,
  deleteForumFunc,
};
