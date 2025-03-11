import Image from "next/image";
import { Header_1 } from "./components/Header_1";
import { Header_2 } from "./components/Header_2";
import { Step_1 } from "./components/Step_1";
import { Step_2 } from "./components/Step_2";
import { Step_3 } from "./components/Step_3";
import { Footer_1 } from "./components/Footer_1";
import { Footer_2 } from "./components/Footer_2";

export default function Home() {
  return (
    <div className="bg-[#F4F4F4] w-screen h-screen flex justify-center items-center">
      <div className="w-[480px] h-[655px] p-8 bg-[#FFF] flex flex-col rounded-[8px] justify-between items-start">
        <div>
          <Header_1></Header_1>
          {/* <Step_1 /> */}
          <Step_2 />
          {/* <Step_3 /> */}
        </div>
        {/* <Footer_1></Footer_1> */}
        <Footer_2></Footer_2>
      </div>
    </div>
  );
}

// togsgol

// export default function Home() {
//   return (
//     <div className="bg-[#F4F4F4] w-screen h-screen flex justify-center items-center">
//       <div className="w-[480px] h-[193px] p-8 bg-[#FFF] flex flex-col rounded-[8px] justify-between items-start">
//         <div>
//           <Header_2></Header_2>
//         </div>
//       </div>
//     </div>
//   );
// }
