import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { createComment, createPost, deletePost, getFeedPosts, getPostById } from "../controllers/post.controller.js";

const router = express.Router();


router.get("/", protectRoute, getFeedPosts);
router.post("/create", protectRoute, createPost);
router.delete("/delete:id", protectRoute, deletePost);
router.get("/:id", protectRoute, getPostById);
router.get("/:id/comment", protectRoute, createComment);


export default router;
