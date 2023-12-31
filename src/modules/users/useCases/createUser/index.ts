
import { UsersRepository } from "../../repositories/implementation/UsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";


const usersRepository = UsersRepository.getInstance()
const createUserUseCase = new CreateUserUseCase(usersRepository)
const createUserController = new CreateUserController(createUserUseCase)

export {createUserController}