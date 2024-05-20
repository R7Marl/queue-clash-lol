import { LOLAPI } from "../../utils/RiotApi/keyLoLApi.js";
import RIOTAPI from "../../utils/RiotApi/keyRiotApi.js";
import { Constants } from "twisted";
import UserGame from "../../models/userGameSchema.js";
class AccountLeagueOfLegendsFunctions {

    constructor(userId, username, region) {
        this._userId = userId;
        this._username = username;
        this.region = region;
        this.data = {
            user: this._userId,
        };
    }

    async getAccountRiotGames() {
        const tag = this._username.split("#")[1];
        const username1 = this._username.split("#")[0];
        try {
            const riotResponse = await RIOTAPI.Account.getByRiotId(username1, tag, Constants.RegionGroups.AMERICAS);
            const riotData = riotResponse.response;
            if (!riotData) throw "Usuario no encontrado";
            this.data.riotData = riotData;
            return riotData;
        } catch (error){
            console.log(error)
            return error
        }
    }

    async getAccountLeagueOfLegends() {
        const user = await this.getAccountRiotGames();
        console.log(user)
        const AccountLeagueOfLegendsResponse = await LOLAPI.Summoner.getByPUUID(user.puuid, Constants.Regions.LAT_SOUTH);
        const AccountLeagueOfLegends = AccountLeagueOfLegendsResponse.response;
        console.log(AccountLeagueOfLegends);
        if (!AccountLeagueOfLegends) throw "Usuario no encontrado 1";
        this.data.Summoner = AccountLeagueOfLegends;
        const rankedDataResponse = await LOLAPI.League.bySummoner(AccountLeagueOfLegends.id, Constants.Regions.LAT_SOUTH);
        const rankedData = rankedDataResponse.response;
        if (!rankedData || rankedData.length === 0) throw new Error("Datos de liga no encontrados");
        if (!rankedData) throw "Usuario no encontrado 2";
        this.data.leagueData = rankedData[0];
        let winrate = this.calculateWinrate(rankedData[0].wins, rankedData[0].losses);
        this.data.leagueData.winrate = Math.floor(winrate);
        this.saveAccountLeagueOfLegends();
        return this.data;
    }

    async saveAccountLeagueOfLegends() {
        const gameData = new UserGame(this.data);
        await gameData.save();
    }

    calculateWinrate(wins, losses) {
        return (wins / (wins + losses)) * 100;
    }
}

export default AccountLeagueOfLegendsFunctions