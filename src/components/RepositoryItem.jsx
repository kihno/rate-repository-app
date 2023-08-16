import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";

const RepositoryItem = ({ item }) => {
  const styles = StyleSheet.create({
    logo: {
      width: 50,
      height: 50,
      borderRadius: 5,
    },
    flexContainer: {
      flexDirection: 'row',
      backgroundColor: '#ffffff'
    },
    cardContainer: {
      padding: 20,
    },
    flexItem: {
      flexGrow: 1,
      margin: 10,
      gap: 5,
      alignItems: "center"
    },
    textMargin: {
      margin: 5,
    },
    language: {
      paddingLeft: 3,
      paddingRight: 3,
      borderRadius: 5,
      backgroundColor: "#0366d6",
      flexGrow: 0,
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 3
    },
    nameCard: {
      marginLeft: 15,
      display: "flex",
      alignItems: "flex-start"
    }
  });

  const round = (number) => {
    if (number < 1000) {
      return number;
    } else {
      const rounded = Math.round((number/1000) * 10) / 10
      return `${rounded}k`
    }
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.flexContainer}>
        <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.nameCard}>
          <Text fontWeight="bold" fontSize="subheading" color="textPrimary" style={styles.textMargin}>{item.fullName}</Text>
          <Text color="textSecondary" style={styles.textMargin}>{item.description}</Text>
          <View style={styles.language}>
            <Text color="textHeading"style={styles.language}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.flexContainer}>
        <View style={styles.flexItem}>
          <Text fontWeight="bold" fontSize="subheading" color="textPrimary">{round(item.stargazersCount)}</Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={styles.flexItem}>
          <Text fontWeight="bold" fontSize="subheading" color="textPrimary">{round(item.forksCount)}</Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={styles.flexItem}>
          <Text fontWeight="bold" fontSize="subheading" color="textPrimary">{round(item.reviewCount)}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View style={styles.flexItem}>
          <Text fontWeight="bold" fontSize="subheading" color="textPrimary">{round(item.ratingAverage)}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  )
};

export default RepositoryItem;
