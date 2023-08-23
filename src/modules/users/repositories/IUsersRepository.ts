import { User } from "../model/User";


interface ICreateUserDTO {
  name: string;
  email: string;
}

interface IUsersRepository{
  findByEmail(email:string):User
  findById(id:string):User
  turnAdmin(user: User):User
  list():User[]
  create({name, email}:ICreateUserDTO):void

}

export {IUsersRepository, ICreateUserDTO}