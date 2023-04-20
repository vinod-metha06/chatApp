import { EcomAction } from "../../constants/actionConstants";
import Action from "../../types/action";
import Reducer from "../../types/reducer";

 const initialState:Reducer = {
    isLoading: false,
    data: [],
    error: false,
};


export const getCategoriesReducer=(state=initialState,action:Action)=>{

    switch (action.type) {

        case EcomAction.GETCATEGORIES_LODING:
           
            return{
                ...state,
                isLoading:true,
                
            }
        case EcomAction.GETCATEGORIES_LODED:
           
            return{
                ...state,
                isLoading:false,
                data:action.payload
            }   
        case EcomAction.GETCATEGORIES_LODING_ERROR:

                return{
                    ...state,
                    isLoading:false,
                    error:true,
                    
                }  

        default:
            return state;
    }

}