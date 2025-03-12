import { Text_input } from "./Text_input";

export const Step_1 = ({ handleSubmit, stepCount, handleInput }) => {
  return (
    <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
      <Text_input bold_word={"First name"} word={"Your first name"} />
      <Text_input bold_word={"Last name"} word={"Your last name"} />
      <Text_input bold_word={"Username"} word={"Your username"} />
    </form>
  );
};
