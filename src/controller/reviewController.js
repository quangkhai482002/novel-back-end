import reviewService from "../service/reviewService.js";

// ====== review ======
const readReviewByBookIDFunc = async (req, res) => {
  try {
    let bookID = req.params.bookID;
    let data = await reviewService.getReviewByBookId(bookID);
    return res.status(200).json({
      EC: data.EC,
      EM: data.EM,
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
const createReviewFunc = async (req, res) => {
  try {
    let data = await reviewService.createReview(req.body);
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

// ====== comment ======
const getCommentByChapterIdFunc = async (req, res) => {
  try {
    let reviewID = req.params.reviewID;
    let data = await reviewService.getCommentByChapterId(reviewID);
    return res.status(200).json({
      EC: data.EC,
      EM: data.EM,
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
const createCommentFunc = async (req, res) => {
  try {
    let data = await reviewService.createComment(req.body);
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

export default {
  readReviewByBookIDFunc,
  createReviewFunc,
  createCommentFunc,
  getCommentByChapterIdFunc,
};
