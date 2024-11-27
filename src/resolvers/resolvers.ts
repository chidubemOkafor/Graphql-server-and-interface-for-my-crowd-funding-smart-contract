import getAllFundings from "./Queries/getAllFundingsQuery";
import getFunding from "./Queries/getFundingQuery";
import createUser from "./Mutations/createUserMutation";
import getAllUsers from "./Queries/getAllUsersQuery";
import getUser from "./Queries/getUserQuery"

export const resolvers = {
    Query: {
        getAllFundings,
        getFunding,
        getAllUsers,
        getUser
    },
    Mutation: {
        createUser
    }

};
