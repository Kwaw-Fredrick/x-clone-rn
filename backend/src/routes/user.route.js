import express from "express";
import { followUser, getCurrentUser, getUserProfile, syncUser, updateRoute } from "../controllers/user.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();
//publuc route
router.get("/profile/:username", getUserProfile);

//protected routes
router.post("/sync", protectRoute, syncUser);
router.post("/me", protectRoute, getCurrentUser)
router.put("/profile", protectRoute, updateRoute);
router.post("/follow/:targetUserId", protectRoute, followUser)
export default router;