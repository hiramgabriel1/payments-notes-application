import mongoose from "mongoose";

const db = process.env.URI

const connection = async () => {
    try {
        await mongoose.connect(db)
    } catch (error) {
        console.error(error)
    }
}

export default connection