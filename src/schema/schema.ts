
// funding represents a funding campaign

export const typeDefs = `#graphql 
    type Funding {
        creator: String!
        fundingName: String!
        target: String!
        unlockTime: String!
        minimumAmount: String!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        address: String!
    }

    type ContributionMade {
        funder: String!
        amount: Int!
    }

    type SeedSent {
        creator: String!
        amount: Int!
    }

    type SeedReversed {
        initialFunder: String!
        amount: Int!
    }

    type Query {
        getUser(address: String!): User
        getAllUsers: [User]
        getAllFundings: [Funding]
        getFunding(address: String!): [Funding]
    }

    type Mutation {
        createUser(name: String!, email: String!, address: String!): User
        makeContribution(fundingId: String!, funder: String!, amount: Int!): ContributionMade
    } 

`