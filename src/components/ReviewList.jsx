import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/queries";
import Review from "./Review";
import ItemSeparator from "./ItemSeparator";
import { FlatList } from "react-native";

const ReviewList = () => {
    const { data, refetch } = useQuery(GET_CURRENT_USER, {
        fetchPolicy: 'cache-and-network',
        variables: { includeReviews: true }
    });

    if (!data) return null;

    const reviewNodes = data.me.reviews
        ? data.me.reviews.edges.map((edge) => edge.node)
        : [];
    
    const userId = data.me.id;

    return (
        <FlatList
            data={reviewNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <Review review={item} title={item.repository.fullName} userId={userId} refetch={refetch} />}
            keyExtractor={item => item.id}
        />
    )
};

export default ReviewList;