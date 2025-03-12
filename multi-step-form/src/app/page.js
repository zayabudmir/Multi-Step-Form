"use client";
import { Header } from "./components/Header";
import { Step_1 } from "./components/Step_1";
import { Step_2 } from "./components/Step_2";
import { Step_3 } from "./components/Step_3";
import { useState } from "react";
import { End } from "./components/End";
import { Footer } from "./components/Footer";

export default function Home() {
  const [stepCount, setStepCount] = useState(0);

  const handleNextStep = () => {
    setStepCount(stepCount + 1);
  };
  const handlePrevious = () => {
    setStepCount(stepCount - 1);
  };
  const CurrentStep = [Step_1, Step_2, Step_3, End][stepCount];
  return (
    <div className="bg-[#F4F4F4] w-screen h-screen flex justify-center items-center">
      <div className="w-[480px] h-[655px] p-8 bg-[#FFF] flex flex-col justify-between rounded-[8px] items-start">
        <div>
          {stepCount != 3 && <Header />}

          <CurrentStep
            handleSubmit={handleNextStep}
            stepCount={stepCount + 1}
            handlePrevious={handlePrevious}
          />
        </div>
        <Footer
          handleNext={handleNextStep}
          handlePrevious={handlePrevious}
          stepCount={stepCount + 1}
        />
      </div>
    </div>
  );
}
