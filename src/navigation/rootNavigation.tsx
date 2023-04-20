import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef=createNavigationContainerRef();

export function navigation(name:string,params?:any){
    if(navigationRef.isReady()){
        navigationRef.navigate(name,params)
    }

}