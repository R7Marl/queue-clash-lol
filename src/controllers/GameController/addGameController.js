import UserGame from "../../models/userGameSchema.js";
import getRiotAccount from "../../services/RiotApiService/fetchAccountRiot.js";
const addGameController = async (req, res) => {
    try {
        const { username, region } = req.body;
        const riotData = await getRiotAccount(username, region);
        console.log(riotData);
        res.send(riotData);
    } catch (error) {
        console.log(error);
    }
}

export default addGameController;