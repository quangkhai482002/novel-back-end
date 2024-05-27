import bookService from "../service/bookService";

// ========        books
const getAllBookFunc = async (req, res) => {
  try {
    let data = await bookService.getAllBooks();
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
    // console.log("linkImg", linkImg);
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
const readByUserId = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await bookService.getBookByuserId(id);
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
const updateBookFunc = async (req, res) => {
  try {
    let data = await bookService.updateBook(req.body);
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
const addToBookshelfFunc = async (req, res) => {
  try {
    let data = await bookService.addToBookShelf(req.body);
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
const getBookShelfFunc = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await bookService.getBookShelf(id);
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
const voteBookFunc = async (req, res) => {
  try {
    // let data = await bookService.voteBook(req.body);
    let data = await bookService.voteBook(req.params.bookID);
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
    // let id = req.params.id;
    let bookID = req.params.bookID;
    let orderNumber = req.params.orderNumber;
    let data = await bookService.getChapterById(bookID, orderNumber);
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
const getChapterDraftFunc = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await bookService.getChapterDraft(id);
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
const updatePublishChapterFunc = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await bookService.updatepublishChapter(id);
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
    console.log(req.body);
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
const deleteChapterFunc = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await bookService.deleteChapter(id);
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
const getBookByNameFunc = async (req, res) => {
  try {
    let name = req.params.name;
    let data = await bookService.getBooksByName(name);
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
  readByUserId,
  getChapterFunc,
  readChapterFunc,
  createChapterFunc,
  updateChapterFunc,
  getChapterDraftFunc,
  updatePublishChapterFunc,
  updateBookFunc,
  deleteChapterFunc,
  getBookByNameFunc,
  getAllBookFunc,
  addToBookshelfFunc,
  getBookShelfFunc,
  voteBookFunc,
};
