import Image from "next/image";

export const Header = () => {
  return (
    <div>
      <img className="w-[60px] h-[60px]" src="/logo.png"></img>
      <h1 className="text-[#202124] text-[26px] font-semibold">Join Us! 😎</h1>
      <p className="text-[#8E8E8E] text-[18px] font-normal text-center">
        Please provide all current information accurately.
      </p>
    </div>
  );
};
