import { Wallet } from "ethers"

export interface createFundingPropeties {
    creator: string,
    fundingName: string,
    target: number,
    unlockTime: number,
    minimumAmount: number
}

export interface createFunding {
    connect(wallet: Wallet): unknown
    createNewFunding: ({creator, fundingName, target, unlockTime, minimumAmount}: createFundingPropeties) => {}
}