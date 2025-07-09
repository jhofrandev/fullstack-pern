import colors from "colors";
import db from "./config/db";
import express from "express";
import router from "./router";
import swaggerUi from "swagger-ui-express";
import swaggerSpec, { swaggerUiOptions } from "./config/swagger";

export async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    // console.log(colors.magenta("Connection to the database successful"));
  } catch (error) {
    // console.log(error);
    console.log(colors.red.bold("Error connecting to the database"));
  }
}
connectDB();

const server = express();

server.use(express.json());

server.use("/api/products", router);

// Docs
server.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, swaggerUiOptions)
);

export default server;
