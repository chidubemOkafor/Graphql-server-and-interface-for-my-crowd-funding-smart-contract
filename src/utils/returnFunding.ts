import { GraphQLError } from "graphql"
import isValidEthereumAddress from "./isAddressValid"
import { contractInterface, fundingContract } from "../config/blockchainConfig"
import { isHexString, toUtf8String } from "ethers"
import { formatToEther } from "./formatToEther"
import { formatDate } from "./formatDate"

interface Funding {
    creator: string
    fundingName: string
    target: string
    unlockTime: string
    minimumAmount: string
    status?: string
}

const returnFunding = async (address: string = ""): Promise<Funding[]> => {
  try {
    if (address && !isValidEthereumAddress(address)) {
      throw new GraphQLError("Invalid Ethereum address")
    }

    const eventFilter = fundingContract.filters.CreateFundingEvent(address || undefined)
    const events = await fundingContract.queryFilter(eventFilter, 0, "latest")

    const eventsArray = events.map(event => {
      const decoded = contractInterface.parseLog(event)
      if (!decoded) {
        console.warn("Skipping null decoded event")
        return null
      }

      const { creator, fundingName, target, unlockTime, minimumAmount, status } = decoded.args

      return {
        creator: creator.toString(),
        fundingName: isHexString(fundingName)? toUtf8String(fundingName) : fundingName,
        target: formatToEther(target),
        unlockTime: unlockTime.toString(),
        minimumAmount: formatToEther(minimumAmount),
        status: status.toString()
      }
    })

    const validEvents = eventsArray.filter(event => event !== null)

    if (address) {
      return validEvents.filter(event => event.creator.toLowerCase() === address.toLowerCase())
    }

    return validEvents
    } catch (error) {
        console.error("Error fetching funding events:", error)
        throw new GraphQLError("Failed to fetch funding events")
    }
}

export default returnFunding