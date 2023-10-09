import { ethers } from 'hardhat';
import 'dotenv/config';
import { HelloZubin__factory } from '../typechain-types';

async function main() {
  const pkey = process.env.PRIVATE_KEY;
  // if (!pkey) throw new Error('no private key');
  // if (pkey.length != 64) throw new Error('Invalid private key');
  const rpcUrl = process.env.RPC_URL;
  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const deployer = new ethers.Wallet(pkey, provider);

  const helloZubinFactory = new HelloZubin__factory(deployer);
  const helloZubinContract = await helloZubinFactory.deploy();
  await helloZubinContract.waitForDeployment();
  const contractAddress = await helloZubinContract.getAddress();
  console.log(`The contract address is ${contractAddress}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
