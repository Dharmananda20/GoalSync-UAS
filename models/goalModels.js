import mongoose from "mongoose";

const memberSchema = new mongoose.schema({
    userId: mongoose.schema.Types.ObjectId,
    name: String,
    role : {
        type: String,
        default: "member"
    }
});
const actionSchema = new mongoose.schema({
    userId: mongoose.schema.Types.ObjectId,
    delta:Number,
    note: String,
    createdAt : {
        type: Date,
        default: Date.now
    }
});
const goalSchema = new mongoose.schema({
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

