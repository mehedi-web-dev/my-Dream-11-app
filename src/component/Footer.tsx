
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="bg-blue-950">
      <div className="md:container md:mx-auto md:py-15 py-10   px-5">
        <div className="flex flex-col justify-center items-center"><img src={logo} alt="" />
        <p className="md:text-[15px] text-[12px] text-white font-normal font-mono text-center">We are a passionate team dedicated to providing the best services to our customers.</p></div>
      </div>
    </div>
  );
};

export default Footer;