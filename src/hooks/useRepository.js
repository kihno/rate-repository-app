import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = ({ repositoryId }) => {
  const [repository, setRepository] = useState();

  const variables = { repositoryId };

  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cach-and-network',
    variables,
    onCompleted: () => {
      setRepository(data.repository);
    },
  });

  return { repository, loading, error };
};

export default useRepository;
