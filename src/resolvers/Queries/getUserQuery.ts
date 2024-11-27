import { GraphQLError } from "graphql"
import isValidEthereumAddress from "../../utils/isAddressValid"
import { User } from "../../mongooseschema/userSchema"

const getUser = async(_:any, 
    {
    address
    }: {
        address: string
    }
) => {
    try {
        if(!isValidEthereumAddress(address)) {
            console.log("invalid address")
            return {
                message: "this is not a valid ethereum address"
            }
        }

        const user = await User.findOne({address})
        if (!user) {
            throw new GraphQLError("user was not found")
        }

        return user
        
    } catch (error) {
        console.error(error)
        throw new GraphQLError(`error fetching user: ${error}`)
    }
}


export default getUser