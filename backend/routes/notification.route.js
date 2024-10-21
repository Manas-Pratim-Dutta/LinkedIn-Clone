import express from"express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { deleteNotification, getUserNotifications, markNotificationRead } from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUserNotifications);
router.put("/:id/read", protectRoute, markNotificationRead);
router.delete("/:id", protectRoute, deleteNotification);

export default router;