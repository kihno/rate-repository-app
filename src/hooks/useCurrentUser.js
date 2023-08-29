import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/queries";

const useCurrentUser = (variables) => {
    const { data, loading, fetchMore, refetch, ...result } = useQuery(GET_CURRENT_USER, {
        fetchPolicy: 'cach-and-network',
        variables,
    });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;

        if (!canFetchMore) {
            return;
        }

        fetchMore({
            variables: {
            after: data.repository.reviews.pageInfo.endCursor,
            ...variables,
            },
        });
    };

    return {
        user: data?.me,
        fetchMore: handleFetchMore,
        refetch,
        loading,
        ...result,
      };
};

export default useCurrentUser;