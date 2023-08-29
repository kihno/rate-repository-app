import Review from "./Review";
import ItemSeparator from "./ItemSeparator";
import { FlatList } from "react-native";
import useCurrentUser from "../hooks/useCurrentUser";

const ReviewList = () => {
    // const { data, refetch, fetchMore } = useQuery(GET_CURRENT_USER, {
    //     first: 3,
    //     fetchPolicy: 'cache-and-network',
    //     variables: { includeReviews: true }
    // });

    const { user, refetch, fetchMore } = useCurrentUser({
        first: 3,
        fetchPolicy: 'cache-and-network',
        includeReviews: true,
    });

    if (!user) return null;

    const onEndReach = () => {
        fetchMore();
    };

    const reviewNodes = user.reviews
        ? user.reviews.edges.map((edge) => edge.node)
        : [];

    const userId = user.id;

    return (
        <FlatList
            data={reviewNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <Review review={item} title={item.repository.fullName} userId={userId} refetch={refetch} />}
            keyExtractor={item => item.id}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
        />
    )
};

export default ReviewList;