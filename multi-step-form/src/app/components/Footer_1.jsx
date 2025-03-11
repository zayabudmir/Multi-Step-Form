import Image from "next/image";
import { MdOutlineChevronRight } from "react-icons/md";

export const Footer_1 = () => {
  return (
    <div className="flex w-[416px] h-[44px] px-[10px] py-3 justify-center items-center rounded-[6px] bg-[#121316]">
      <p className="text-[rgb(255,255,255)] text-4 font-medium flex items-center">
        Continue 1/3
        <span>
          <MdOutlineChevronRight />
        </span>
      </p>
    </div>
  );
};
