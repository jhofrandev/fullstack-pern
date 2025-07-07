import dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";

dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL!, {
  models: [__dirname + "/../models/**/*.ts"],
  logging: false,
});

export default db;
