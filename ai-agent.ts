const { AgentKit, CdpWalletProvider } = require("@coinbase/agentkit");

async function runCoinVelocityAI() {
  try {
    console.log("-----------------------------------------");
    console.log("📡 STARTING ENGINE: CoinVelocityAI");

    const config = {
      apiKeyName: "organizations/2fadae73-0810-4b03-8603-8db26f7c9104/apiKeys/f6870f5d-6643-4f65-a375-c4473356ba3b",
      apiKeyPrivateKey: "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIFNrJ0ABcEvKfN7SNOcSfccbzttF09Yn6G0yb/3rJzHdoAoGCCqGSM49\nAwEHoUQDQgAEin4hd5F7spCIa+8KAvHFEIEitJdbPBpEhJysfl5gAxEXhUucwGkd\nZb2UZ8DKtZ0qQl/PBXWsFf0RFJh73+31GA==\n-----END EC PRIVATE KEY-----",
      networkId: "base-mainnet",
    };

    // Use direct Provider initialization
    const walletProvider = await CdpWalletProvider.configureWithWallet(config);

    const agentkit = await AgentKit.from({
      walletProvider,
      actionProviders: [], 
    });

    console.log("🚀 CoinVelocityAI: ONLINE");
    console.log("🤖 MONITORING: Farcaster Mentions");
    console.log("📍 PARTNER FEE: 10% to 0x1909...5bD1Fec");
    console.log("-----------------------------------------");
    
    return agentkit;
  } catch (error) {
    console.error("❌ STARTUP ERROR:", error.message);
  }
}

runCoinVelocityAI();