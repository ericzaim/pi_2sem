import { DataSource } from "typeorm";
import { User } from "./entities/User";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
type: "postgres",
host: process.env.HOST_BD,
port: Number(process.env.PORT_BD),
username: process.env.USER_BD,
password: String(process.env.PASSWORD_BD),
database: process.env.DATABASE_BD,
synchronize: true,
logging: true,
entities: [User],
subscribers: [],
migrations: [],
})

try {
    AppDataSource.initialize()
    console.log("API connected to database sucessfully")
} catch (error) {
    console.log(error)
}