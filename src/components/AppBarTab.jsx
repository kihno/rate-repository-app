import { Pressable } from "react-native";
import Text from "./Text";

const AppBarTab = ({ title }) => {
  return (
    <Pressable style={{ paddingTop: 20, paddingBottom: 20 }}>
      <Text fontWeight="bold" color="textHeading" fontSize="heading">{title}</Text>
    </Pressable>
  )
};

export default AppBarTab;
