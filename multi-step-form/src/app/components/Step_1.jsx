import { Text_input } from "./Text_input";

export const Step_1 = ({ handleSubmit, stepCount, handleInput, error }) => {
  return (
    <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
      <Text_input
        bold_word={"First name"}
        word={"Your first name"}
        error={error}
        errorText={"First name cannot contain special characters or numbers."}
      />
      <Text_input
        bold_word={"Last name"}
        word={"Your last name"}
        error={error}
        errorText={"First name cannot contain special characters or numbers."}
      />
      <Text_input
        bold_word={"Username"}
        word={"Your username"}
        error={error}
        errorText={"This username is already taken. Please choose another one."}
      />
    </form>
  );
};
