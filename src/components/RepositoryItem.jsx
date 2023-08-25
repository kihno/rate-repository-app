import { View, Image, StyleSheet, Pressable } from "react-native";
import * as Linking from 'expo-linking';
import Text from "./Text";
import Counter from "./Counter";

const RepositoryItem = ({ item, singlePage }) => {
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
    button: {
      backgroundColor: "#0366d6",
      textAlign: 'center',
      padding: 10,
      borderRadius: 5,
    },
    nameCard: {
      marginLeft: 15,
      display: "flex",
      alignItems: "flex-start"
    }
  });

  return (
    <View testID="repositoryItem" style={styles.cardContainer}>
      <View style={styles.flexContainer}>
        <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.nameCard}>
          <Text fontWeight="bold" fontSize="subheading" color="textPrimary" style={styles.textMargin}>{item.fullName}</Text>
          <Text color="textSecondary" style={styles.textMargin}>{item.description}</Text>
          <View style={styles.language}>
            <Text color="textHeading" style={styles.language}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.flexContainer}>
        <Counter title="Stars" count={item.stargazersCount} />
        <Counter title="Forks" count={item.forksCount} />
        <Counter title="Reviews" count={item.reviewCount} />
        <Counter title="Rating" count={item.ratingAverage} />
      </View>
      {singlePage &&
        <Pressable style={styles.button} onPress={() => Linking.openURL(item.url)}>
          <Text color="textHeading" fontWeight='bold'>Open in GitHub</Text>
        </Pressable>
      }
    </View>
  )
};

export default RepositoryItem;
