import express from "express";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
import { getNotifications, updateNotification } from "../controllers/notification.controller";
const notificationRoute = express.Router();

notificationRoute.get(
  "/get-all-notifications",
  isAutheticated,
  authorizeRoles("instructor"),
  getNotifications
);
notificationRoute.put("/update-notification/:id", isAutheticated, authorizeRoles("instructor"), updateNotification);

export default notificationRoute;
