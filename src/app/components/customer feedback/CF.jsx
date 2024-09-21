
import shef from "../../assets/shef.png"
import eclips from "../../assets/Ellipse2.png"
import dot from "../../assets/dot.png"
import Image from "next/image";
import CFSmall from "./CFSmall";


const CF = () => {
    return (
        <div className="max-w-6xl mx-auto">

            <div className="hidden lg:flex justify-between items-center gap-28 ">

                <div className="flex-1">
                    <h2 className=" font-bold text-[44px] text-[#000000]">
                        Customer <span className=" text-[#AD1519]">Feedback</span>
                    </h2>
                   <div data-aos="fade-right">
                   <p className="text-[#3D3D3D] text-[20px]">I recently dined at your restaurant and wanted to share my experience. The food was absolutely delicious, and I was impressed by the freshness of the ingredients. Each dish was bursting with flavor, and the portion sizes were perfect. The service was quick and efficient, and the staff was incredibly friendly and welcoming.</p>
                    <div className="flex my-4 justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <div>
                                <Image className='rounded-2xl' src={eclips} height={75} width={75} alt="image" />

                            </div>
                            <div>
                                <h4 className="text-[#A52A2A] font-bold text-[24px] "> Tayyab Sohail</h4>
                                <p className="text-black font-medium text-[18px]">UX/UI Designer</p>
                            </div>
                        </div>

                        <Image className='rounded-2xl' src={dot} height={50} width={50} alt="image" />

                    </div>
                   </div>
                </div>

                <div data-aos="fade-up" className="">
                    <Image className='rounded-2xl' src={shef} height={450} width={450} alt="image" />

                </div>
            </div>


            {/* small device  */}
            <div className='block lg:hidden'>
                <CFSmall/>
            </div>

        </div>
    );
};

export default CF;