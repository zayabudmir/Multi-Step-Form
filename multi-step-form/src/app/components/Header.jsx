import Image from "next/image";

export const Header = () => {
  return (
    // 1111111111111111111111
    // <div>
    //   <img className="w-[60px] h-[60px]" src="/logo.png"></img>
    //   <h1 className="text-[#202124] text-[26px] font-semibold">Join Us! 😎</h1>
    //   <p className="text-[#8E8E8E] text-[18px] font-normal">
    //     Please provide all current information accurately.
    //   </p>
    // </div>

    // 222222222222222222
    <div className="w-[400px] h-[80px]">
      <img className="w-[60px] h-[60px]" src="/logo.png"></img>
      <h1 className="text-[#202124] text-[26px] font-semibold">
        You're All Set 🔥
      </h1>
      <p className="text-[#8E8E8E] text-[18px] font-normal">
        We have received your submission. Thank you!
      </p>
    </div>
  );
};
