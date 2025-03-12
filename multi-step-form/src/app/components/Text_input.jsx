export const Text_input = ({ bold_word, word }) => {
  return (
    <div className="text-[#334155] text-[14px] font-semibold mt-3">
      <p>
        {bold_word}
        <span className="text-[#E14942] text-[14px] font-semibold mt-2">
          {" "}
          *
        </span>
      </p>
      <input
        className="flex w-[412px] h-[40px] p-[12px] items-center border rounded-[8px] border-[#CBD5] text-[#8B8E95 text-[16px] font-normal mt-2"
        type="text"
        placeholder={word}
      />
    </div>
  );
};
