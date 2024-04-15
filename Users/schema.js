import mongoose from "mongoose";

// change dob from Date to String type. becasue the database stored as String, so it can read successfully
const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        firstName: String,
        email: String,
        lastName: String,
        dob: String,
        role: {
            type: String,
            enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
            default: "USER",
        },
    },
    { collection: "users" });
export default userSchema;