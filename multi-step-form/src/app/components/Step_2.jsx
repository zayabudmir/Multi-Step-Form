import { Text_input } from "./Text_input";

export const Step_2 = ({ handleSubmit }) => {
  return (
    <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
      <div>
        <Text_input bold_word={"Email"} word={"Your email"} />
        <Text_input bold_word={"Phone number"} word={"Your phone number"} />
        <Text_input bold_word={"Password"} word={"Your password"} />
        <Text_input bold_word={"Confirm password"} word={"Confirm password"} />
      </div>
    </form>
  );
};
