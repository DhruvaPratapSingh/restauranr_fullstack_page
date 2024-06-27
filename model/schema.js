import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minLength: [3, "First name must contain at least 3 characters"],
        maxLength: [25, "First name cannot exceed 25 characters"],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minLength: [3, "Last name must contain at least 3 characters"],
        maxLength: [25, "Last name cannot exceed 25 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Invalid email format"]
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
    },
    time: {
        type: String, // Consider using Date if appropriate
    },
    date: {
        type: String, // Consider using Date if appropriate
    }
});

export const Reservation = mongoose.model("Reservation", schema);
