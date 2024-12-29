import { Account } from './model/authentication.model';
import { Database } from './database/database';

export class UserCredentialsDataAccess {
  private userCredentialsDataBase = new Database<Account>();

  public async addUser(user: Account) {
    const accountId = await this.userCredentialsDataBase.insert(user);
    return accountId;
  }

  public async getUserById(id: string) {
    const user = await this.userCredentialsDataBase.findBy('id', id);
    return user;
  }

  public async getUserByUsername(userName: string) {
    const user = await this.userCredentialsDataBase.findBy(
      'username',
      userName
    );
    return user;
  }
}
