export type Account = {
  id: string;
  username: string;
  password: string;
};

export type SessionToken = {
  id: string;
  userName: string;
  valid: boolean;
  expirationDate: Date;
};
