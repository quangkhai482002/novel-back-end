import { where } from "sequelize";
import db from "../models/index";
const { Op } = require("sequelize");

// books
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
const getChapterById = async (id) => {
  try {
    let data = await db.Chapter.findOne({
      where: {
        chapterID: id,
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
        attributes: ["bookName"],
      },
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
    console.log(chapter);
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
};
