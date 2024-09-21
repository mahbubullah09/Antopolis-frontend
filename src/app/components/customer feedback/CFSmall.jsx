import shef from "../../assets/shef.png"
import eclips from "../../assets/Ellipse2.png"
import dot from "../../assets/dot.png"
import Image from "next/image";

const CFSmall = () => {
    return (
        <div>


            <div className=" mx-4 w-[90%] md:w-1/2 md:mx-auto flex flex-col-reverse ">

                <div className="">
                    <h2 data-aos="fade-down" className=" font-bold text-[26px] text-[#000000] text-center">
                        Customer <span className=" text-[#AD1519]">Feedback</span>
                    </h2>
                    <div data-aos="fade-up">
                        <p className="text-[#3D3D3D] text-[12px] text-justify">I recently dined at your restaurant and wanted to share my experience. The food was absolutely delicious, and I was impressed by the freshness of the ingredients. Each dish was bursting with flavor, and the portion sizes were perfect. The service was quick and efficient, and the staff was incredibly friendly and welcoming.</p>
                        <div className="flex my-4 justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div>
                                    <Image className='rounded-2xl' src={eclips} height={50} width={50} alt="image" />

                                </div>
                                <div>
                                    <h4 className="text-[#A52A2A] font-bold text-[18px] "> Tayyab Sohail</h4>
                                    <p className="text-black font-medium text-[12px]">UX/UI Designer</p>
                                </div>
                            </div>

                            <Image className='rounded-2xl' src={dot} height={40} width={40} alt="image" />

                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className=" my-4">
                    <Image className='rounded-2xl' src={shef} height={450} width={450} alt="image" />

                </div>
            </div>

        </div>
    );
};

export default CFSmall;