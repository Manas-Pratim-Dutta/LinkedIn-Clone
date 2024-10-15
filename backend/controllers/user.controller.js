import User from "../models/user.model.js";

export const getSuggestedConnection = async (req, res) => {
    try {
        const currentUser = await User.findById(req.user._id).select("connections");

        // find users who are not already connected and also do not recommend our own profile.
        const suggestedUser = await User.find({
            _id: {
                $ne: req.user._id,
                $nim: currentUser.connections
            }
        })
            .select("name username profilePicture headline")
            .limit(4);


        res.json(suggestedUser);
    } catch (error) {
        console.error("Error in getSuggestedConnections controller:", error);
        res.status(500).json({ message: "Server error" });
    }
}

export const getPublicProfile = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username }).select("-password")

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error in getPublicProfile controller:", error);
        res.status(500).json({ message: "Server error" });
    }
}

export const updateProfile = async (req, res) => {
    try {
        const allowedFields = [
            "name",
            "username",
            "headline",
            "about",
            "location",
            "profilePicture",
            "bannerImg",
            "skills",
            "experience",
            "education",
        ];

        const updatedData = {};

        for(const field of allowedFields){
            if(req.body[field]){
                updatedData[field] = req.body[field];
            }
        }
    } catch (error) {

    }
}