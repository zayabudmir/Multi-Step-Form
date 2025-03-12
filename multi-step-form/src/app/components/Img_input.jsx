export const Img_input = ({ id, className }) => {
  return (
    <input
      id={id}
      className={
        `flex w-[416px] h-[180px] min-h-[80px] p-[16px] flex-col justify-center items-center border rounded-[8px] border-[#CBD5] mt-2 ` +
        className
      }
      type="file"
    />
  );
};
