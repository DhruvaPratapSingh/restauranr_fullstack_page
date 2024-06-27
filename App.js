import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import dbconnection from "./database/dbconnection.js";
import  { errorMiddleware } from "./error/error.js";
import reser from "./routes/reser.js";
const App=express();
dotenv.config({path:"./config/.env"});
App.use(cors({
    origin:[process.env.FRONTEND_URL],
    method:["POST"],
    credentials:true,
})
);
App.use(express.json());
App.use(express.urlencoded({extended:true}));

App.use("/api/v1/reservation",reser)
dbconnection();

App.use(errorMiddleware);
export default App;