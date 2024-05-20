import UserGame from "../../models/userGameSchema.js";
import AccountLeagueOfLegendsFunctions from "../../services/RiotApiService/lolClasses.js";

const addGameController = async (req, res) => {
    try {
        const { userId, username, region } = req.body;
        const riotAccount = new AccountLeagueOfLegendsFunctions(userId, username, region);
        const summonerData = await riotAccount.getAccountLeagueOfLegends();
        if(!summonerData) res.status(400).json({ error: "No se pudo encontrar el Summoner"});
        res.json(summonerData);
    } catch (error) {
        console.log(error);
    }
}

export default addGameController;