import { useState, useEffect } from 'react';
import Constants from 'expo-constants';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);

    const APOLLO_URI = Constants.manifest.extra.APOLLO_URI;

    const response = await fetch(`${APOLLO_URI}:5000/api/repositories`);
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
