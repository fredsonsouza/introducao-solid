import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";


class ListUsersController{

  constructor(private listUsersUseCase: ListUsersUseCase){}

  handle(request: Request, response:Response){
    const listUsers =  this.listUsersUseCase.execute()
  return response.json(listUsers)
  }

}

export {ListUsersController}