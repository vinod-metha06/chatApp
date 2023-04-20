import { EcomAction } from "../../constants/actionConstants"


export function dispatchLogin(data:any){
    return {
        type:EcomAction.LOGIN,
        payload:data
    }
}


export function dispatchLoginIn(){
    return {
        type:EcomAction.LOGGING_IN,
    }
}


export function dispatchLogged(data:any){
    return {
        type:EcomAction.LOGGED,
        payload:data
     
    }
}


export function dispatchLoginError(){
    return {
        type:EcomAction.LOGIN_ERROR,

    }
}






export function dispatchRegister(data:any){
    return {
        type:EcomAction.REGISTER,
        payload:data
    }
}


export function dispatchRegistering(){
    return {
        type:EcomAction.REGISTERING,
    }
}


export function dispatchRegistered(data:any){
    return {
        type:EcomAction.REGISTERED,
        payload:data
     
    }
}


export function dispatchRegistrationError(){
    return {
        type:EcomAction.REGISTRATION_ERROR,

    }

    
}




export function dispatchGetUser(data:any){
    return {
        type:EcomAction.GETUSER,
        payload:data
    }
}


export function dispatchGetUserLoading(){
    return {
        type:EcomAction.GETUSER_LODING,
    }
}


export function dispatchGetUserLoaded(data:any){
    return {
        type:EcomAction.GETUSER_LODED,
        payload:data
     
    }
}


export function dispatchGetUserLoadingError(){
    return {
        type:EcomAction.GETUSER_LODING_ERROR,

    }

    
}




export function dispatchGetCategories(data:any){
    return {
        type:EcomAction.GETCATEGORIES,
        payload:data
    }
}


export function dispatchGetCategoriesLoading(){
    return {
        type:EcomAction.GETCATEGORIES_LODING,
    }
}


export function dispatchGetCategoriesLoaded(data:any){
    return {
        type:EcomAction.GETCATEGORIES_LODED,
        payload:data
     
    }
}


export function dispatchGetCategoriesLoadingError(){
    return {
        type:EcomAction.GETCATEGORIES_LODING_ERROR,

    }

    
}

export function getBestSellingPhones(){
    return{
        type:EcomAction.GET_BEST_SELLINGS_PHONE,
       
    }
}

export function dispatchBestSellingPhoneLoding(){
    return{
        type:EcomAction.BEST_SELLINGS_LOADING
    }
}


export function dispatchBestSellingPhoneLoaded(response:any){
    return{
        type:EcomAction.BEST_SELLINGS_LOADED,
        payload:response
    }
}

export function dispatchBestSellingPhoneLoadingError(){
    return{
        type:EcomAction.BEST_SELLINGS_LOADING_ERROR,
      
    }
}


export function dispatchAddToCart(data:any){
    return {
        type:EcomAction.ADD_TO_CART,
        payload:data
    }
}


export function dispatchAddToCartLoading(){
    return {
        type:EcomAction.ADD_TO_CART_LOADING,
      
    }
}

export function dispatchAddToCartLoaded(data:any){
    return {
        type:EcomAction.ADD_TO_CART_LOADED,
        payload:data
      
    }
}

export function dispatchAddToCartLoadingError(){
    return {
        type:EcomAction.ADD_TO_CART_LOADING_ERROR,
      
    }
}

export function dispatchAlreadyAddToCart(data:any){
    return {
        type:EcomAction.ALREADY_ADD_TO_CART,
        payload:data
    }
}


export function dispatchAlreadyAddToCartLoading(){
    return {
        type:EcomAction.ALREADY_ADD_TO_CART_LOADING,
      
    }
}

export function dispatchAlreadyAddToCartLoaded(data:any){
    return {
        type:EcomAction.ALREADY_ADD_TO_CART_LOADED,
        payload:data
      
    }
}

export function dispatchAlreadyAddToCartLoadingError(){
    return {
        type:EcomAction.ALREADY_ADD_TO_CART_LOADING_ERROR,
      
    }
}



////////////////


export function dispatchGetCartItem(data:any){
    return {
        type:EcomAction.GET_CART_ITEM,
        payload:data
    }
}


export function dispatchGetCartItemLoading(){
    return {
        type:EcomAction.GET_CART_ITEM_LOADING,
      
    }
}

export function dispatchGetCartItemLoaded(data:any){
    return {
        type:EcomAction.GET_CART_ITEM_LOADED,
        payload:data
      
    }
}

export function dispatchGetCartItemLoadingError(){
    return {
        type:EcomAction.GET_CART_ITEM_LOADING_ERROR,
      
    }
}

export function dispatchUpdateQty(data:any){
    return {
        type:EcomAction.UPDATEQTY,
        payload:data
      
    }
}
