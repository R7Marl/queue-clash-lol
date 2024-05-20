import { Schema, model } from 'mongoose';


const userGameSchema = new Schema({
    name: String,
    nickname: String,
    elo: Number,
    winrate: Number
});

const UserGame = model('UserGameInformation', userGameSchema, 'UserGameInformation');

export default UserGame;