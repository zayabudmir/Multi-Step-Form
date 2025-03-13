"use client";
import { Header } from "./components/Header";
import { Step_2 } from "./components/steps/Step_2";
import { Step_3 } from "./components/steps/Step_3";
import { useState } from "react";
import { End } from "./components/End";
import { Footer } from "./components/Footer";
import { Step_1 } from "./components/steps/Step_1";

export default function Home() {
  const [stepCount, setStepCount] = useState(0);
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setData((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  };

  // const handleOnChangeInput = () => {
  //   setData((previousValues) => ({
  //     ...previousValues,
  //     [name]: value,
  //   }));
  // };

  const handleNextStep = () => {
    if (data.firstName.length < 8) {
      setError(true);
    } else {
      setStepCount(stepCount + 1);
      setError(false);
    }
  };

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

//
