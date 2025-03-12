import { FaRegImage } from "react-icons/fa";
import { Img_input } from "./Img_input";

export const Step_3 = ({ handleSubmit }) => {
  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className="text-[#334155] text-[14px] font-semibold">
        <p>
          Date of birth
          <span className="text-[#E14942] text-[14px] font-semibold"> *</span>
        </p>
        <input
          className=" w-full h-[44px] p-[12px] border rounded-[8px] border-[#CBD5]"
          type="date"
        />
      </div>
      <div className="text-[#334155] text-[14px] font-semibold mt-3">
        <p>
          Profile image
          <span className="text-[#E14942] text-[14px] font-semibold"> *</span>
        </p>
        <div className="relative size-fit bg-[#F4F4F4] flex flex-col items-center mt-3 justify-center rounded-[6px]">
          <Img_input className="opacity-0" id="img" />
          <div className="absolute">
            <div className="flex flex-col items-center justify-center">
              <FaRegImage />
              <label htmlFor="img">Add image</label>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </form>
  );
};
