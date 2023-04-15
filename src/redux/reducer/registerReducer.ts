import { ChatAction } from "../../constants/actionConstants";
import Action from "../../types/action";
import Reducer from "../../types/reducer";

 const initialState:Reducer = {
    isLoading: false,
    data: "",
    error: false,
};


export const registerReducer=(state=initialState,action:Action)=>{

    switch (action.type) {

        case ChatAction.REGISTERING:
            return{
                ...state,
                isLoading:true,
                
            }
        case ChatAction.REGISTERED:
            const res=action.payload?ChatAction.SUCCESS:ChatAction.FAIL;
            return{
                ...state,
                isLoading:false,
                data:res
            }   
        case ChatAction.REGISTRATION_ERROR:
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