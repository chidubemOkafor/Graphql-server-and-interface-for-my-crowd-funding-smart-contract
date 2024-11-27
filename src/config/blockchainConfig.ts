import { ethers, Interface } from "ethers";
import dotenv from "dotenv"
import { abi } from "../abi/createFunding";
import { CreateFunding } from "../Interface/typechain-types/CreateFunding";


dotenv.config();

const SEPOLIA_TESTNET_URL = process.env.SEPOLIA_TESTNET_URL;

const provider = new ethers.JsonRpcProvider(SEPOLIA_TESTNET_URL);
const fundingContractAddress = "0x2519fB31841287D4524AdD74c79117651F1024e9";
const FundingContractABI = abi;
const fundingContract = new ethers.Contract(fundingContractAddress, FundingContractABI, provider) as unknown as CreateFunding;

const contractInterface = new Interface(FundingContractABI);

export { fundingContract, provider, contractInterface };

