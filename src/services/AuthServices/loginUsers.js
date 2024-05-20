import findUser from "./findUsers.js";
import comparePassword from "../../utils/secure/comparePassword.js";
import generateToken from "../../utils/tokens/sessionToken.js";
const loginUser = async(user) => {
    try {
        const userDB = await findUser(user.email);
        if(!userDB) throw "Usuario no encontrado";
        if(!comparePassword(user.password, userDB.password)){
            throw "Contraseña incorrecta"
        }
        const token = generateToken(userDB._id);
        return {token, user: userDB};
    }
    catch (e){
        throw e;
    }
}

export default loginUser;