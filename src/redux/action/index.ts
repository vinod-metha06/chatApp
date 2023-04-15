import { ChatAction } from "../../constants/actionConstants"


export function dispatchLogin(data:any){
    return {
        type:ChatAction.LOGIN,
        payload:data
    }
}


export function dispatchLoginIn(){
    return {
        type:ChatAction.LOGGING_IN,
    }
}


export function dispatchLogged(data:any){
    return {
        type:ChatAction.LOGGED,
        payload:data
     
    }
}


export function dispatchLoginError(){
    return {
        type:ChatAction.LOGIN_ERROR,

    }
}






export function dispatchRegister(data:any){
    return {
        type:ChatAction.REGISTER,
        payload:data
    }
}


export function dispatchRegistering(){
    return {
        type:ChatAction.REGISTERING,
    }
}


export function dispatchRegistered(data:any){
    return {
        type:ChatAction.REGISTERED,
        payload:data
     
    }
}


export function dispatchRegistrationError(){
    return {
        type:ChatAction.REGISTRATION_ERROR,

    }
}