import { LOLAPI } from "../../utils/RiotApi/keyLoLApi.js";
import { Constants } from "twisted";
import getRiotAccount from "./fetchAccountRiot.js";
const getLeagueOfLegendsAccountData = async (username, region) => {
    try {
        const user = await getRiotAccount(username, region);
        if(!user) throw "Usuario no encontrado";
        const AccountLeagueOfLegends = await (LOLAPI.Summoner.getByPUUID(user.puuid, Constants.Regions.LAT_SOUTH)).response;
        if(!AccountLeagueOfLegends) throw "Usuario no encontrado";
        const rankedData = await (LOLAPI.League.bySummoner(AccountLeagueOfLegends.response.id, Constants.Regions.LAT_SOUTH)).response
        if(!rankedData) throw "Usuario no encontrado";
        AccountLeagueOfLegends.rankedData = rankedData;
        console.log(AccountLeagueOfLegends)
        return AccountLeagueOfLegends;
    } catch (error){
        console.log(error);
    }
}

export default getLeagueOfLegendsAccountData;