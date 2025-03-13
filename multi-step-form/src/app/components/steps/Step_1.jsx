import { Text_input } from "../input/Text_input";

export const Step_1 = ({
  handleSubmit,
  stepCount,
  handleInput,
  error,
  data,
  handleInputChange,
}) => {
  return (
    <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
      <Text_input
        onChange={handleInputChange}
        bold_word={"First name"}
        name="firstName"
        data="data"
        word={"Your first name"}
        error={error}
        errorText={"First name cannot contain special characters or numbers."}
      />
      <Text_input
        bold_word={"Last name"}
        name="Last name"
        word={"Your last name"}
        error={error}
        errorText={"First name cannot contain special characters or numbers."}
      />
      <Text_input
        bold_word={"Username"}
        name="Username"
        word={"Your username"}
        error={error}
        errorText={"This username is already taken. Please choose another one."}
      />
    </form>
  );
};
