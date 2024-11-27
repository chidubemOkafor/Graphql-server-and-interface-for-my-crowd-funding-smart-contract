import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema/schema';
import { resolvers } from './resolvers/resolvers';
import connectToMongodb from "./config/mongodbConfig"

connectToMongodb()


// dotenv.config();

// const SEPOLIA_TESTNET_URL = process.env.SEPOLIA_TESTNET_URL;

// const provider = new ethers.JsonRpcProvider(SEPOLIA_TESTNET_URL);
// const fundingContractAddress = "0x5091418cF113CeDBDbea8E85d2161b96cDA5f85d"; // Deployed contract address
// const FundingContractABI = abi;
// const fundingContract = new ethers.Contract(fundingContractAddress, FundingContractABI, provider);





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
