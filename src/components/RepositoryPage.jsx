import { FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import { format } from 'date-fns';
import Text from "./Text";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import ItemSeparator from "./ItemSeparator";
import theme from "../theme";

const RepositoryInfo = ({ repository }) => {

  return (
    <View>
      <RepositoryItem item={repository} singlePage={true} />
      <ItemSeparator />
    </View>
  )
};

const ReviewItem = ({ review }) => {
  const styles = StyleSheet.create({
    flexContainer: {
      flexDirection: 'row',
      backgroundColor: '#ffffff'
    },
    cardContainer: {
      padding: 20,
    },
    flexItem: {
      padding: 10,
      flex: 1,
      flexWrap: 'wrap'
    },
    ratingContainer: {
      height: 40,
      width: 40,
      margin: 10,
      justifyContent: 'center',
      flexWrap: 'wrap',
      borderColor: theme.colors.primary,
      borderRadius: 20,
      borderWidth: 2,
      borderStyle: 'solid',
    },
    rating: {
      fontWeight: 'bold',
      color: theme.colors.primary,
      alignSelf: 'center'
    },
    name: {
      fontWeight: 'bold',
      marginBottom: 2
    },
    date: {
      color: theme.colors.textSecondary,
      marginBottom: 5
    }
  });

  return (
    <View style={styles.flexContainer}>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{review.rating}</Text>
      </View>
      <View style={styles.flexItem}>
        <Text style={styles.name}>{review.user.username}</Text>
        <Text style={styles.date}>{format(new Date(review.createdAt), 'MM.dd.yyyy')}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  )
};

const RepositoryPage = () => {
  const { repositoryId } = useParams();
  const { repository, loading } = useRepository({ repositoryId });
  
  if (loading) {
    return <Text>Loading...</Text>
  }

  if (!repository) return null;

  const reviews = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  )
};

export default RepositoryPage;
