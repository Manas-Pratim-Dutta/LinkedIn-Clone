import User from "../models/user.model.js";

export const getSuggestedConnection = async(req,res) =>{
    try {
        const currentUser = await User.findById(req.user._id).select("connections");

        // find users who are not already connected and also do not recommend our own profile.
    } catch (error) {
        
    }
}