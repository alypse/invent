import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    }, {
        timestamps: true
    });


export const Item = mongoose.model('Item', itemSchema);