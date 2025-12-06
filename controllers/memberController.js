import Goal from "../models/goalModels.js";
import mongoose from "mongoose";

export const addMember = async (req, res) => {
    try {
        const { id } = req.params;
        const {userId, name, role} = req.body;

        const goal = await Goal.findOne({
            _id: id,
            createdBy: req.user?.user_id
        });

        if(!goal)
            return res.status(404).json({ message: "Goal Tidak Ditemukan"});

        goal.member.push({userId, name, role});
        await goal.save();

        res.json({ message: "Member ditambahkan", data: goal});
    } catch (err) {
        res.status (500).json({ message: "Server Error", errror: err.message});
    }
};