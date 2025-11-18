import { UserGameRepository } from '../../domain/user-game-repository.js';
import { UserGame } from '../../domain/user-game.js';
import { UserGameModel } from '../persistence/mongoose/userGameModel.js';

export class MongooseUserGameRepository extends UserGameRepository {
  async create(userGame) {
    const doc = new UserGameModel(userGame);
    await doc.save();
    return this.#mapToDomain(doc);
  }

  #mapToDomain(doc) {
    const { _id, user, riotData } = doc;
    return new UserGame({ id: _id.toString(), user: user.toString(), riotData });
  }
}
