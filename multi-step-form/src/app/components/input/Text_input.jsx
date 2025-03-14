export const Text_input = ({
  bold_word,
  word,
  error,
  errorText,
  name,
  onChange,
  type,
}) => {
  return (
    <div className="text-[#334155] text-[14px] font-semibold mt-3">
      <p>
        {bold_word}
        <span className="text-[#E14942] text-[14px] font-semibold"> *</span>
      </p>
      <input
        name={name}
        onChange={onChange}
        className={`${
          error && "border-red-400"
        } flex w-[412px] h-[40px] mt-2 p-3 items-center border rounded-2xl border-[#CBD5] text-[#8B8E95 text-[16px] font-normal`}
        type={type}
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
