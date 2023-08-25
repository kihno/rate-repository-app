import { useParams } from "react-router-native";
import Text from "./Text";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";

const RepositoryPage = () => {
  const { repositoryId } = useParams();
  const { repository, loading } = useRepository({ repositoryId });
  
  if (loading) {
    return <Text>Loading...</Text>
  }

  if (!repository) return null;

  return (
    <RepositoryItem item={repository} singlePage={true} />
  )
};

export default RepositoryPage;
