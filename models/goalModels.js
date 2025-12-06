import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    name: String,
    role : {
        type: String,
        default: "member"
    }
});
const actionSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    delta:Number,
    note: String,
    createdAt : {
        type: Date,
        default: Date.now
    }
});
const goalSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    description: String,
    targetValue: Number,
    currentValue: {
        type: Number, default: 0
    },
    members: [memberSchema],
    action: [actionSchema],
    createdBy: mongoose.Schema.Types.ObjectId
},{

});

export default mongoose.model("Goal", goalSchema);

