import { AddGameFromRiot } from '../../application/add-game-from-riot.js';
import { MongooseUserGameRepository } from '../repositories/mongoose-user-game-repository.js';

const repository = new MongooseUserGameRepository();
const addGameFromRiot = new AddGameFromRiot(repository);

export const addGameController = async (req, res) => {
  try {
    const result = await addGameFromRiot.execute(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
