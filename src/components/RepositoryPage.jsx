import { FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import Text from "./Text";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import Review from "./Review";
import ItemSeparator from "./ItemSeparator";

const RepositoryInfo = ({ repository }) => {
  return (
    <View>
      <RepositoryItem item={repository} singlePage={true} />
      <ItemSeparator />
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
      style={{backgroundColor: '#fff'}}
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <Review review={item} title={item.user.username} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  )
};

export default RepositoryPage;
