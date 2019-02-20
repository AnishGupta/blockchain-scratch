import Block from "./block";

class BlockChain{
    readonly block: Array<Block> = [];

    constructor(){
        const genesis_block: Block = new Block(0,'0',Date.now(),"This is a genesis block");
        this.block.push(genesis_block);
        console.log(`Creating the Genesis_block
            index: ${genesis_block.index},
            previous_hash: ${genesis_block.previous_hash},
            timestamp: ${genesis_block.timestamp},
            hash: ${genesis_block.hash},
            nonce: ${genesis_block.nonce},
            data: ${genesis_block.data} 
        `)
    }

    public make_block_in_blockchain(data:string): void{
        let make_block: Block = new Block(this.block.length,this.block[this.block.length-1].hash,Date.now(),data);
        this.block.push(make_block);
        console.log(`Creating the ${make_block.index}
            index: ${make_block.index},
            previous_hash: ${make_block.previous_hash},
            timestamp: ${make_block.timestamp},
            hash: ${make_block.hash},
            nonce: ${make_block.nonce},
            data: ${make_block.data} 
        `)
    }

    public get_the_block(index: number):void{
        if(this.block.length >= (index-1)){
            let open_block: Block = this.block[index];
            console.log(`Opening the Block ${index}
                index: ${open_block.index},
                previous_hash: ${open_block.previous_hash},
                timestamp: ${open_block.timestamp},
                hash: ${open_block.hash},
                nonce: ${open_block.nonce},
                data: ${open_block.data} 
            
            `)
        }else{
            console.log("Block Doesnot exits!!!!!");
        }

    }
}

export default BlockChain;