import bg from '../../assets/bg.png'
import Image from "next/image";
import tm from "../../assets/TM.png"

const TM = () => {
    return (
        <div>

            <section className="my-44 relative py-16 bg-cover bg-center" style={{ backgroundImage: `url(${bg.src})` }}>
                {/* Red overlay */}
                <div className="absolute inset-0 bg-red-600 opacity-80"></div>

                {/* Content */}
                <div className="relative container mx-auto">
                    <h2 className="text-5xl font-bold text-white text-center mb-4">
                        Team Member
                    </h2>
                    <p className="text-white text-center mb-8 max-w-[480px] mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
                    </p>

                    <div>
                        <div className="absolute overflow-hidden  -bottom-28 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
                           <div className="w-[200px] h-[190px] relative">
                           <Image className='' src={tm} height={200} width={200} alt="image" />
                           
                           </div>

                        </div>


                    </div>
                   
                </div>
            </section>

        </div>
    );
};

export default TM;