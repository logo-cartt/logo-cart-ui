export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const usersMock: User[] = [
  {
    id: "1",
    name: "Azimkhan",
    email: "aabdulsatarov@gmail.com",
    password: "123456",
    confirmPassword: "123456",
  },
];

export class UserRepository {
  users: User[];

  constructor() {
    this.users = usersMock;
  }

  public async addUser(newUser: User) {
    this.users = [...this.users, newUser];
  }

  public async getUserByEmail(email: string): Promise<User | null> {
    const foundUser = this.users.find((user) => user.email === email) || null;
    return Promise.resolve(foundUser);
  }

  public async getUserByEmailAndPassword(email:string, password: string) {
    return this.users.find((user) => user.email === email && user.password === password);
  }
}

export const userRepository = new UserRepository();
