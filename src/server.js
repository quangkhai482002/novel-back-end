require("dotenv").config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initApiRoutes from "./routes/api";
import configCors from "./config/cors";
import bodyParser from "body-parser";
import connection from "./config/connectDB";
import cookieParser from "cookie-parser";

const cloudinary = require("./config/cloundinary");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "images",
  allowedFormats: ["jpg", "png", "jpeg"],
  transformation: [{ width: 500, height: 500, crop: "limit" }],
});
const upload = multer({ storage: storage });

const app = express();
const PORT = process.env.PORT || 4000;

//config cors
configCors(app);

//config view engine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config cookie-parser
app.use(cookieParser());

//test connect to db
connection();

//init api routes
initApiRoutes(app);
// app.post(
//   "/upload",
//   upload.fields([{ name: "img", maxCount: 1 }]),
//   (req, res) => {
//     const linkImg = req.files["img"][0];
//     return res.send(linkImg);
//   }
// );

app.use((req, res) => {
  res.send("404 not found");
});

app.listen(PORT, () => {
  console.log("BE running on port = " + PORT);
});
