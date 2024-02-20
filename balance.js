import { ethers } from "ethers";
// balance.js
import { sendEmail } from './mailer.js'; // 确保路径正确，注意使用完整的文件名（包括扩展名）


// 填上你的Alchemy API Key
const ALCHEMY_ID = 'your_alchemy_api_key_here' 
const provider = new ethers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_ID}`)

// 你想要监控的以太坊地址
const monitoredAddress = "0x要监控的以太坊地址";

let lastBalance;

async function checkBalance() {
    const balance = ethers.getBigInt(await provider.getBalance(monitoredAddress));
    const etherBalance = ethers.formatEther(balance);    
    console.log(`ETH Balance of xxx: ${etherBalance} ETH`);

    // Ensure lastBalance is a BigNumber type, then compare it with the current balance
    if (lastBalance && !balance == lastBalance) {
        console.log(`Balance change detected: ${etherBalance}`);
        // Add your notification code here, such as sending an email
        // 检测到余额变化，发送邮件通知
        sendEmail('ETH Balance Change Notification', `Balance change detected for xxx: ${etherBalance} ETH`);
    }
    // Save the current balance as a BigNumber type for the next comparison
    lastBalance = balance;
}

// 每100秒检查一次余额
setInterval(checkBalance, 100000);