import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#dedede'
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export default ItemSeparator;
