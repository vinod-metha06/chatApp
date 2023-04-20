
import { EcomAction } from "../../constants/actionConstants";
import Action from "../../types/action";
import Reducer from "../../types/reducer";


const initialState:Reducer={
    isLoading:false,
    data:false,
    error:false
}

export const addToCartReducer=(state=initialState,action:Action)=>{
    switch (action.type) {
        case EcomAction.ADD_TO_CART_LOADING:
            return{
                ...state,
                isLoading:true,
            }
        case EcomAction.ADD_TO_CART_LOADED:  
        return{
            ...state,
            isLoading:false,
            data:action.payload
        } 
        case EcomAction.ADD_TO_CART_LOADING_ERROR:
            return{
                ...state,
                isLoading:false,
                error:true
            }
        default:
            return state;
    }

}