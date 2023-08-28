import { FlatList, Pressable, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import { useNavigate } from 'react-router-native';
import ItemSeparator from './ItemSeparator';
import { useState } from 'react';
import theme from '../theme';

const styles = StyleSheet.create({
  picker: {
    padding: 10,
    backgroundColor: theme.colors.mainBackground,
    borderWidth: 0
  },
  list: {
    backgroundColor: '#ffffff'
  }
})

const SortPicker = ({ sort, setSort }) => {
  return (
    <Picker
      style={styles.picker}
      selectedValue={sort}
      onValueChange={(value) =>
        setSort(value)
      }
    >
      <Picker.Item label="Latest repositories" value="CREATED_AT DESC" />
      <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE DESC" />
      <Picker.Item label="Lowest rated repositories" value="RATING_AVERAGE ASC" />
    </Picker>
  )
}

export const RepositoryListContainer = ({ repositories, sort, setSort }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const navigate = useNavigate();
  const handlePress = (id) => {
    navigate(`/${id}`);
  };

  return (
    <FlatList
      style={styles.list}
      data={repositoryNodes}
      ListHeaderComponent={() => <SortPicker sort={sort} setSort={setSort} />}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => 
        <Pressable onPress={() => handlePress(item.id)}>
          <RepositoryItem item={item} singlePage={false} />
        </Pressable>
      }
      keyExtractor={item => item.id}
    />
  );
};

const RepositoryList = () => {
  const [sort, setSort] = useState('CREATED_AT DESC');

  const vars = sort.split(' ');

  const { repositories } = useRepositories({
    orderBy: vars[0],
    orderDirection: vars[1],
  });

  return (
    <RepositoryListContainer repositories={repositories} sort={sort} setSort={setSort} />
  );
};

export default RepositoryList;
