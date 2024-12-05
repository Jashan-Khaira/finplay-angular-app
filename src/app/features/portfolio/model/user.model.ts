import { Wallet } from "./wallet.model";

export type User = {
    id: string;
    username: string;
    email: string;
    password: string;
    portfolio: string;
    wallet: Wallet;
}