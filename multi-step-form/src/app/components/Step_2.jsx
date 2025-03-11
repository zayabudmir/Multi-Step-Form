import Image from "next/image";
import { Input_1 } from "./Input_1";

export const Step_2 = () => {
  return (
    <div className="mt-6">
      <Input_1 bold_word={"Email"} word={"Your email"} />
      <Input_1 bold_word={"Phone number"} word={"Your phone number"} />
      <Input_1 bold_word={"Password"} word={"Your password"} />
      <Input_1 bold_word={"Confirm password"} word={"Confirm password"} />
    </div>
  );
};
