import { Alert, Pressable, StyleSheet, View } from "react-native";
import { format } from 'date-fns';
import Text from "./Text";
import theme from "../theme";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../hooks/useDeleteReview";

const Review = ({ review, title, userId, refetch }) => {
    const styles = StyleSheet.create({
      flexContainer: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 10
      },
      cardContainer: {
        padding: 20,
      },
      flexItem: {
        flexDirection: 'column',
        padding: 10,
        flex: 1,
        flexWrap: 'wrap'
      },
      ratingContainer: {
        height: 40,
        width: 40,
        margin: 10,
        justifyContent: 'center',
        alignContent: "center",
        flexWrap: 'wrap',
        borderColor: theme.colors.primary,
        borderRadius: 20,
        borderWidth: 2,
        borderStyle: 'solid',
      },
      rating: {
        fontWeight: 'bold',
        color: theme.colors.primary,
        alignSelf: 'center'
      },
      name: {
        fontWeight: 'bold',
        paddingBottom: 2
      },
      date: {
        color: theme.colors.textSecondary,
        paddingBottom: 10
      },
      text: {
        flex: 1,
        flexWrap: 'wrap'
      },
      buttonContainer: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        justifyContent: 'space-around',
        padding: 10
      },
      repoButton: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 5,
        backgroundColor: theme.colors.primary
      },
      deleteButton: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 5,
        backgroundColor: theme.colors.error
      }
    });

    const navigate = useNavigate();
    const [deleteReview] = useDeleteReview();

    const viewRepo = () => {
      navigate(`/${review.repository.id}`);
    };

    const alert = () => {
      Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'Delete', onPress: () => deleteAndRefetch()},
      ]);  
    };

    const deleteAndRefetch = () => {
      deleteReview({ deleteReviewId: review.id });
      refetch();
    };
  
    return (
      <View>
        <View style={styles.flexContainer}>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{review.rating}</Text>
          </View>
          <View style={styles.flexItem}>
            <Text style={styles.name}>{title}</Text>
            <Text style={styles.date}>{format(new Date(review.createdAt), 'MM.dd.yyyy')}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.text}>{review.text}</Text>
            </View>
          </View>
        </View>
        {userId &&
            <View style={styles.buttonContainer}>
              <Pressable style={styles.repoButton} onPress={viewRepo}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>View repository</Text>
              </Pressable>
              <Pressable style={styles.deleteButton} onPress={alert}>
                <Text style={{ color: '#fff',fontWeight: 'bold' }}>Delete review</Text>
              </Pressable>
            </View>
          }
      </View>
    )
  };

  export default Review;