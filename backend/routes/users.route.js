import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getSuggestedConnection } from "../controllers/user.controller.js";


const router = express.Router();

router.get("/suggestions", protectRoute, getSuggestedConnection)

export default router;