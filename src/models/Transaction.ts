export type Transaction = {
  from: string;
  to: string;
  value: number;
  currency: string;
  direction: "sent" | "received" | "pending";
};

export type Transactions = Transaction[];
