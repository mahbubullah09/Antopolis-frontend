import Image from "next/image";
import Banner from "./components/Banner";
import { Poppins, Sanchez, Inter, Roboto, Nunito } from '@next/font/google';
import About from "./components/about/About";
import WPCU from "./components/people choose us/WPCU";


export default function Home() {
  return (
    <div className="">
      <Banner/>      

      <About/>
      <WPCU/>

      
    </div>
  );
}
