import BlockChain from "./blockchain";
console.log("Started")
const bc:BlockChain = new BlockChain();
bc.make_block_in_blockchain("A paid to B");
bc.make_block_in_blockchain("B paid to C");
bc.make_block_in_blockchain("C paid to D");
bc.make_block_in_blockchain("D paid to A");
bc.make_block_in_blockchain("D paid to B");
