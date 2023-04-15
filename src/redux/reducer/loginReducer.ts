import { ChatAction } from "../../constants/actionConstants";
import Action from "../../types/action";
import Reducer from "../../types/reducer";

 const initialState:Reducer = {
    isLoading: false,
    data: "",
    error: false,
};


export const loginReducer=(state=initialState,action:Action)=>{

    switch (action.type) {

        case ChatAction.LOGGING_IN:
            return{
                ...state,
                isLoading:true,
                
            }
        case ChatAction.LOGGED:
            const res=action.payload?ChatAction.SUCCESS:ChatAction.FAIL;
            return{
                ...state,
                isLoading:false,
                data:res
            }   
        case ChatAction.LOGIN_ERROR:
            const err=action.payload?ChatAction.SUCCESS:ChatAction.FAIL;
                return{
                    ...state,
                    isLoading:false,
                    error:true,
                    data:err
                }  

        default:
            return state;
    }

}