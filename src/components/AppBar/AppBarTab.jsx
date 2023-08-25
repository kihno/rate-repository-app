import { Link } from "react-router-native";
import Text from "../Text";

const AppBarTab = ({ title, link }) => {
  return (
    <Link to={link} style={{ paddingTop: 20, paddingBottom: 20 }}>
      <Text fontWeight="bold" color="textHeading" fontSize="subheading">{title}</Text>
    </Link>
  )
};

export default AppBarTab;
