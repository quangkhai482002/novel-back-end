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
        "description",
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
        "description",
        "tag",
        "follow",
        "vote",
        "reward",
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
        "description",
        "tag",
        "follow",
        "vote",
        "status",
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
const createBook = async (data) => {
  try {
    let newBook = await db.Book.create({
      ...data,
      ratting: 0,
      view: 0,
      follow: 0,
      vote: 0,
      reward: 0,
      writer: "",
      approve: "pending",
    });
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
        "description",
        "tag",
        "follow",
        "vote",
        "status",
        "reward",
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
        description: data.description,
        tag: data.tag,
        author: data.author,
        poster: data.poster,
        status: data.status,
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
        "description",
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
    // Find the existing list book of the user
    let listBook = await db.ListBook.findOne({
      where: {
        userID: data.userID,
      },
    });

    // If the user does not have a list book, create one
    if (!listBook) {
      listBook = await db.ListBook.create({
        userID: data.userID,
      });
    }
    // Check if the book is already in the list book
    const existingBook = await db.Book_ListBook.findOne({
      where: {
        bookID: data.bookID,
        listID: listBook.listID,
      },
    });

    if (existingBook) {
      return {
        EC: 1,
        EM: "Truyện đã có trong kệ sách của bạn",
        DT: [],
      };
    }

    // Add book to the list book
    await db.Book_ListBook.create({
      bookID: data.bookID,
      listID: listBook.listID,
    });

    return {
      EC: 0,
      EM: "Thêm vào kệ sách thành công",
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
    const listBook = await db.ListBook.findOne({
      where: {
        userID: userID,
      },
      include: [
        {
          model: db.Book,
          through: db.Book_ListBook,
          as: "Books",
        },
      ],
    });

    if (!listBook) {
      return {
        EC: 1,
        EM: "User does not have a list book",
        DT: [],
      };
    }

    return {
      EC: 0,
      EM: "Get list book successfully",
      DT: listBook.Books,
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
const voteBook = async (bookID) => {
  try {
    let book = await db.Book.increment("vote", {
      by: 1,
      where: {
        bookID: bookID,
      },
    });
    return {
      EC: 0,
      EM: "Vote book successfully",
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
      order: [["orderNumber", "ASC"]],
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
  voteBook,
};
