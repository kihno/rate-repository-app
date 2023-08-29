import { View, FlatList, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-native';
import { useDebounce } from 'use-debounce';
import { Picker } from '@react-native-picker/picker';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from './ItemSeparator';

import theme from '../theme';
import TextInput from './TextInput';

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: theme.colors.mainBackground
  },
  picker: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: theme.colors.mainBackground,
    borderWidth: 0
  },
  searchbar: {
    padding: 10,
    color: theme.colors.textSecondary,
    backgroundColor: '#ffffff',
    borderRadius: 5
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

export class RepositoryListContainer extends React.Component {

  renderHeader = () => {
    const { sort, setSort, search, setSearch } = this.props;

    return (
      <View style={styles.header}>
        <TextInput style={styles.searchbar} name="search" placeholder="Search" value={search} onChangeText={(value) => setSearch(value)} />
        <SortPicker sort={sort} setSort={setSort} />
      </View>
    );
  };

  render() {
    const { repositories, navigate } = this.props;

    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];

    const handlePress = (id) => {
      navigate(`/${id}`);
    };

    return (
      <FlatList
      style={styles.list}
      data={repositoryNodes}
      ListHeaderComponent={this.renderHeader}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => 
        <Pressable onPress={() => handlePress(item.id)}>
          <RepositoryItem item={item} singlePage={false} />
        </Pressable>
      }
      keyExtractor={item => item.id}
    />
    );
  }
};

const RepositoryList = () => {
  const [sort, setSort] = useState('CREATED_AT DESC');
  const [search, setSearch] = useState('');
  const [searchKeyword] = useDebounce(search, 500);

  const navigate = useNavigate();

  const vars = sort.split(' ');
  const { repositories } = useRepositories({
    orderBy: vars[0],
    orderDirection: vars[1],
    searchKeyword
  });

  return (
    <RepositoryListContainer
      repositories={repositories}
      sort={sort}
      setSort={setSort}
      search={search}
      setSearch={setSearch}
      navigate={navigate}
    />
  );
};

export default RepositoryList;
