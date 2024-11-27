import { GraphQLError } from "graphql"
import { User } from "../../mongooseschema/userSchema"

const getAllUsers = async() => {
    try {
        const user = await User.find()
        return user
    } catch (error) {
        console.error(error)
        throw new GraphQLError("error fetching user from database")
    }
}

export default getAllUsers