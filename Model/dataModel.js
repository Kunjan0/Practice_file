import mongoose from "mongoose";


const dataSchema = mongoose.Schema({
    nme: String,
    title: String,
    description: String,
    price: Number,
    category: String,
     image: String
})

export const mainData = mongoose.model('datas', dataSchema);
