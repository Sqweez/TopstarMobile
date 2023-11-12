import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../COLORS";

const width = Dimensions.get('window').width;

const DrawerContentStyles = StyleSheet.create({
   wrapper: {
       flex: 1,
       backgroundColor: COLORS.primary,
       //width: width * 0.83,
   }
});

export default DrawerContentStyles;
