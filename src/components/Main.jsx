import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import RepositoryPage from './RepositoryPage';
import CreateReview from './CreateReview';
import theme from '../theme';
import SignUp from './SignUp';
import ReviewList from './ReviewList';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/myreviews" element={<ReviewList />} />
        <Route path='/review' element={<CreateReview />} exact />
        <Route path="/:repositoryId" element={<RepositoryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
