import { log } from "console";

export default class UserModel {
    constructor(id, name, email, password) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
    }

    static add(name, email, password) {
        const newuser = new UserModel(
            users.length + 1,
            name,
            email,
            password
        );
        users.push(newuser);
    }

    static isValidaUser(email, password) {
        // console.log("userdetals", users);
        const result = users.find((users) => users.email == email && users.password == password);
        return result;
    }

    

}

var users = [];