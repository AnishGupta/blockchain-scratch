import * as crypto from 'crypto';
class Block{
    readonly hash: string;
    readonly nonce: number;

    constructor(
        readonly index:number,
        readonly previous_hash: string,
        readonly timestamp: number,
        readonly data: string
    ){
        const {nonce, temp_hash} = this.start_mining();
        this.hash = temp_hash;
        this.nonce = nonce;
    }

    private generate_Hash(nonce:number): string{
        let to_be_encrypted = this.index + this.previous_hash + this.timestamp + this.data + nonce;
        return crypto.createHash('sha256').update(to_be_encrypted).digest("hex")
    }

    private start_mining():{nonce:number, temp_hash:string}{
        let nonce:number = 0;
        let temp_hash:string;
        do{
            temp_hash = this.generate_Hash(++nonce);
        }while(temp_hash.startsWith('0000') === false);
        return {nonce, temp_hash};
    }
}

export default Block;