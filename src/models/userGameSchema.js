import { Schema, model } from 'mongoose';

const userGameSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'Users' },
    riotData: {
        tier: { type: String, required: true },
        rank: { type: String, required: true },
        wins: { type: Number, required: true },
        losses: { type: Number, required: true },
        queueType: { type: String, required: true },
        summonerId: { type: String, required: true },
        leaguePoints: { type: Number, required: true },
        summonerLevel: { type: Number, required: true },
        profileIconId: { type: Number, required: true },
        puuid: { type: String, required: true },
        gameName: { type: String, required: true },
        tagLine: { type: String, required: true }
    }
});
const UserGame = model('UserGameInformation', userGameSchema, 'UserGameInformation');

export default UserGame;