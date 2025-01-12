import { Account, SessionToken } from '../model/authentication.model';
import { Database } from './database';

export class SessionTokenDataAccess {
  private sessionTokensDataBase = new Database<SessionToken>();

  public async generateToken(user: Account) {
    const tokenId = await this.sessionTokensDataBase.insert({
      id: '',
      userName: user.username,
      valid: true,
      expirationDate: this.generateExpirationTime(),
    });
    console.log(`Inserting ${tokenId} into the database`);
    return tokenId;
  }

  public async invalidateToken(tokenId: string) {
    await this.sessionTokensDataBase.update(tokenId, 'valid', false);
  }

  public async isValidToken(tokenId: string) {
    console.log(`Quering for ${tokenId} into the database`);
    const sessionToken = await this.sessionTokensDataBase.findBy('id', tokenId);
    if (sessionToken) {
      return sessionToken.valid;
    }
    return false;
  }

  private generateExpirationTime() {
    return new Date(Date.now() + 60 * 60 * 1000);
  }
}
