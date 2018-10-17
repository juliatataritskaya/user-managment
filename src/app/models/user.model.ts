export class User {
  constructor(
    public name: string,
    public lastname: string,
    public phone: string,
    public id?: number
  ){}
}

export interface Users {
  users: User[]
}
