import User from "../../models/userSchema.js";
import hashPassword from "../../utils/secure/password.js";
const createUser = async(user) => {
    try {
        user.password = hashPassword(user.password);
        const newUser = new User(user);
        await newUser.save();
        console.log(newUser)
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

export default createUser;