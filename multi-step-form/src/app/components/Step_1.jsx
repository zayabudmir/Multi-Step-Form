import Image from "next/image";
import { Input_1 } from "./Input_1";

export const Step_1 = () => {
  return (
    <div className="mt-6">
      <Input_1 bold_word={"First name"} word={"Your first name"} />
      <Input_1 bold_word={"Last name"} word={"Your last name"} />
      <Input_1 bold_word={"Username"} word={"Your username"} />
    </div>
  );
};
