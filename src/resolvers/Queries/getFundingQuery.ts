import returnFunding from "../../utils/returnFunding"
import { GraphQLError } from "graphql"

const getFunding = async (
    _: any, 
    {address}: {address: string}) => {
   try {
    console.log(address)
        const funding = await returnFunding(address)
        console.log(funding)
        return funding
    } catch (error) {
        console.error("Error fetching events:", error)
        throw new GraphQLError("failed to return error")
    }

}

export default getFunding;