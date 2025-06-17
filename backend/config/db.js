import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://cockygeek:903919jS!@cluster0.qbuob8a.mongodb.net/food-del').then(() => console.log("DB Connected!"))
}