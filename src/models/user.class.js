import {ROLE} from './role.enum';

export class User {
  nameUser = '';
  email = '';
  password = '';
  role = ROLE.USER;

  constructor(nameUser, email, password, role) {
    this.nameUser = nameUser;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
