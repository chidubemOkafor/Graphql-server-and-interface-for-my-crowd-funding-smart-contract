import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema/schema';
import { resolvers } from './resolvers/resolvers';
import connectToMongodb from "./config/mongodbConfig"

connectToMongodb()

const server = new ApolloServer({
    typeDefs,
    resolvers
});

(async() => {
    try {
        const {url} = await startStandaloneServer(server, {
            listen: { port: 4000 }
        });
        console.log("server is listening on port 4000")
    } catch (error) {
        console.error(error)
    }
})()
