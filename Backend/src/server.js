import express from "express";
import notesRoutes from './Routes/notesRoutes.js'
import { connectDB } from "./Config/db.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

/* console.log(process.env.MONGO_URI); */

connectDB();

//Middleware allowing us to parse for user inputs.
app.use(express.json());

app.use("/api/notes", notesRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server Running on Port ${process.env.PORT}.`);
});