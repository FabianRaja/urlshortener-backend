import mongoose from "mongoose"
export default function dbConnect(){
    try {
        mongoose.connect(process.env.connectionString);
        console.log("Database connnected")
    } catch (error) {
        console.log("Error connecting database")
    }
}