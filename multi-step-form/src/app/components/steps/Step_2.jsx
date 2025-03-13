import { Text_input } from "../input/Text_input";

export const Step_2 = ({ handleSubmit, error }) => {
  return (
    <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
      <div>
        <Text_input
          bold_word={"Email"}
          word={"Your email"}
          error={error}
          errorText={"Please provide a valid email address."}
        />
        <Text_input
          bold_word={"Phone number"}
          word={"Your phone number"}
          error={error}
          errorText={"Please enter a valid phone number."}
        />
        <Text_input
          bold_word={"Password"}
          word={"Your password"}
          error={error}
          errorText={"Password must include letters and numbers."}
        />
        <Text_input
          bold_word={"Confirm password"}
          word={"Confirm password"}
          error={error}
          errorText={"Passwords do not match. Please try again."}
        />
      </div>
    </form>
  );
};
