import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/users.route.js"
import postRoutes from "./routes/post.route.js"
import { connectDB } from "./database/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json()); // parse JSON request bodies.
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/users", userRoutes)
app.use("/api/v1/posts", postRoutes)


app.listen(PORT, () => {
    console.log(`Server listen's at ${PORT}`);
    connectDB();

})


