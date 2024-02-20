# Ethereum Balance Monitoring Project

This project is designed to monitor the balance of an Ethereum wallet and provide immediate notifications when the balance increases. This is particularly useful in situations where the private key of the wallet has been compromised, but the attacker is not constantly monitoring the wallet's activity.

In such a scenario, while it's possible to abandon the compromised wallet and use a new one, there may be several NFTs listed for sale in the market from the compromised wallet. Directly transferring these NFTs to a new wallet could result in a loss due to the market dynamics. Therefore, it's beneficial to continue using the compromised wallet until the NFTs are sold.

This project helps in such situations by monitoring the balance of the compromised wallet. When an NFT is sold and the balance of the wallet increases, the user is immediately notified. This allows the user to quickly transfer the new balance to a secure wallet before the attacker has a chance to steal it.

## Features

- Monitors the balance of an Ethereum wallet in real-time.
- Provides immediate notifications when the balance increases.
- Helps secure funds in a compromised wallet until NFTs listed for sale are sold.

## Usage

```shell
npm install
node .\balance.js
```

This project is intended for users who have a basic understanding of Ethereum and NFT markets. To use this project, you need to provide the address of the Ethereum wallet you want to monitor. You also need to set up a method for receiving notifications when the balance increases.

Please note that this project does not provide any guarantees of security. It's a tool that can help you manage a compromised wallet, but it's not a substitute for proper security practices. Always keep your private keys secure and never share them with anyone.