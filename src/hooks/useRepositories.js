import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (args) => {
  const [repositories, setRepositories] = useState();

  const variables = {
    orderBy: args.orderBy,
    orderDirection: args.orderDirection
  };

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cach-and-network',
    variables,
    onCompleted: () => {
      setRepositories(data.repositories);
    },
  });

  return { repositories, loading, error };
};

export default useRepositories;
