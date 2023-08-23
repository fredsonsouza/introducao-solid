import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest{
  user_id:string
}

class ShowUserProfileUseCase{
  constructor(private userRepository: IUsersRepository){}

  execute({user_id}:IRequest):User{
    const existsUser = this.userRepository.findById(user_id)
  
    if(!existsUser){
      throw new Error("User does not exists");
    }

    if(existsUser.admin === false){
      throw new Error("Permission denied");
    }
    return existsUser
  }
}

export { ShowUserProfileUseCase}