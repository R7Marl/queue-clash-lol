import User from "../../models/userSchema.js";
const findUser = async(user) => {
    try {
        const UserDB = await User.findOne({ email: user });
        return UserDB;
    } catch (error) {
        throw error;
    }
}

export default findUser;