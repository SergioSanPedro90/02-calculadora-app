import CustomText from '@/components/CustomText'
import { globalStyles } from '@/styles/global-styles'
import { View, Text } from 'react-native'
const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>

      <CustomText
      variant= 'h1'
      >
        50 x 50
        </CustomText>

      <CustomText
      variant='h2'
      >
        250
        </CustomText>

        <CustomText>
            hola mundo
        </CustomText>
    </View>
  )
}
export default CalculatorApp