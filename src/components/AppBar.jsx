import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { ScrollView } from 'react-native-web';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: "row",
    gap: 20,
    backgroundColor: "#24292e",
    padding: 20
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab title="Repositories" link="/" />
      <AppBarTab title="Sign In" link="/signin" />
    </View>
  );
};

export default AppBar;
