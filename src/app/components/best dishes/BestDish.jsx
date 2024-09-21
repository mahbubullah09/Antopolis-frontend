import Image from "next/image";
import bd1 from "../../assets/bd1.png"
import bd2 from "../../assets/bd2.png"
import bd3 from "../../assets/bd3.png"
import bd4 from "../../assets/bd4.png"
import bd5 from "../../assets/bd5.png"
import bd6 from "../../assets/bd6.png"
import BestDishSmall from "./BestDishSmall";



const BestDish = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="text-center py-8 hidden lg:block">
                <h2 className="text-[44px] font-bold mb-4">Our best Seller Dishes</h2>
                <p className="text-[20px] text-[#5C5C5C] max-w-[70%] mx-auto mb-10">
                    Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomatoes all tossed in your choice of dressing.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                   
                    {/* first card  */}
                    <div className="bg-white shadow-md rounded-b-2xl overflow-hidden">
                        <Image src={bd1} height={300} width={420} alt="image" />

                        <div className="px-[20px] mx-auto">
                            <div className='flex justify-between items-center  '>
                                <h3 className=" font-medium text-[26px] my-6">Breakfast Food</h3>
                                <button className='bg-[#F03328] text-white text-[18px] rounded-full px-6 py-2'> Buy Now</button>
                            </div>
                            <div className="flex justify-between items-center mt-2 mb-4">
                                <div className="text-yellow-500">

                                    <span >⭐⭐⭐⭐⭐</span>

                                </div>
                                <p className="text-[30px] font-bold text-[#000000]">$230</p>
                            </div>


                        </div>
                    </div>
                    {/* second card  */}
                    <div className="bg-white shadow-md rounded-b-2xl overflow-hidden">
                        <Image src={bd2} height={300} width={420} alt="image" />

                        <div className="max-px-[20px] mx-auto">
                            <div className='flex justify-between items-center  '>
                                <h3 className=" font-medium text-[26px] my-6">Health Breakfast</h3>
                                <button className='bg-[#F03328] text-white text-[18px] rounded-full px-6 py-2'> Buy Now</button>
                            </div>
                            <div className="flex justify-between items-center mt-2 mb-4">
                                <div className="text-yellow-500">

                                    <span >⭐⭐⭐⭐⭐</span>

                                </div>
                                <p className="text-[30px] font-bold text-[#000000]">$230</p>
                            </div>


                        </div>
                    </div>
                    {/* third card  */}
                    <div className="bg-white shadow-md rounded-b-2xl overflow-hidden">
                        <Image src={bd3} height={300} width={420} alt="image" />

                        <div className="px-[20px] mx-auto">
                            <div className='flex justify-between items-center  '>
                                <h3 className=" font-medium text-[26px] my-6">Breakfast Food</h3>
                                <button className='bg-[#F03328] text-white text-[18px] rounded-full px-6 py-2'> Buy Now</button>
                            </div>
                            <div className="flex justify-between items-center mt-2 mb-4">
                                <div className="text-yellow-500">

                                    <span >⭐⭐⭐⭐⭐</span>

                                </div>
                                <p className="text-[30px] font-bold text-[#000000]">$230</p>
                            </div>


                        </div>
                    </div>
                    {/* forth card  */}
                    <div className="bg-white shadow-md rounded-b-2xl overflow-hidden">
                        <Image src={bd4} height={300} width={420} alt="image" />

                        <div className="px-[20px] mx-auto">
                            <div className='flex justify-between items-center  '>
                                <h3 className=" font-medium text-[26px] my-6">Breakfast Food</h3>
                                <button className='bg-[#F03328] text-white text-[18px] rounded-full px-6 py-2'> Buy Now</button>
                            </div>
                            <div className="flex justify-between items-center mt-2 mb-4">
                                <div className="text-yellow-500">

                                    <span >⭐⭐⭐⭐⭐</span>

                                </div>
                                <p className="text-[30px] font-bold text-[#000000]">$230</p>
                            </div>


                        </div>
                    </div>
                    {/* fifth card  */}
                    <div className="bg-white shadow-md rounded-b-2xl overflow-hidden">
                        <Image src={bd5} height={300} width={420} alt="image" />

                        <div className="px-[20px] mx-auto">
                            <div className='flex justify-between items-center  '>
                                <h3 className=" font-medium text-[26px] my-6">Breakfast Food</h3>
                                <button className='bg-[#F03328] text-white text-[18px] rounded-full px-6 py-2'> Buy Now</button>
                            </div>
                            <div className="flex justify-between items-center mt-2 mb-4">
                                <div className="text-yellow-500">

                                    <span >⭐⭐⭐⭐⭐</span>

                                </div>
                                <p className="text-[30px] font-bold text-[#000000]">$230</p>
                            </div>


                        </div>
                    </div>
                    {/* sixth card  */}
                    <div className="bg-white shadow-md rounded-b-2xl overflow-hidden">
                        <Image src={bd6} height={300} width={420} alt="image" />

                        <div className="px-[20px] mx-auto">
                            <div className='flex justify-between items-center  '>
                                <h3 className=" font-medium text-[26px] my-6">Breakfast Food</h3>
                                <button className='bg-[#F03328] text-white text-[18px] rounded-full px-6 py-2'> Buy Now</button>
                            </div>
                            <div className="flex justify-between items-center mt-2 mb-4">
                                <div className="text-yellow-500">

                                    <span >⭐⭐⭐⭐⭐</span>

                                </div>
                                <p className="text-[30px] font-bold text-[#000000]">$230</p>
                            </div>


                        </div>
                    </div>


                </div>
            </div>

            <div className='blcok lg:hidden'>
                <BestDishSmall/>
            </div>
        </div>
    );
};

export default BestDish;