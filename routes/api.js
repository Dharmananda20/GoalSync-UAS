import express from "express";

import * as goalController from "../controllers/goalController.js"
import * as memberController from "../controllers/memberController.js"
import * as progressController from "../controllers/goalController.js"
import * as userController from "../controllers/userController.js"
// import { authenticateTokenMiddleware } from "../Middleware/authMiddleware.js"

const api = express.Router();
api.get("/goals", goalController.listGoals);
api.post("/goals",  goalController.addGoal);
api.put("/goals/:id", goalController.updateGoal);
api.delete("/goals/:id",goalController.deleteGoal);
//api.get("/goals/:id", goalController.getProfile);
//api.post("/goals/:id/members",memberController.AddMember);
//api.post("/goals/:id/progress",progressController.UpdateProgress);
api.post("/signin", userController.signIn);
api.post("/signup", userController.signUp);

export default api;
