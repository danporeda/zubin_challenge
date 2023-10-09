import { ethers } from 'hardhat';
import 'dotenv/config';
import { HelloZubin__factory } from '../typechain-types';

const CONTRACT_ADDRESS = '0xd1f3235b5C085319f9a25168C6bC45aB38ADf910';

async function main() {
  const pkey = process.env.PRIVATE_KEY;
  //   if (!pkey || pkey.length != 64) throw new Error('Invalid private key');
  const rpcUrl = process.env.RPC_URL;
  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const deployer = new ethers.Wallet(pkey, provider);

  const helloZubinFactory = new HelloZubin__factory(deployer);
  const helloZubinContract = helloZubinFactory.attach(CONTRACT_ADDRESS);
  //   const callHello = await helloZubinContract.connect(deployer).sayHello('dan');
  const contractAddress = await helloZubinContract.getAddress();
  console.log(`${contractAddress}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
