import Image from "next/image";
import { Header } from "./components/Header";
import { Steps } from "./components/Steps";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#F4F4F4] w-screen h-screen flex justify-center items-center px-[480px] pl-[182px] pr-[187px]">
      <div className="w-[480px] h-[655px] p-8 bg-[#FFF] flex flex-col rounded-[8px] justify-between items-start">
        <div>
          <Header></Header>
          {/* <Steps /> */}
        </div>
        {/* <Footer></Footer> */}
      </div>
    </div>
  );
}
