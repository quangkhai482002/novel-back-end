import { where } from "sequelize";
import db from "../models/index";
const { Op } = require("sequelize");

// books
const getAllBooks = async () => {
  try {
    const books = await db.Book.findAll({
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
      include: {
        model: db.Chapter,
        attributes: ["chapterID"],
      },
    });

    return {
      EC: 0,
      EM: "Successfully found the books",
      DT: books,
    };
  } catch (error) {
    console.error(error);
    return {
      EC: 1,
      EM: "Error from service",
      DT: [],
    };
  }
};
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
        "nomination",
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
const getBookByuserId = async (id) => {
  try {
    let data = await db.Book.findAll({
      where: {
        writerID: id,
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
      include: {
        model: db.Chapter,
        attributes: ["chapterID"],
      },
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
const updateBook = async (data) => {
  try {
    let book = await db.Book.update(
      {
        bookName: data.bookName,
        desciption: data.description,
        tag: data.tag,
        author: data.author,
        poster: data.poster,
      },
      {
        where: {
          bookID: data.bookID,
        },
      }
    );
    return {
      EC: 0,
      EM: "Update chapter successfully",
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
const getBooksByName = async (bookName) => {
  try {
    const data = await db.Book.findAll({
      where: {
        bookName: {
          [Op.like]: "%" + bookName + "%",
        },
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

    if (!data.length) {
      return {
        EC: 0,
        EM: "No books found with this name",
        DT: [],
      };
    }

    return {
      EC: 0,
      EM: "Successfully found the books",
      DT: data,
    };
  } catch (error) {
    console.error(error);
    return {
      EC: 1,
      EM: "Error from service",
      DT: [],
    };
  }
};
const addToBookShelf = async (data) => {
  try {
    // Create a new list book
    const newListBook = await db.ListBook.create({
      userID: data.userID,
    });

    // Add book to the list book
    await db.Book_ListBook.create({
      bookID: data.bookID,
      listID: newListBook.listID,
    });

    return {
      EC: 0,
      EM: "Add book to list book successfully",
      DT: [],
    };
  } catch (error) {
    console.error(error);
    return {
      EC: 1,
      EM: "Error from service",
      DT: [],
    };
  }
};
const getBookShelf = async (userID) => {
  try {
    const listBooks = await db.ListBook.findAll({
      where: {
        userID: userID,
      },
      attributes: ["listID"],
      include: {
        model: db.Book,
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
      },
    });

    return {
      EC: 0,
      EM: "Get list book successfully",
      DT: listBooks,
    };
  } catch (error) {
    console.error(error);
    return {
      EC: 1,
      EM: "Error from service",
      DT: [],
    };
  }
};
// chapters

const getChapter = async (bookID) => {
  try {
    let data = await db.Chapter.findAll({
      where: {
        bookID: bookID,
        type: "publish",
      },
      attributes: [
        "chapterID",
        "bookID",
        "writerID",
        "chapterName",
        "orderNumber",
        "content",
        "audio",
        "view",
        "createdAt",
        "updatedAt",
      ],
    });
    return {
      EM: "Get chapter success",
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
const getChapterById = async (bookID, orderNumber) => {
  try {
    let data = await db.Chapter.findOne({
      where: {
        // chapterID: id,
        bookID: bookID,
        orderNumber: orderNumber,
      },
      attributes: [
        "chapterID",
        "bookID",
        "writerID",
        "chapterName",
        "orderNumber",
        "content",
        "audio",
        "view",
        "createdAt",
        "updatedAt",
      ],
      include: {
        model: db.Book,
        attributes: ["bookName", "view"],
      },
    });
    if (data) {
      // Increment view in Chapter
      await data.increment("view", { by: 1 });
      await data.reload();
      // Increment view in Book
      await db.Book.increment("view", {
        by: 1,
        where: { bookID: data.bookID },
      });
    }
    return {
      EM: "Get chapter success",
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
const getChapterDraft = async (bookID) => {
  try {
    let data = await db.Chapter.findAll({
      where: {
        bookID: bookID,
        type: "draft",
      },
      attributes: [
        "chapterID",
        "bookID",
        "writerID",
        "chapterName",
        "orderNumber",
        "content",
        "audio",
        "view",
        "createdAt",
        "updatedAt",
      ],
    });
    return {
      EM: "Get chapter success",
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
const updatepublishChapter = async (chapterID) => {
  try {
    let chapter = await db.Chapter.update(
      { type: "publish" },
      {
        where: {
          chapterID: chapterID,
        },
      }
    );
    // console.log(chapter);
    return {
      EC: 0,
      EM: "Update chapter successfully",
      DT: [],
    };
  } catch (error) {
    // console.log(error);
    return {
      EC: 1,
      EM: "error from service",
      DT: [],
    };
  }
};
const createChapter = async (data) => {
  try {
    let newChapter = await db.Chapter.create({ ...data, type: "draft" });
    return {
      EC: 0,
      EM: "Create chapter successfully",
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
const updateChapter = async (data) => {
  try {
    let chapter = await db.Chapter.update(
      {
        orderNumber: data.orderNumber,
        chapterName: data.chapterName,
        content: data.content,
      },
      {
        where: {
          chapterID: data.chapterID,
        },
      }
    );
    return {
      EC: 0,
      EM: "Update chapter successfully",
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
const deleteChapter = async (chapterID) => {
  try {
    let chapter = await db.Chapter.destroy({
      where: {
        chapterID: chapterID,
      },
    });
    console.log(chapter);
    return {
      EC: 0,
      EM: "Delete chapter successfully",
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
  getBookByuserId,
  createImage,
  getChapter,
  getChapterById,
  createChapter,
  updateChapter,
  getChapterDraft,
  updatepublishChapter,
  updateBook,
  deleteChapter,
  getBooksByName,
  getAllBooks,
  addToBookShelf,
  getBookShelf,
};
