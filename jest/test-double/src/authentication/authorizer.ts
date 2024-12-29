import { SessionTokenDataAccess } from '../database/session-token-data-access';
import { TokenValidator } from './token-validator.interface';
import { UserCredentialsDataAccess } from '../user-credentials-data-access';
import { UserHandler } from './user-handler.interface';

export class Authorizer implements UserHandler, TokenValidator {
  private sessionTokenDataAccess = new SessionTokenDataAccess();
  private userCredentialsDataAccess = new UserCredentialsDataAccess();

  public async validateToken(tokenId: string): Promise<boolean> {
    const isTokenValid = await this.sessionTokenDataAccess.isValidToken(
      tokenId
    );
    return isTokenValid;
  }

  public async registerUser(userName: string, password: string) {
    const userId = await this.userCredentialsDataAccess.addUser({
      id: '',
      password: password,
      username: userName,
    });
    return userId;
  }

  public async login(userName: string, password: string) {
    const user = await this.userCredentialsDataAccess.getUserByUsername(
      userName
    );
    if (user && user.password === password) {
      const tokenId = await this.sessionTokenDataAccess.generateToken(user);
      return tokenId;
    }
  }

  public async logout(tokenId: string) {
    await this.sessionTokenDataAccess.invalidateToken(tokenId);
  }
}
