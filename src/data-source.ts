import { DataSource } from "typeorm";
import { DataSourceType } from "./types/config";
import { Room } from "./entities/Room";
import dotenv from 'dotenv';

dotenv.config();
if (
  !process.env.DB_NAME
  ||
  !process.env.DB_USERNAME
  ||
  !process.env.DB_PASSWORD
  ||
  !process.env.DB_DIALECT
  ||
  !process.env.DB_HOST
  ||
  !process.env.DB_PORT
) {
  throw new Error("Missing required environment variables...");
}

const type = process.env.DB_DIALECT as DataSourceType;
const database = process.env.DB_NAME;
const host = process.env.DB_HOST;
let raw_port = process.env.DB_PORT;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

let port = 0;

try {
  port = parseInt(raw_port);
} catch (error) {
  throw error;
}

export const appDataSource = new DataSource({
  type: "mysql",
  host,
  port,
  username,
  password,
  database,
  logging: true,
  synchronize: true,
  entities: [Room],
});
