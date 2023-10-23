import Toast from 'react-native-toast-message';
import {SafeAreaView, View } from 'react-native'
import { Button } from 'react-native-paper';

export const Component5 = ({ navigation }) => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }

  return (

    <SafeAreaView>

      <View style={{ margin: 10, width: 100, alignSelf: 'flex-end', marginTop: 100 }}>
      <Button         
      style={{ alignSelf: 'flex-end', width: 300, height: 30 ,maginTop:20}}
      onPress={() => navigation.navigate('Main')} // Pass the name of the screen as a string
    >
      Go back to main →
    </Button>
      </View>
    </SafeAreaView>

  )
};