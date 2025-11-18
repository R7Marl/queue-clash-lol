import { UserRepository } from '../../domain/user-repository.js';
import { User } from '../../domain/user.js';
import { UserModel } from '../persistence/mongoose/userModel.js';

export class MongooseUserRepository extends UserRepository {
  async create(user) {
    const doc = new UserModel(user);
    await doc.save();
    return this.#mapToDomain(doc);
  }

  async findByEmail(email) {
    const userDoc = await UserModel.findOne({ email });
    return userDoc ? this.#mapToDomain(userDoc) : null;
  }

  #mapToDomain(userDoc) {
    const { _id, name, email, password, sexo, age } = userDoc;
    return new User({ id: _id.toString(), name, email, password, sexo, age });
  }
}
