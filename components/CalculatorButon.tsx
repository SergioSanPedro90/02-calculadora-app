import { Colors } from '@/constants/theme'
import * as Haptics from 'expo-haptics';
import { globalStyles } from '@/styles/global-styles'
import { View, Text, Pressable } from 'react-native'

interface Props{
  label: string,
  color?: string,
  blackText?: boolean,
  doubleSize?: boolean,
  onPress: () => void
}

const CalculatorButon = ({ 
  label, 
  color= Colors.darkGray, 
  blackText= false, 
  doubleSize= false, 
  onPress }: Props) => {

  return (
    <Pressable 
    style={({ pressed })=> ({
      ... globalStyles.button,
      backgroundColor: color,
      opacity: pressed ? 0.8 : 1,
      width: doubleSize ? 175 : 80
    })}
    onPress={ ()=> {
       Haptics.selectionAsync()
       onPress()
    } }
    >
      <Text style={{
        ... globalStyles.buttonText,
        color: blackText ? 'black' : 'white'
        }}>
        {label}
      </Text>
    </Pressable>
  )
}
export default CalculatorButon