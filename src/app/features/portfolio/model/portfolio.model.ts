import { Stock } from "../../../core/common/entites/stock.entity";
import { User } from "./user.model";

export type Portfolio = {
    id: string;
    user: User;
    totalInvestment: number;
    currentValue: number;
    totalPL: number;
    stocks: Stock[];
}