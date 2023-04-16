import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeData = async (key:string, value:string) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      console.log(e)
    }
  }
  

 export  const getData = async (key:string) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
        // value previously stored
       // console.log(value)
        return value
      }
    } catch(e) {
      console.log(e)
      return e
    }
  }
  
  export const removeData = async (key:string) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      console.log(e)
    }
  }
  