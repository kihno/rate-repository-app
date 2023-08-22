import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cach-and-network',
    onCompleted: () => {
      setRepositories(data.repositories);
    },
  });

  return { repositories, loading, error };
};

export default useRepositories;
