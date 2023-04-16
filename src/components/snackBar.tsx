import Snackbar from 'react-native-snackbar';

import { dispatchAddToCart } from '../redux/action';

  const showSnackbar = (msg:string) => {
 
    return(
        Snackbar.show({
            text: msg,
            duration: Snackbar.LENGTH_LONG,
            action: {
              text: 'OK',
              onPress: () => {},
            },
          })
    );
   
  };

 

export default showSnackbar;
