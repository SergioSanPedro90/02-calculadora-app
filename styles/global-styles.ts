import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    fontWeight: '400',
  },
  subResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
    gap: 15
  },
  button: {
    justifyContent: 'center',
    height: 80,
    width: 80,
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    paddingHorizontal: 10,

  },
  buttonText: {
    textAlign: 'center',
    padding: 5,
    fontSize: 25,
    color: Colors.textPrimary,
    fontWeight: '500'
  }
});
