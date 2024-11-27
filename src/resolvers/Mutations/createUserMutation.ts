import { GraphQLError } from "graphql"
import isValidEthereumAddress from "../../utils/isAddressValid"
import { User } from "../../mongooseschema/userSchema"
import getFunding from "../Queries/getFundingQuery"


// type User {
//     id: ID!
//     name: String!
//     address: String!
//     funding: [Funding!]
// }

interface IUser {
    id?: string
    name: string,
    address: string,
    email: string
}



const createUser = async(
    _: any,
    {name, address, email} : IUser
) => {
    try {
        if (name == "" || address == "" || email == "" ) {
            throw new GraphQLError("invalid credentails")
        }

        if (!isValidEthereumAddress(address)) {
            throw new GraphQLError("invalid address")
        }

        const Email = await User.findOne({email})
        const Name = await User.findOne({name})
        const Address = await User.findOne({address})

        if(Email) {
            throw new GraphQLError("user with email already exists")
        }

        if(Address) {
            throw new GraphQLError("user with wallet address already exists");
        }

        if (Name) {
            throw new GraphQLError("user with name already exists")
        }
        
        new User<IUser>({
            name,
            address,
            email
        }).save()

        const user = await User.findOne({email})

        if(!user) throw new Error("user not founding after saving")

        const { _id, name: userName, address: userAddress, email: userEmail } = user;

        const funding = await getFunding(_,{address})

        return {
            id: _id,
            name: userName,
            address: userAddress,
            email: userEmail,
            funding: funding
        }
     
    } catch (error) {
        console.error("Error creating user:", error)
        throw new GraphQLError("failed to return error")
    }
}

export default createUser