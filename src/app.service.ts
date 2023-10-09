import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import * as contractJson from './assets/helloZubin.json';
import * as dotenv from 'dotenv';

dotenv.config();

const CONTRACT_ADDRESS = '0xd1f3235b5C085319f9a25168C6bC45aB38ADf910';

@Injectable()
export class AppService {
  rpcUrl = process.env.RPC_URL;
  provider: ethers.providers.Provider;
  contract: ethers.Contract;

  constructor() {
    this.provider = new ethers.providers.JsonRpcProvider(this.rpcUrl);
    this.contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      contractJson.abi,
      this.provider,
    );
  }

  getContractAddress(): string {
    return this.contract.address;
  }

  async getHello(name: string): Promise<string> {
    const response = await this.contract.sayHello(name);
    await response.wait();
    return response;
  }

  async viewEvents(): Promise<Array<any>> {
    const currentBlock = await this.provider.getBlockNumber();
    const events = await this.contract.queryFilter(
      'helloSir',
      currentBlock - 10000,
      currentBlock,
    );
    return events;
  }
}
