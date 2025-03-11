import Image from "next/image";

export const Footer = ({ text }) => {
  return (
    <div className="flex w-[416px] h-[44px] px-[10px] py-3 justify-center items-center rounded-[6px] bg-[#121316]">
      <p className="text-[#FFF] text-4 font-medium">
        Continue{text}
        <img src="chevron_rigth" alt="" />
      </p>
    </div>
  );
};
