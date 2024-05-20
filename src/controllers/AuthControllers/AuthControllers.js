import createUser from "../../services/AuthServices/createUser.js";
import loginUser from "../../services/AuthServices/loginUsers.js";
export const signin = async(req, res) => {
    try {
        const sucessLogin = await loginUser(req.body);
        res.status(200).json({ login: true, token: sucessLogin.token, user: sucessLogin.user});
    } catch (error) {
        res.status(400).json({ login: false, message: error.message});
    }

}


export const signup = async(req, res) => {
    try {
        let newUser = await createUser(req.body);
        res.send(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
}