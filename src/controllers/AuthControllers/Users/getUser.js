import User from "../../../models/userSchema.js";
const getUserByEmailController = async(req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        res.status(200).json(user);
   } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export default getUserByEmailController;