"use client";
import { Header, Step_1, Step_2, Step_3, End, Footer } from "./components";
import { useState } from "react";

export default function Home() {
  const [stepCount, setStepCount] = useState(0);
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    firstName: " ",
    lastName: " ",
    userName: " ",
    email: " ",
    password: "",
    confirmPassword: "",
    birthday: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setData((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  };
  const handleNextStep = () => {
    if (stepCount === 0) {
      if (data.firstName.length < 4) {
        setError(true);
        return;
      }
      if (data.lastName.length < 4) {
        setError(true);
        return;
      }
      if (data.userName.length < 4) {
        setError(true);
        return;
      }
      setStepCount(stepCount + 1);
    } else if (stepCount === 1) {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!regex.test(data.email)) {
        setError(true);
        console.log("this is working1");

        return;
      }
      if (data.phoneNumber.length < 8) {
        setError(true);
        console.log("this is working2");

        return;
      }
      if (data.password !== data.confirmPassword) {
        setError(true);

        console.log(data.password == data.confirmPassword);

        return;
      }
      if (data.confirmPassword !== data.password) {
        setError(true);
        console.log("this is working4");

        return;
      }
      console.log("this is working");

      setStepCount(stepCount + 1);
    }
    // } else if (stepCount === 2) {
    //   if (data.age) {
    //     setError(true);
    //   }
    //   setStepCount(stepCount + 1);
    // }
  };
  console.log(data.birthday);

  const handlePrevious = () => {
    setStepCount(stepCount - 1);
  };
  const CurrentStep = [Step_1, Step_2, Step_3, End][stepCount];
  return (
    <div className="bg-[#F4F4F4] w-screen h-screen flex justify-center items-center">
      <div className="w-[480px] p-8 bg-[#FFF] flex flex-col justify-between rounded-2xl items-start">
        <div className="flex flex-col h-full">
          {stepCount != 3 && <Header />}
          <CurrentStep
            handleSubmit={handleNextStep}
            stepCount={stepCount + 1}
            handlePrevious={handlePrevious}
            handleInputChange={handleInputChange}
            error={error}
            data={data}
          />
        </div>
        {stepCount < 3 && (
          <Footer
            handleNext={handleNextStep}
            handlePrevious={handlePrevious}
            stepCount={stepCount + 1}
          />
        )}
      </div>
    </div>
  );
}

//sdfghjm,cv
