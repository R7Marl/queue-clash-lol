export class User {
  constructor({ id, name, email, password, sexo, age }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.sexo = sexo;
    this.age = age;
  }

  static create({ name, email, password, sexo, age }) {
    return new User({ name, email, password, sexo, age });
  }
}
