import Image from "next/image";
import wpcu from "../../assets/wpcu.png";
import menu from "../../assets/menu.png"; // Changed to match your assets

const WPCUSmall = () => {
  return (
    <div className="mx-4 w-[90%] md:w-1/2 md:mx-auto flex flex-col justify-center my-6 space-y-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center  md:space-x-10 space-y-6 px-4">

      
        <div data-aos="fade-down" className="w-full  flex justify-center">
          <Image
            className="rounded-2xl"
            src={wpcu}
            height={450}
            width={450}
            alt="Why People Choose Us?"
          />
        </div>

      
        <div  className="w-full  space-y-6">
          <h2 data-aos="fade-left" className="text-[26px] font-semibold text-center text-[#2D2D2D]">
            Why People Choose us?
          </h2>

          {/* Feature 1 */}
          <div data-aos="fade-left" className="flex items-center space-x-4">
            <div className="w-[80px]">
              <Image src={menu} height={80} width={80} alt="Menu" />
            </div>
            <div className="flex-1">
              <h3 className="text-[20px] font-semibold text-black">
                Convenient and Reliable
              </h3>
              <p className="text-[#404040] text-[12px] text-justify">
                Whether you dine in, take out, or order delivery, our service is
                convenient, fast, and reliable, making mealtime hassle-free.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div data-aos="fade-right" className="flex items-center space-x-4">
            <div className="w-[80px]">
              <Image src={menu} height={80} width={80} alt="Variety of Options" />
            </div>
            <div className="flex-1">
              <h3 className="text-[20px] font-semibold text-black">
                Variety of Options
              </h3>
              <p className="text-[#404040] text-[12px] text-justify">
                We offer a wide range of options to suit every taste and craving.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div data-aos="fade-left" className="flex items-center space-x-4">
            <div className="w-[80px]">
              <Image src={menu} height={80} width={80} alt="Eat Burger" />
            </div>
            <div className="flex-1">
              <h3 className="text-[20px] font-semibold text-black">Eat Burger</h3>
              <p className="text-[#404040] text-[12px] text-justify">
                Our burgers are grilled to perfection, with juicy patties and
                flavorful toppings that make every bite a delicious experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WPCUSmall;
