import { ChatAction } from "../../constants/actionConstants";
import Action from "../../types/action";
import Reducer from "../../types/reducer";


const initialState:Reducer={
    isLoading:false,
    data:false,
    error:false
}

export const alreadyAddToCartReducer=(state=initialState,action:Action)=>{
    switch (action.type) {
        case ChatAction.ALREADY_ADD_TO_CART_LOADING:
            return{
                ...state,
                isLoading:true,
            }
        case ChatAction.ALREADY_ADD_TO_CART_LOADED:  
        return{
            ...state,
            isLoading:false,
            data:action.payload
        } 
        case ChatAction.ALREADY_ADD_TO_CART_LOADING_ERROR:
            return{
                ...state,
                isLoading:false,
                error:true
            }
        default:
            return state;
    }

}