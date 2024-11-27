import { GraphQLError } from "graphql"
import returnFunding from "../../utils/returnFunding";

const getAllFundings = async ()  => {
    try {
       const fundings = await returnFunding()
       return fundings
    } catch (error) {
        console.error("Error fetching events:", error);
        throw new GraphQLError("Failed to fetch funding events.");
    }

}

export default getAllFundings