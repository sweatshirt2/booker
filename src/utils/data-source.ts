import { DataSource } from "typeorm";
import { DataSourceType } from "../types/config";
import { Feature, Image, Room } from "../entities/Room";
import dotenv from 'dotenv';
import { Company, Location } from "../entities/Company";
import { User } from "../entities/User";
import { Receipt, Reservation } from '../entities/Reservation';

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

const appDataSource = new DataSource({
  type: "mysql",
  // Todo -> configure the dialect to load from the .env
  host,
  port,
  username,
  password,
  database,
  logging: true,
  synchronize: true,
  entities: [
    Company,
    Room,
    User,
    Reservation,
    Receipt,
    Image,
    Feature,
    Location,
  ],
});

appDataSource.initialize();

export { appDataSource };
