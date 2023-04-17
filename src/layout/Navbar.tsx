import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiOutlineHistory,
  AiOutlineSend,
  AiOutlineSetting,
} from "react-icons/ai";

const links = [
  {
    href: "/",
    icon: <AiOutlineHistory size={24} />,
    text: "Activity",
  },
  {
    href: "/send",
    icon: <AiOutlineSend size={24} />,
    text: "Send Money",
  },
  {
    href: "/settings",
    icon: <AiOutlineSetting size={24} />,
    text: "Settings",
  },
];

const MobileNavbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className='sticky bottom-0 left-0 right-0 bg-black/80 shadow-lg flex justify-around py-4 rounded-full px-4'>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`flex flex-col gap-1 items-center ${
            router.pathname === link.href
              ? "text-beta-400 hover:text-beta-300"
              : "text-omega-400 hover:text-omega-300"
          } font-semibold `}>
          {link.icon}
          <span className='text-sm mt-1'>{link.text}</span>
        </Link>
      ))}
    </nav>
  );
};

export default MobileNavbar;
