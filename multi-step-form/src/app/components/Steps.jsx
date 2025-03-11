import Image from "next/image";
import { FaRegImage } from "react-icons/fa";
import { Input } from "./Input";

export const Steps = () => {
  return (
    // 1111111111111111111111
    // <div className="text-[#334155] text-[14px] font-semibold mt-6">
    //   <div>
    //     <p>
    //       First name
    //       <span className="text-[#E14942] text-[14px] font-semibold mt-2">
    //         {" "}
    //         *
    //       </span>
    //     </p>
    //     <input
    //       className="flex w-[412px] h-[40px] p-[12px] items-center border rounded-[8px] border-[#CBD5] text-[#8B8E95 text-[16px] font-normal mt-2"
    //       type="text"
    //       placeholder="Your first name"
    //     />
    //   </div>
    //   <div className="text-[#334155] text-[14px] font-semibold mt-3">
    //     <p>
    //       Last name
    //       <span className="text-[#E14942] text-[14px] font-semibold"> *</span>
    //     </p>
    //     <input
    //       className="flex w-[412px] h-[40px] p-[12px] items-center border rounded-[8px] border-[#CBD5] text-[#8B8E95 text-[16px] font-normal mt-2"
    //       type="text"
    //       placeholder="Your last name"
    //     />
    //   </div>
    //   <div className="text-[#334155] text-[14px] font-semibold mt-3">
    //     <p>
    //       Username
    //       <span className="text-[#E14942] text-[14px] font-semibold"> *</span>
    //     </p>
    //     <input
    //       className="flex w-[412px] h-[40px] p-[12px] items-center border rounded-[8px] border-[#CBD5] text-[#8B8E95 text-[16px] font-normal mt-2"
    //       type="text"
    //       placeholder="Your Username"
    //     />
    //   </div>
    // </div>

    // 222222222222222222222222
    // <div className="text-[#334155] text-[14px] font-semibold mt-6 ">
    //   <div>
    //     <p>
    //       Email
    //       <span className="text-[#E14942] text-[14px] font-semibold"> *</span>
    //     </p>
    //     <input
    //       className="flex w-[412px] h-[40px] p-[12px] items-center border rounded-[8px] border-[#CBD5] text-[#8B8E95 text-[16px] font-normal mt-2"
    //       type="text"
    //       placeholder="Your email"
    //     />
    //   </div>
    //   <div className="text-[#334155] text-[14px] font-semibold mt-3">
    //     <p>
    //       Phone number
    //       <span className="text-[#E14942] text-[14px] font-semibold"> *</span>
    //     </p>
    //     <input
    //       className="flex w-[412px] h-[40px] p-[12px] items-center border rounded-[8px] border-[#CBD5] text-[#8B8E95 text-[16px] font-normal mt-2"
    //       type="text"
    //       placeholder="Your phone number"
    //     />
    //   </div>
    //   <div className="text-[#334155] text-[14px] font-semibold mt-3">
    //     <p>
    //       Password
    //       <span className="text-[#E14942] text-[14px] font-semibold"> *</span>
    //     </p>
    //     <input
    //       className="flex w-[412px] h-[40px] p-[12px] items-center border rounded-[8px] border-[#CBD5] text-[#8B8E95 text-[16px] font-normal mt-2"
    //       type="text"
    //       placeholder="Your password"
    //     />
    //   </div>
    //   <div className="text-[#334155] text-[14px] font-semibold mt-3">
    //     <p>
    //       Confirm password
    //       <span className="text-[#E14942] text-[14px] font-semibold"> *</span>
    //     </p>
    //     <input
    //       className="flex w-[412px] h-[40px] p-[12px] items-center border rounded-[8px] border-[#CBD5] text-[#8B8E95 text-[16px] font-normal mt-2"
    //       type="text"
    //       placeholder="Confirm password"
    //     />
    //   </div>
    // </div>

    <div>
      <div className="text-[#334155] text-[14px] font-semibold mt-3">
        <p>
          Date of birth
          <span className="text-[#E14942] text-[14px] font-semibold"> *</span>
        </p>
        <input
          className=" w-full h-[44px] p-[12px] border rounded-[8px] border-[#CBD5] mt-2"
          type="date"
          placeholder=""
        />
      </div>
      <div className="text-[#334155] text-[14px] font-semibold mt-3">
        <p>
          Profile image
          <span className="text-[#E14942] text-[14px] font-semibold"> *</span>
        </p>

        <div className="relative size-fit bg-red-200 flex flex-col items-center justify-center">
          <Input className="opacity-0" id="img" />
          <div className="absolute">
            <div className="flex flex-col items-center justify-center">
              <FaRegImage />
              <label htmlFor="img">Add image</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 33333333333
