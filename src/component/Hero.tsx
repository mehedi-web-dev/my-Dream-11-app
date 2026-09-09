import banner from "../assets/banner-main.png";
const Hero = () => {
  return (
    <div className="bg-gray-300">
      <div className="md:container mx-auto md:py-15 py-10 font-mono px-5 flex flex-col justify-center items-center space-y-2 ">
        <img src={banner} alt=""  className="w-52 h-52"/>
               <h3 className="text-black font-bold text-[30px] md:w-[75%] md:text-6xl text-center  ">Assemble Your Ultimate Dream 11 Cricket Team </h3>
      </div>
    </div>
  );
};

export default Hero;