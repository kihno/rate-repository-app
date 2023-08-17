import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { ScrollView } from 'react-native';
import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: "row",
    gap: 20,
    backgroundColor: theme.colors.headerBackground,
    padding: 20
  },
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
