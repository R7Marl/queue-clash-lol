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
            if (!riotData) throw new Error("Usuario no encontrado");
            this.data.riotData = {
                puuid: riotData.puuid,
                gameName: riotData.gameName,
                tagLine: riotData.tagLine
            };
            return riotData;
        } catch (error){
            throw new Error("Hubo un error con la API Riot");
        }
    }

    async getAccountLeagueOfLegends() {
        const user = await this.getAccountRiotGames();
        console.log(user)
        const AccountLeagueOfLegendsResponse = await LOLAPI.Summoner.getByPUUID(user.puuid, Constants.Regions.LAT_SOUTH);
        const AccountLeagueOfLegends = AccountLeagueOfLegendsResponse.response;
        console.log(AccountLeagueOfLegends);
        if (!AccountLeagueOfLegends) throw "Usuario no encontrado 1";
        const { summonerLevel, id, profileIconId } = AccountLeagueOfLegends;
        this.data.riotData = {
            ...this.data.riotData,
            summonerLevel,
            profileIconId
        };
        const rankedDataResponse = await LOLAPI.League.bySummoner(AccountLeagueOfLegends.id, Constants.Regions.LAT_SOUTH);
        const rankedData = rankedDataResponse.response;
        if (!rankedData || rankedData.length === 0) throw new Error("Datos de liga no encontrados");
        if (!rankedData) throw "Usuario no encontrado 2";
        const { tier, rank, wins, losses, queueType, summonerId, leaguePoints } = rankedData[0];
        this.data.riotData = {
            ...this.data.riotData,
            tier,
            rank,
            wins,
            losses,
            queueType,
            summonerId,
            leaguePoints
        };
        let winrate = this.calculateWinrate(wins, losses);
        this.data.riotData.winrate = Math.floor(winrate);
        console.log(this.data);
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