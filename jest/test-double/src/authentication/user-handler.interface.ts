export interface UserHandler {
  registerUser(username: string, password: string): Promise<string>;
  login(username: string, password: string): Promise<string | undefined>;
}
