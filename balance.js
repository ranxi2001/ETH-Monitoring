import { ethers } from "ethers";

// 填上你的Alchemy API Key
const ALCHEMY_ID = '输入你的API Key' 
const provider = new ethers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_ID}`)

// 你想要监控的以太坊地址
const monitoredAddress = "0x9367593aa2a10ffb88de99b70fa5d7217a7b3202";

let lastBalance;

async function checkBalance() {
    const balance = ethers.getBigInt(await provider.getBalance(monitoredAddress));
    const etherBalance = ethers.formatEther(balance);
    console.log(typeof balance);
    console.log(`ETH Balance of onefly: ${etherBalance} ETH`);

    // Ensure lastBalance is a BigNumber type, then compare it with the current balance
    if (lastBalance && !balance == lastBalance) {
        console.log(`Balance change detected: ${etherBalance}`);
        // Add your notification code here, such as sending an email
    }
    // Save the current balance as a BigNumber type for the next comparison
    lastBalance = balance;
}

// 每100秒检查一次余额
setInterval(checkBalance, 100000);