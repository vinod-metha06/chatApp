import { ChatAction } from "../../constants/actionConstants";
import Action from "../../types/action";
import Reducer from "../../types/reducer";

 const initialState:Reducer = {
    isLoading: false,
    data: [],
    error: false,
};


export const getCategoriesReducer=(state=initialState,action:Action)=>{

    switch (action.type) {

        case ChatAction.GETCATEGORIES_LODING:
           
            return{
                ...state,
                isLoading:true,
                
            }
        case ChatAction.GETCATEGORIES_LODED:
           
            return{
                ...state,
                isLoading:false,
                data:action.payload
            }   
        case ChatAction.GETCATEGORIES_LODING_ERROR:

                return{
                    ...state,
                    isLoading:false,
                    error:true,
                    
                }  

        default:
            return state;
    }

}