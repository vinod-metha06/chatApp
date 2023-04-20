import { EcomAction } from "../../constants/actionConstants";
import Action from "../../types/action";
import Reducer from "../../types/reducer";

 const initialState:Reducer = {
    isLoading: false,
    data: "",
    error: false,
};


export const registerReducer=(state=initialState,action:Action)=>{

    switch (action.type) {

        case EcomAction.REGISTERING:
            return{
                ...state,
                isLoading:true,
                
            }
        case EcomAction.REGISTERED:
            const res=action.payload?EcomAction.SUCCESS:EcomAction.FAIL;
            return{
                ...state,
                isLoading:false,
                data:res
            }   
        case EcomAction.REGISTRATION_ERROR:
            const err=action.payload?EcomAction.SUCCESS:EcomAction.FAIL;
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