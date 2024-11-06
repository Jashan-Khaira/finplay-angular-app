export class ServerExpection extends Error {
    status: number;
    constructor(message: string, status: number) {
        super(message);
        this.status = status;
        this.name = 'ServerExpection';
    }    
}