import db from "./config/db";
import colors from "colors";
import express from "express";
import router from "./router";

async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log(colors.magenta("Connection to the database successful"));
  } catch (error) {
    // console.log(error);
    console.log(colors.red.bold("Error connecting to the database"));
  }
}
connectDB();

const server = express();

server.use(express.json());

server.use("/api/products", router);

export default server;
