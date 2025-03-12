import { FaChevronLeft } from "react-icons/fa";
import { MdOutlineChevronRight } from "react-icons/md";

export const Footer = ({ stepCount, handleNext, handlePrevious }) => {
  return (
    <div className="w-full flex items-center gap-2 pt-15">
      {stepCount > 1 && (
        <button
          className="flex items-center justify-center border h-[44px] w-32 border-[#CBD5E1] px-[10px] py-[12] gap-1 text-[#202124] text-4 font-medium rounded-[8px] cursor-pointer active:bg-gray-200"
          onClick={handlePrevious}
        >
          <FaChevronLeft size={15} /> Back
        </button>
      )}

      <button
        className="flex w-full h-[44px] bg-[#121316] rounded-[6px] px-3 py-2.5 justify-center items-center gap-1 cursor-pointer active:bg-gray-700"
        type="submit"
        onClick={handleNext}
      >
        <p className="text-[rgb(255,255,255)] text-4 font-medium flex items-center">
          Continue {stepCount}/3
          <span>
            <MdOutlineChevronRight size={24} />
          </span>
        </p>
      </button>
    </div>
  );
};
