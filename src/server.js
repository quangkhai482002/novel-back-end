require("dotenv").config();
import express from "express";
import initApiRoutes from "./routes/api";
import configCors from "./config/cors";
import bodyParser from "body-parser";
import connection from "./config/connectDB";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 4000;

//config cors
configCors(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config cookie-parser
app.use(cookieParser());

//test connect to db
connection();

//init api routes
initApiRoutes(app);

app.use((req, res) => {
  res.send("404 not found");
});

app.listen(PORT, () => {
  console.log("BE running on port = " + PORT);
});
