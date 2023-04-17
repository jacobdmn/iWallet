import { FiLink, FiSend } from "react-icons/fi";
import { AiOutlineCopy } from "react-icons/ai";
import RoundedButton from "./common/button/Rounded";
import formatThousands from "format-thousands";
import { useRouter } from "next/router";

interface WalletHeaderProps {
  accountCredit: number;
  usdEquivalent: number;
}

const WalletHeader: React.FC<WalletHeaderProps> = ({
  accountCredit,
  usdEquivalent,
}) => {
  const router = useRouter();
  const onSendClick = () => router.push("/send"),
    onRequestClick = () => {},
    onSwapClick = () => {},
    onBridgeClick = () => {};
  return (
    <div className='flex flex-col justify-center items-center border-b border-omega-700 px-2 pt-16 pb-8'>
      <div className='flex items-center justify-center rounded-full bg-white w-16 h-16 mb-4'>
        <img src='/images/eth.svg' alt='ETH' className='object-fit' />
      </div>
      <h1 className='text-3xl font-bold text-white mb-2'>
        {accountCredit} ETH
      </h1>
      <p className='text-lg text-white mb-8'>
        {formatThousands(usdEquivalent, { separator: "," })} $
      </p>
      <div className='flex justify-around w-full'>
        <RoundedButton
          icon={<FiSend />}
          label='send'
          onClick={onSendClick || (() => {})}
          variant='contained'
        />
        <RoundedButton
          label='receive'
          icon={<FiLink />}
          onClick={onRequestClick || (() => {})}
        />
        <RoundedButton
          label='copy'
          icon={<AiOutlineCopy />}
          onClick={onSwapClick || (() => {})}
        />
      </div>
    </div>
  );
};

export default WalletHeader;
