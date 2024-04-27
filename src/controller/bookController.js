import bookService from "../service/bookService";

// ========        books
const readFunc = async (req, res) => {
  try {
    let data = await bookService.getBook();
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
const readByIDFunc = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await bookService.getBookByID(id);
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
    let data = await bookService.createBook(req.body);
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
const createImageFunc = async (req, res) => {
  try {
    const linkImg = req.files["poster"][0];
    let data = await bookService.createImage(linkImg.path);
    // console.log(data);
    console.log("linkImg", linkImg);
    // return res.send(linkImg);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: linkImg,
    });
  } catch (error) {
    return res.status(500).json({
      EC: -1,
      EM: "Error from server",
      DT: "",
    });
  }
};

// ========        chapters
const getChapterFunc = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await bookService.getChapter(id);
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
const readChapterFunc = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await bookService.getChapterById(id);
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
const createChapterFunc = async (req, res) => {
  try {
    let data = await bookService.createChapter(req.body);
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
const updateChapterFunc = async (req, res) => {
  try {
    let data = await bookService.updateChapter(req.body);
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
  readFunc,
  readByIDFunc,
  createFunc,
  createImageFunc,
  getChapterFunc,
  readChapterFunc,
  createChapterFunc,
  updateChapterFunc,
};
