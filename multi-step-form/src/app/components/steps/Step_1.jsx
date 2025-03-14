import { Text_input } from "../input/Text_input";

export const Step_1 = ({ handleSubmit, error, handleInputChange }) => {
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
        type={"Text"}
      />
      <Text_input
        onChange={handleInputChange}
        bold_word={"Last name"}
        name="lastName"
        data="data"
        word={"Your last name"}
        error={error}
        errorText={"First name cannot contain special characters or numbers."}
        type={"Text"}
      />
      <Text_input
        onChange={handleInputChange}
        bold_word={"Username"}
        name="userName"
        data="data"
        word={"Your username"}
        error={error}
        errorText={"This username is already taken. Please choose another one."}
        type={"Text"}
      />
    </form>
  );
};
