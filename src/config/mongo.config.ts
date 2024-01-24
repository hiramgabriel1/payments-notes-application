import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const db = process.env.URI

const connection = async () => {
    try {
        await mongoose.connect(db)
    } catch (error) {
        console.error(error)
    }
}

// ! brogrammer theme
// ! fuente de letra: radeon semibold

export default connection