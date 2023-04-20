import { EcomAction } from "../../constants/actionConstants";

export const authState = {
  loading: true,
  authToken: null,
};

export const authReducer = (state = authState, action: any) => {
  switch (action.type) {
    case EcomAction.AUTH_TOKEN_NULL:
      return {
        ...state,
        loading: false,
        
      };
      case EcomAction.AUTH_TOKEN:
        return {
          loading: false,
          authToken: action.payload,
        };
  
    default:
      return state;
  }
};
