import database from "../config/database.js";
import Goal from "../models/goalModels.js";
import mongoose from "mongoose";

export const updateProgress = async (req, res) => {
    try {
        const {id} = req.params;
        const {delta, userId, note} = req.body;

        const goal = await Goal.findOne({
            _id: id,
            createdBy: req.user?.user_id

        });

        if(!goal)
            return res.status(404).json({message: " Goal Tidak Ditemukan"});

        goal.currentValue += delta;
        goal.actions.push({delta, userId, note});

        await goal.save();

        res.json({
            message: "Progress Berhasil Diupdate",
            data: goal
        });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message});
    }
};