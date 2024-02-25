import mongoose, { Schema } from "mongoose"

const LinkSchema = new Schema({
    originalLink: {
        type: String,
        required: true,
    },

    shorterLink: {
        type: String,
        default: "",
    },

    createdDate: {
        type: Date,
    },

    clicks: {
        type: Number,
    },
})

export const LinkModel = mongoose.model("LinkModel", LinkSchema, "links")
