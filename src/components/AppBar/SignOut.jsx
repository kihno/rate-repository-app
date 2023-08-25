import { Pressable } from "react-native";
import Text from "../Text";
import useAuthStorage from "../../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";

const SignOut = ({ setUser }) => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signOut = () => {
    setUser(null);
    authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate('/');
  };

  return (
    <Pressable style={{ paddingTop: 20, paddingBottom: 20 }} onPress={signOut}>
      <Text fontWeight="bold" color="textHeading" fontSize="subheading">Sign Out</Text>
    </Pressable>
  )
};

export default SignOut;
