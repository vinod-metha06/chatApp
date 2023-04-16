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




export function dispatchGetUser(data:any){
    return {
        type:ChatAction.GETUSER,
        payload:data
    }
}


export function dispatchGetUserLoading(){
    return {
        type:ChatAction.GETUSER_LODING,
    }
}


export function dispatchGetUserLoaded(data:any){
    return {
        type:ChatAction.GETUSER_LODED,
        payload:data
     
    }
}


export function dispatchGetUserLoadingError(){
    return {
        type:ChatAction.GETUSER_LODING_ERROR,

    }

    
}




export function dispatchGetCategories(data:any){
    return {
        type:ChatAction.GETCATEGORIES,
        payload:data
    }
}


export function dispatchGetCategoriesLoading(){
    return {
        type:ChatAction.GETCATEGORIES_LODING,
    }
}


export function dispatchGetCategoriesLoaded(data:any){
    return {
        type:ChatAction.GETCATEGORIES_LODED,
        payload:data
     
    }
}


export function dispatchGetCategoriesLoadingError(){
    return {
        type:ChatAction.GETCATEGORIES_LODING_ERROR,

    }

    
}

export function getBestSellingPhones(){
    return{
        type:ChatAction.GET_BEST_SELLINGS_PHONE,
       
    }
}

export function dispatchBestSellingPhoneLoding(){
    return{
        type:ChatAction.BEST_SELLINGS_LOADING
    }
}


export function dispatchBestSellingPhoneLoaded(response:any){
    return{
        type:ChatAction.BEST_SELLINGS_LOADED,
        payload:response
    }
}

export function dispatchBestSellingPhoneLoadingError(){
    return{
        type:ChatAction.BEST_SELLINGS_LOADING_ERROR,
      
    }
}


export function dispatchAddToCart(data:any){
    return {
        type:ChatAction.ADD_TO_CART,
        payload:data
    }
}


export function dispatchAddToCartLoading(){
    return {
        type:ChatAction.ADD_TO_CART_LOADING,
      
    }
}

export function dispatchAddToCartLoaded(data:any){
    return {
        type:ChatAction.ADD_TO_CART_LOADED,
        payload:data
      
    }
}

export function dispatchAddToCartLoadingError(){
    return {
        type:ChatAction.ADD_TO_CART_LOADING_ERROR,
      
    }
}

export function dispatchAlreadyAddToCart(data:any){
    return {
        type:ChatAction.ALREADY_ADD_TO_CART,
        payload:data
    }
}


export function dispatchAlreadyAddToCartLoading(){
    return {
        type:ChatAction.ALREADY_ADD_TO_CART_LOADING,
      
    }
}

export function dispatchAlreadyAddToCartLoaded(data:any){
    return {
        type:ChatAction.ALREADY_ADD_TO_CART_LOADED,
        payload:data
      
    }
}

export function dispatchAlreadyAddToCartLoadingError(){
    return {
        type:ChatAction.ALREADY_ADD_TO_CART_LOADING_ERROR,
      
    }
}



////////////////


export function dispatchGetCartItem(data:any){
    return {
        type:ChatAction.GET_CART_ITEM,
        payload:data
    }
}


export function dispatchGetCartItemLoading(){
    return {
        type:ChatAction.GET_CART_ITEM_LOADING,
      
    }
}

export function dispatchGetCartItemLoaded(data:any){
    return {
        type:ChatAction.GET_CART_ITEM_LOADED,
        payload:data
      
    }
}

export function dispatchGetCartItemLoadingError(){
    return {
        type:ChatAction.GET_CART_ITEM_LOADING_ERROR,
      
    }
}

export function dispatchUpdateQty(data:any){
    return {
        type:ChatAction.UPDATEQTY,
        payload:data
      
    }
}
