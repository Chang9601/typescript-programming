export interface TokenValidator {
  validateToken(tokenId: string): Promise<boolean>;
}
