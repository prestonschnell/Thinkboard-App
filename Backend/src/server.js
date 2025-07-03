import express from "express";
import notesRoutes from './Routes/notesRoutes.js'
import { connectDB } from "./Config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./Middleware/rateLimiter.js";

const app = express();

dotenv.config();

/* console.log(process.env.MONGO_URI); */



//Middleware allowing us to parse for user inputs.
app.use(express.json());

app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server Running on Port ${process.env.PORT}.`);
    });   
})

