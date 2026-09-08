import logo from "../assets/logo.png";


const Nav = () => {
  return (
   <div className="bg-amber-400">
     <div className="flex justify-between md:container mx-auto md:py-2.5 py-2.5 px-5 md:px-0">
      <div><img src={logo}alt="" className="w-10 h-10" /></div>
      <div className="flex gap-2 justify-center items-center">
        <ul><li><a href="" className="font-medium text-black font-mono text-[15px]">Home</a></li></ul>
        <ul><li><a href=""className="font-medium text-black font-mono text-[15px]">Player</a></li></ul>
        <ul><li><a href=""className="font-medium text-black font-mono text-[15px]">Dream-11</a></li></ul>
      </div>
     </div>
   </div>
  );
};

export default Nav;