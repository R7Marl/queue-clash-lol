import { Schema, model } from 'mongoose';

const userGameSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'Users' },
    riotData: {
        puuid: { type: String, required: true },
        gameName: { type: String, required: true },
        tagLine: { type: String, required: true }
    },
    Summoner: {
        id: { type: String, required: true },
        accountId: { type: String, required: true },
        puuid: { type: String, required: true },
        profileIconId: { type: Number, required: true },
        revisionDate: { type: Number, required: true },
        summonerLevel: { type: Number, required: true }
    },
    leagueData: {
        leagueId: { type: String, required: true },
        queueType: { type: String, required: true },
        tier: { type: String, required: true },
        rank: { type: String, required: true },
        summonerId: { type: String, required: true },
        leaguePoints: { type: Number, required: true },
        wins: { type: Number, required: true },
        losses: { type: Number, required: true },
        veteran: { type: Boolean, required: true },
        inactive: { type: Boolean, required: true },
        freshBlood: { type: Boolean, required: true },
        hotStreak: { type: Boolean, required: true },
        winrate: { type: Number, required: true }
    }
});
const UserGame = model('UserGameInformation', userGameSchema, 'UserGameInformation');

export default UserGame;