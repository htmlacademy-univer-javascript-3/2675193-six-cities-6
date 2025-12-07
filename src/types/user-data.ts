export type UserData = {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

export type UserDataPublic = Omit<UserData, 'token'|'email'|'id'>
