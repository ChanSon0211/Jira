
import { LoginType, SignupType } from "type/userType";
import { userPath } from "./ApiPath";
import requester from "./requester";

class UserRequester {
    
    userLogin(data:LoginType ){
      return  requester({
            url: userPath.LOGIN,
            method:"POST",
            data,
          
        })
    }

    userSignup(data:SignupType){
     return   requester({
            url: userPath.SIGNUP,
            method:"POST",
            data,
        })
    }

    
}

const userRequester = new UserRequester();

export default userRequester