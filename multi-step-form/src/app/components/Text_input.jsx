export const Text_input = ({ bold_word, word, error, errorText }) => {
  return (
    <div className="text-[#334155] text-[14px] font-semibold mt-3">
      <p>
        {bold_word}
        <span className="text-[#E14942] text-[14px] font-semibold"> *</span>
      </p>
      <input
        className="flex w-[412px] h-[40px] mt-2 p-3 items-center border rounded-2xl border-[#CBD5] text-[#8B8E95 text-[16px] font-normal"
        type="text"
        placeholder={word}
      />
      {error && (
        <p
          className="text-[#E14942] text-[14px] font-normal pt-2"
          style={{ text: error != "" }}
        >
          {errorText}
        </p>
      )}
    </div>
  );
};
