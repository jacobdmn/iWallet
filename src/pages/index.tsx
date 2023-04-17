import React from "react";
import TransactionCard from "../components/TransactionCard";
import { transactions } from "@/utils/dummy";
import { Transactions } from "@/models/Transaction";
import WalletHeader from "@/components/WalletHeader";

type ActivityPageProps = {
  transactions: Transactions;
};

const ActivityPage: React.FC<ActivityPageProps> = () => {
  return (
    <div className='min-h-screen'>
      <div className='max-w-2xl mx-auto'>
        <div className='flex flex-col'>
          <div>
            <WalletHeader accountCredit={4.2} usdEquivalent={122431} />
          </div>
          {transactions.map((transaction, index) => (
            <TransactionCard key={index} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
