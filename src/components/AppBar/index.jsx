import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { ScrollView } from 'react-native';
import theme from '../../theme';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../graphql/queries';
import SignOut from './SignOut';
import { useEffect, useState } from 'react';


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
  const [user, setUser] = useState(null);
  const { data } = useQuery(GET_ME);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data])

  return (
    <View style={styles.container}>
        <AppBarTab title="Repositories" link="/" />
        { user
          ? <SignOut setUser={setUser} />
          : <AppBarTab title="Sign In" link="/signin" />
        }
    </View>
  );
};

export default AppBar;
