import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = ({ repositoryId }) => {
  const variables = { repositoryId };

  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cach-and-network',
    variables,
  });

  return { 
    repository: data?.repository,
    loading,
    error };
};

export default useRepository;
