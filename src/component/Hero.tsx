
import banner from "../assets/banner-main.png";
const Hero = () => {

  const handleClaim=():void=>{
   window.open("https://mehedihasanbd.com", "_blank");
  }
  return (
    <div className="bg-gray-300">
      <div className="md:container mx-auto md:py-15 py-10 font-mono px-5 flex flex-col justify-center items-center space-y-2 ">
        <img src={banner} alt=""  className="w-52 h-52"/>
               <h3 className="text-black font-bold text-[30px] md:w-[75%] md:text-6xl text-center  ">Assemble Your Ultimate Dream 11 Cricket Team </h3>
               <p className="text-black font-mono text-center font-normal text-[16px] md:text-[17px]">Beyond Boundaries Beyond Limits</p>
               <button onClick={handleClaim} className="btn btn-warning rounded-none">Claim Free Credit</button>
      </div>
    </div>
  );
};

export default Hero;