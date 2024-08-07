export interface IUserParams {
  name: string
  email: string
}

export interface IUser extends IUserParams {
  id: number
  createdAt: string
  updatedAt: string
}
