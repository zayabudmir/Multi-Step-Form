import { Text_input } from "../input/Text_input";

export const Step_2 = ({ handleSubmit, error, handleInputChange }) => {
  return (
    <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
      <Text_input
        onChange={handleInputChange}
        bold_word={"Email"}
        name="email"
        data="data"
        word={"Your email"}
        error={error}
        errorText={"Please provide a valid email address."}
        type={"Text"}
      />
      <Text_input
        onChange={handleInputChange}
        bold_word={"Phone number"}
        name="phoneNumber"
        data="data"
        word={"Your phone number"}
        error={error}
        errorText={"Please enter a valid phone number."}
        type={"Number"}
      />
      <Text_input
        onChange={handleInputChange}
        bold_word={"Password"}
        name="password"
        data="data"
        word={"Your password"}
        error={error}
        errorText={"Password must include letters and numbers."}
        type={"Text"}
      />
      <Text_input
        onChange={handleInputChange}
        bold_word={"Confirm password"}
        name="confirmPassword"
        data="data"
        word={"Confirm password"}
        error={error}
        errorText={"Passwords do not match. Please try again."}
        type={"Text"}
      />
    </form>
  );
};
