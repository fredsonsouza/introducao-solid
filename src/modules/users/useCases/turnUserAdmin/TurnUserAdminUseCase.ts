import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest{
  user_id:string
}

class TurnUserAdminUseCase{

  constructor(private userRepository: IUsersRepository){

  }

  execute({user_id}:IRequest):User{
    const existsUser = this.userRepository.findById(user_id)
  
    if(!existsUser){
      throw new Error("User does not exists");
    }
    this.userRepository.turnAdmin(existsUser)

    return existsUser
  }
}

export {TurnUserAdminUseCase}