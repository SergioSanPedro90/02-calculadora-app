import { StatusBar } from "expo-status-bar";
import { Slot } from 'expo-router'
import { View, Text} from 'react-native'
import { globalStyles } from '@/styles/global-styles';


const RootLayout = () => {
  return (
    <View style={ globalStyles.background }>
      <Text>RootLayout</Text>
      <Slot/>
      <StatusBar style='auto'/>
      <Text>footer</Text>
    </View>
  )
}
export default RootLayout