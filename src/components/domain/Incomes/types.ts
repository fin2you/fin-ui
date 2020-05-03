import { Currency } from "dinero.js";

export interface Income {
  name: string;
  incomeType: string;
  occurrences: {
    day: number;
    months: number[];
  };
  amount: Amount;
  discounts: Discount[];
}

export interface Amount {
  amount: number;
  currency: Currency;
}

export interface Discount {
  amount: Amount;
  discountType: string;
}
