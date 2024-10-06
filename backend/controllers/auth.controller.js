import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const signup = async (req,res) => {
    try {
        const { name, username, email, password } = req.body;
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: "Username already exists" });
        }

        if (password < 6){
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }
    } catch (error) {
        
    }
}

export const login = (req,res) => {
    res.send("login")
}

export const logout = (req,res) => {
    res.send("logout");
}

