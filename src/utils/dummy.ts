import { Transactions } from "@/models/Transaction";

export const transactions: Transactions = [
  {
    from: "0x1234567890123456789012345678901234567890",
    to: "0x0987654321098765432109876543210987654321",
    value: 1.23456789,
    currency: "ETH",
    direction: "sent",
  },
  {
    from: "0x0987654321098765432109876543210987654321",
    to: "0x1234567890123456789012345678901234567890",
    value: 0.98765432,
    currency: "ETH",
    direction: "received",
  },
  {
    from: "0x1234567890123456789012345678901234567890",
    to: "0x13579bdf02468aceeca13579bdf02468aceeca13",
    value: 9.87654321,
    currency: "BTC",
    direction: "sent",
  },
  {
    from: "0x13579bdf02468aceeca13579bdf02468aceeca13",
    to: "0x1234567890123456789012345678901234567890",
    value: 0.01234567,
    currency: "BTC",
    direction: "received",
  },
];
