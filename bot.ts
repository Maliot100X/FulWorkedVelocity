const { AgentKit, CdpWalletProvider } = require("@coinbase/agentkit");

async function initializeVelocityBot() {
  try {
    const config = {
      apiKeyName: process.env.CDP_API_KEY_NAME,
      apiKeyPrivateKey: (process.env.CDP_API_KEY_PRIVATE_KEY || "").replace(/\\n/g, '\n'),
      networkId: "base-mainnet",
    };

    const walletProvider = await CdpWalletProvider.configureWithWallet(config);

    const agentkit = await AgentKit.from({
      walletProvider,
      actionProviders: [], 
    });

    console.log("-----------------------------------------");
    console.log("🚀 VELOCITY X AI BOT: INITIALIZED");
    console.log("🤖 STATUS: Listening for Farcaster Mentions");
    console.log("📍 ADMIN: 0x1909...5bD1Fec");
    console.log("-----------------------------------------");
    
    return agentkit;
  } catch (error) {
    console.error("BOT STARTUP ERROR:", error.message);
  }
}

if (require.main === module) {
  initializeVelocityBot();
}

module.exports = { initializeVelocityBot };