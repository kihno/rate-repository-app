import { View, StyleSheet } from "react-native";
import Text from "./Text";

const Counter = ({ title, count }) => {
  const styles = StyleSheet.create({
    flexItem: {
      flexGrow: 1,
      margin: 10,
      gap: 5,
      alignItems: "center"
    },
  });

  const round = (number) => {
    if (number < 1000) {
      return number;
    } else {
      const rounded = Math.round((number/1000) * 10) / 10
      return `${rounded}k`
    }
  };

  return (
    <View style={styles.flexItem}>
      <Text fontWeight="bold" fontSize="subheading" color="textPrimary">{round(count)}</Text>
      <Text color="textSecondary">{title}</Text>
    </View>
  )
};

export default Counter;
