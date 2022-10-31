export interface IUser {
  email?: string;
  token?: string;
  name?: string
}

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading?: boolean
}

export interface IAuthProvider {
  children: JSX.Element;
}

export interface ILogin {
  email: string;
  password: string;
}
