import Image from "next/image";

export const Steps = () => {
  return (
    <div className="text-[#334155] text-[14px] font-semiboldgi">
      <div>
        <p>First name</p>
        <input
          className="flex w-[412px] h-[40px] p-[12px] items-center border rounded-[8px] border-[#CBD5] text-[#8B8E95 text-[16px] font-normal"
          type="text"
          placeholder="Your first name"
        />
      </div>
      <div className="text-[#334155] text-[14px] font-semibold">
        <p>Last name</p>
        <input
          className="flex w-[412px] h-[40px] p-[12px] items-center border rounded-[8px] border-[#CBD5] text-[#8B8E95 text-[16px] font-normal"
          type="text"
          placeholder="Your last name"
        />
      </div>
      <div className="text-[#334155] text-[14px] font-semibold">
        <p>Username</p>
        <input
          className="flex w-[412px] h-[40px] p-[12px] items-center border rounded-[8px] border-[#CBD5] text-[#8B8E95 text-[16px] font-normal"
          type="text"
          placeholder="Your username"
        />
      </div>
    </div>
  );
};
