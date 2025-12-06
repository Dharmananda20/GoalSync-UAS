import express from "express";

import * as goalController from "../controllers/goalController.js;"
import * as memberController from "../controllers/memberController.js;"
import * as progressController from "../controllers/goalController.js;"
import * as userController from "../controllers/usersController.js"
import { authenticateTokenMiddleware } from "../Middleware/authMiddleware.js"

const api = express.Router();
api.get("/goals", authenticateTokenMiddleware, goalController.listGoals);
api.post("/goals", authenticateTokenMiddleware ,goalController.addGoal);
api.put("/goals/:id", authenticateTokenMiddleware,goalController.updateGoal);
api.delete("/goals/:id",authenticateTokenMiddleware,goalController.deleteGoal);
api.get("/goals/:id", authenticateTokenMiddleware,goalController.getProfile);
api.post("/goals/:id/members",authenticateTokenMiddleware,memberController.AddMember);
api.post("/goals/:id/progress",authenticateTokenMiddleware,progressController.UpdateProgress);
api.post("/signin", userController.signIn);
api.post("/signup", userController.signUp);

export default api;
