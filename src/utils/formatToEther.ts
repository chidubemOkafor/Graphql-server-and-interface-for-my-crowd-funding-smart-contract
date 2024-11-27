import { formatEther } from "ethers";

export const formatToEther = (valueInWei: string) => {
    const weiValue = BigInt(valueInWei)
    const etherValue = formatEther(weiValue)
    return etherValue
}

