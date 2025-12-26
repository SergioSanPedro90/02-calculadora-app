import CalculatorButon from "@/components/CalculatorButon";
import CustomText from "@/components/CustomText";
import { Colors } from "@/constants/theme";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import { View, Text } from "react-native";

const CalculatorApp = () => {
  const {
    formula,
    previusnumber,
    addOperation,
    multiplyOperation,
    substractOperation,
    divideOperation,
    buildNumber,
    clean,
    toggleSign,
    delLastNumber,
    result
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <CustomText variant="h1">{formula}</CustomText>

        {formula === previusnumber ? (
          <CustomText variant="h2"> </CustomText>
        ) : (
          <CustomText variant="h2">{previusnumber}</CustomText>
        )}
      </View>

      {/* botones */}
      <View style={globalStyles.row}>
        <CalculatorButon
          label="C"
          color={Colors.ligthGray}
          blackText
          onPress={clean}
        />
        <CalculatorButon
          label="+/-"
          color={Colors.ligthGray}
          blackText
          onPress={toggleSign}
        />
        <CalculatorButon
          label="del"
          color={Colors.ligthGray}
          blackText
          onPress={delLastNumber}
        />
        <CalculatorButon
          label="/"
          color={Colors.orange}
          onPress={divideOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButon label="7" onPress={() => buildNumber("7")} />
        <CalculatorButon label="8" onPress={() => buildNumber("8")} />
        <CalculatorButon label="9" onPress={() => buildNumber("9")} />
        <CalculatorButon
          label="x"
          color={Colors.orange}
          onPress={multiplyOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButon label="4" onPress={() => buildNumber("4")} />
        <CalculatorButon label="5" onPress={() => buildNumber("5")} />
        <CalculatorButon label="6" onPress={() => buildNumber("6")} />
        <CalculatorButon
          label="-"
          color={Colors.orange}
          onPress={substractOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButon label="1" onPress={() => buildNumber("1")} />
        <CalculatorButon label="2" onPress={() => buildNumber("2")} />
        <CalculatorButon label="3" onPress={() => buildNumber("3")} />
        <CalculatorButon
          label="+"
          color={Colors.orange}
          onPress={addOperation}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButon
          label="0"
          doubleSize
          onPress={() => buildNumber("0")}
        />
        <CalculatorButon label="." onPress={() => buildNumber(".")} />
        <CalculatorButon
          label="="
          color={Colors.orange}
          onPress={result}
        />
      </View>
    </View>
  );
};
export default CalculatorApp;
