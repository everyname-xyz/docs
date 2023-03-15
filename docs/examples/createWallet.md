---
sidebar_position: 1
displayed_sidebar: mySidebar
---

# Create Wallet

```javascript
import { setupWallet } from "@everyname/wallet-core";
import defaultOptions from "@everyname/wallet-core/dist/src/walletOptions/defaultOptions"; // Default options

const wallet = setupWallet({
  ...defaultOptions,
});

(async () => {
  await wallet.dispatch.createWallet({
    key: "satoshi",
    mnemonic: "never gonna give you up never gonna let you down never gonna",
    imported: true,
  });
  await wallet.dispatch.unlockWallet({ key: "satoshi" });
  await wallet.dispatch.changeActiveNetwork({ network: "mainnet" });
  console.log(wallet.state); // State will include default accounts
})();
```

## Swap tokens

This functionality allows to easily swap tokens within and across blockchains with the given network fees/handling, if applicable provider related fees, and out-of-the-box validation and error handling.

The current built in providers are a mix of AMMs and bridges/protocols to enable a broad variety of swap pairs. They come with different trade-offs like supported networks, liquidity, security, fees, MIN/MAX, or slippage:

- Uniswap AMM Swaps
- 1inch DEX Aggregator Swaps
- Sovryn FastBTC Relay
- Sovryn AMM Swaps
- Thorchain AMM Swaps
- Astroport AMM Swaps
- Jupiter AMM Swaps
- Hop Exchange Cross-chain Swaps
- deBridge Cross-Chain Swaps
- Li.Fi Advance Bridge & DEX Aggregation Protocol

```javascript
newSwap({
  network: activeNetwork,
  walletId: activeWalletId,
  quote,
  fee: fromNetworkFee,
  claimFee: toNetworkFee,
  feeLabel: fromGasSpeed,
  claimFeeLabel: toGasSpeed,
});
```

:::info
Only providers which can execute will be returned with a quote, and the best rate automatically set as default.

Gas/speed and potential provider fees are automatically calculated and deducted from available token/wallet balance. If cross-chain both network gas fees needs be covered.
:::

Please note that swap providers will be in accordance with selected/available networks. \*/}
