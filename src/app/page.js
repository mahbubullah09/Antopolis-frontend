import Image from "next/image";
import Banner from "./components/Banner";
import { Poppins, Sanchez, Inter, Roboto, Nunito } from '@next/font/google';
import About from "./components/about/About";
import WPCU from "./components/people choose us/WPCU";
import BestDish from "./components/best dishes/BestDish";
import CF from "./components/customer feedback/CF";
import TM from "./components/team member/TM";


export default function Home() {
  return (
    <div className="">
      <Banner/>      

      <About/>
      <WPCU/>
      <BestDish/>
      <CF/>
      
      <TM/>
      
    </div>
  );
}
