import { Transaction } from "@/models/Transaction";
import { shortenAddress, formatEthValue } from "@/utils/functions";
import { IconType } from "react-icons";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import { RiArrowUpDownLine, RiArrowRightSLine } from "react-icons/ri";

type TransactionType = "sent" | "received" | "pending";

const getIcon = (type: TransactionType): IconType => {
  switch (type) {
    case "sent":
      return AiOutlineArrowUp;
    case "received":
      return AiOutlineArrowDown;
    case "pending":
      return AiOutlineCloudDownload;
    default:
      return RiArrowUpDownLine;
  }
};

const TransactionCard = ({ direction, from, value }: Transaction) => {
  const Icon = getIcon(direction);

  const getColor = () => {
    switch (direction) {
      case "sent":
        return "text-red-500";
      case "received":
        return "text-green-500";
      case "pending":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className='flex items-center justify-between p-4 border-b-[1.5px] border-black/10'>
      <div className='rounded-full p-3 bg-black/30'>
        <Icon size={24} className='text-gray-500' />
      </div>
      <div className='flex flex-col justify-center'>
        <p className='text-gray-400 capitalize text-lg font-normal'>
          {direction}
        </p>
        <p className='text-sm font-light text-gray-600'>{`From: ${shortenAddress(
          from
        )}`}</p>
      </div>
      <p className={`text-lg text-sm font-medium text-end ${getColor()}`}>
        {direction === "received" ? "+" : direction === "sent" ? "-" : ""}
        {`${formatEthValue(value)}`}
        {" ETH"}
      </p>
    </div>
  );
};

export default TransactionCard;
