import Navbar from "../Component/Navbar";
import Logo from "../assets/Logo.png";
import HeroImage from "../assets/HeroImage.png";
import HeroImage2 from "../assets/HeroImage2.png";
import Telegram from "../assets/telegram.png";
import Twitter from "../assets/twitter.png";
import Buy from "../assets/Buy.png";
import How from "../assets/HeaderImage.png"; // Assuming this is your background image

const LandingPage = () => {
  const backgroundImage = `url(${How})`; // Use template literal correctly

  return (
    <div className="font-Fjalla">
      <hr className="border-[15px] border-[#FFB041] hidden md:block" />
      <div className="hidden md:block font-Fjalla text-[60px] font-[400] text-white bg-[#79092A] py-[9px] text-center">
        <p>BUY $BUG</p>
      </div>

      <div>
        <Navbar />
      </div>

      <div className="max-w-6xl mx-10 2xl:max-w-7xl md:mx-auto">
        <div className="grid md:flex items-center justify-between gap-[12px]">
          <img src={HeroImage} alt="" />
          <div className="max-w-[450px] max-h-[450px] overflow-hidden rounded-full">
            <img src={Logo} alt="" className="w-full object-fill" />
          </div>
          <img src={HeroImage2} alt="" />
        </div>
      </div>

      <div className="my-[40px] place-items-center grid md:flex items-center justify-center gap-[37px]">
        <img src={Twitter} alt="" />
        <img src={Buy} alt="" />
        <img src={Telegram} alt="" />
      </div>

      <div className="max-w-6xl mx-10 2xl:max-w-7xl md:mx-auto">
        <div
          className="relative text-center my-[60px] bg-cover bg-no-repeat py-[25px]"
          style={{ backgroundImage: backgroundImage }}
        >
          <p className=" font-Fjalla text-[30px] lg:text-[50px] font-[400] text-white ">
            HOW TO BUY $BUG INU
          </p>
          <p className=" text-[18px] lg:text-[25px] font-semibold text-[#FFB041] font-Inter">
            ON A DECENTRALIZED EXCHANGE
          </p>
        </div>

        <div className=" font-Fjalla grid md:grid-cols-2 lg:grid-cols-3 gap-[37px]">
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px]">
            <p className=" text-[#FFB041]">STEP 1</p>
            <li className=" text-[20px] text-white mt-[20px]">
              Download TON Keeper wallet and set up.
            </li>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px]">
            <p className=" text-[#FFB041]">STEP 2</p>
            <li className=" text-left text-[20px] text-white mt-[20px]">
              Fund TON Keeper Wallet with TON from a CEX like MEXC (if Meme is
              required, ensure to input it)
            </li>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px]">
            <p className=" text-[#FFB041]">STEP 3</p>
            <li className="text-left text-[20px] text-white mt-[20px]">
              Once wallet is funded, tap on the in-app browser.
            </li>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px]">
            <p className=" text-[#FFB041]">STEP 4</p>
            <li className=" text-left text-[20px] text-white mt-[20px]">
              Input the DEX url ston.fi
            </li>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px]">
            <p className=" text-[#FFB041]">STEP 5</p>
            <li className=" text-left text-[20px] text-white mt-[20px]">
              Connect your wallet
            </li>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px]">
            <p className=" text-[#FFB041]">STEP 6</p>
            <li className=" text-[20px] text-white text-left my-[20px]">
              Then get the contract address and paste on select BUG beneath.
            </li>
            <li className=" text-left text-[20px] text-white">
              Proceed to swapping
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
