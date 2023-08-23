import { Router, response } from "express";

import { createUserController } from "../modules/users/useCases/createUser";
import { listUsersController } from "../modules/users/useCases/ListUsers";
import { showUserProfileController } from "../modules/users/useCases/showUserProfile";
import { turnUserAdminController } from "../modules/users/useCases/turnUserAdmin";


const usersRoutes = Router();

usersRoutes.post("/", (request, response) =>{
  return createUserController.handle(request, response)
}
);

usersRoutes.patch("/:user_id/admin",(request, response)=>{
  turnUserAdminController.handle(request, response)
})

usersRoutes.get("/:user_id", (request, response)=>{
return showUserProfileController.handle(request, response)
}
)

usersRoutes.get("/",(request,response)=>{
  return  listUsersController.handle(request, response)
})





export { usersRoutes };
