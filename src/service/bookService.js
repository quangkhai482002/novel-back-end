import db from "../models/index";
const getBook = async () => {
  try {
    let data = await db.Book.findAll({
      attributes: [
        "bookID",
        "writerID",
        "bookName",
        "author",
        "writer",
        "ratting",
        "poster",
        "view",
        "desciption",
        "tag",
        "follow",
        "vote",
      ],
    });
    return {
      EM: "Get book success",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EC: 1,
      EM: "error from service",
      DT: [],
    };
  }
};
const getBookByID = async (id) => {
  try {
    let data = await db.Book.findOne({
      where: {
        bookID: id,
      },
      attributes: [
        "bookID",
        "writerID",
        "bookName",
        "author",
        "writer",
        "ratting",
        "poster",
        "view",
        "desciption",
        "tag",
        "follow",
        "vote",
      ],
    });
    return {
      EM: "Get book success",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EC: 1,
      EM: "error from service",
      DT: [],
    };
  }
};
const createBook = async (data) => {
  try {
    let newBook = await db.Book.create(data);
    console.log(newBook);
    return {
      EC: 0,
      EM: "Create book successfully",
      DT: [],
    };
  } catch (error) {
    console.log(error);
    return {
      EC: 1,
      EM: "error from service",
      DT: [],
    };
  }
};
const createImage = async (data) => {
  try {
    let newImage = await db.Book.create(data);
    console.log(newImage);
    return {
      EC: 0,
      EM: "Create image successfully",
      DT: [],
    };
  } catch (error) {
    console.log(error);
    return {
      EC: 1,
      EM: "error from service",
      DT: [],
    };
  }
};

module.exports = {
  getBook,
  getBookByID,
  createBook,
  createImage,
};
