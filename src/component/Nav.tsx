import { FaDollarSign } from "react-icons/fa";
import logo from "../assets/logo.png";
interface NavProps {
  coins: number;
};

const Nav = ({coins}:NavProps) => {
  return (
   <div className="bg-amber-400 sticky top-0 z-50">
     <div className="flex justify-between md:container mx-auto md:py-2.5 py-2.5 px-5 md:px-0">
      <div><img src={logo}alt="" className="w-10 h-10" /></div>
      <div className="flex gap-2 justify-center items-center">
        <ul><li><a href="" className="font-medium text-black font-mono text-[15px]">Home</a></li></ul>
        <ul><li><a href=""className="font-medium text-black font-mono text-[15px]">Player</a></li></ul>
        <ul><li><a href=""className="font-medium text-black font-mono text-[15px]">Dream-11</a></li></ul>

      </div>
      <div className="flex justify-center items-center"><h2 className="flex gap-1 items-center justify-center font-bold font-mono text-[15px]"><FaDollarSign />{coins}</h2></div>
     </div>
   </div>
  );
};

export default Nav;