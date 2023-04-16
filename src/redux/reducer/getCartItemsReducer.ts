
import { ChatAction } from "../../constants/actionConstants";
import Action from "../../types/action";
import Reducer from "../../types/reducer";


const initialState:Reducer={
    isLoading:false,
    data:[],
    error:false
}

export const getCartItemReducer=(state=initialState,action:Action)=>{
    switch (action.type) {
        case ChatAction.GET_CART_ITEM_LOADING:
            return{
                ...state,
                isLoading:true,
            }
        case ChatAction.GET_CART_ITEM_LOADED:  
        return{
            ...state,
            isLoading:false,
            data:action.payload
        } 
        case ChatAction.UPDATEQTY:  
        return{
            ...state,
            isLoading:true,
            data:action.payload
        } 
        case ChatAction.GET_CART_ITEM_LOADING_ERROR:
            return{
                ...state,
                isLoading:false,
                error:true
            }
        default:
            return state;
    }

}