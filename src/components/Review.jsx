import { StyleSheet, View } from "react-native";
import { format } from 'date-fns';
import Text from "./Text";
import theme from "../theme";

const Review = ({ review, title }) => {
    const styles = StyleSheet.create({
      flexContainer: {
        flexDirection: 'row',
        backgroundColor: '#ffffff'
      },
      cardContainer: {
        padding: 20,
      },
      flexItem: {
        padding: 10,
        flex: 1,
        flexWrap: 'wrap'
      },
      ratingContainer: {
        height: 40,
        width: 40,
        margin: 10,
        justifyContent: 'center',
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
        marginBottom: 2
      },
      date: {
        color: theme.colors.textSecondary,
        marginBottom: 5
      }
    });
  
    return (
      <View style={styles.flexContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{review.rating}</Text>
        </View>
        <View style={styles.flexItem}>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.date}>{format(new Date(review.createdAt), 'MM.dd.yyyy')}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    )
  };

  export default Review;