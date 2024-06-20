import Navbar from "../Component/Navbar";
import Logo from "../assets/Logo.png";
import HeroImage from "../assets/HeroImage.png";
import HeroImage2 from "../assets/HeroImage2.png";
import Telegram from "../assets/telegram.png";
import Twitter from "../assets/twitter.png";
import Buy from "../assets/Buy.png";
import How from "../assets/HeaderImage.png";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  const backgroundImage = `url(${How})`;
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    AOS.init({
      duration: 1000,
      once: true,
    });
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="font-Fjalla">
      <hr className="border-[15px] border-[#FFB041] hidden md:block" />
      <div className="hidden md:block font-Fjalla text-[60px] font-[400] text-white bg-[#79092A] py-[9px] text-center">
        <p>BUY $BUG</p>
      </div>
      <div>
        <Navbar />
      </div>
      <div
        className="max-w-6xl mx-10 2xl:max-w-7xl md:mx-auto"
        data-aos="fade-up"
      >
        <div className="grid md:flex items-center justify-between gap-[12px]">
          <img
            src={HeroImage}
            alt=""
            data-aos="fade-up"
            style={{ pointerEvents: "none" }}
          />
          <div className="">
            <div
              className="max-w-[450px] max-h-[450px] overflow-hidden rounded-full "
              style={{ pointerEvents: "none" }}
            >
              <img
                src={Logo}
                alt=""
                className="w-full object-fill"
                data-aos="fade-down"
                style={{ pointerEvents: "none" }}
              />
            </div>
            <img
              src={Buy}
              alt=""
              className=" md:hidden my-[20px] h-[60px] mx-auto"
            />
          </div>
          <img
            src={HeroImage2}
            alt=""
            data-aos="fade-right"
            style={{ pointerEvents: "none" }}
          />
        </div>
      </div>

      <div
        className="my-[40px] place-items-center flex items-center justify-center gap-[37px]"
        id="buy"
        data-aos="fade-up"
      >
        <img src={Twitter} alt="" data-aos="" className=" animate-bounce" />
        <img src={Buy} alt="" className=" hidden md:block" />
        <img src={Telegram} alt="" className=" animate-bounce" />
      </div>
      <div
        className="max-w-6xl mx-[10px] 2xl:max-w-7xl md:mx-auto"
        data-aos="fade-up"
      >
        <div
          className="relative text-center my-[60px] bg-cover bg-no-repeat py-[25px]"
          style={{ backgroundImage: backgroundImage, pointerEvents: "none" }}
        >
          <p
            className=" font-Fjalla text-[30px] lg:text-[50px] font-[400] text-white"
            id="how"
          >
            HOW TO BUY $BUG INU
          </p>
          <p className=" text-[18px] lg:text-[25px] font-semibold text-[#FFB041] font-Inter">
            ON A DECENTRALIZED EXCHANGE
          </p>
        </div>

        <div className=" font-Fjalla grid md:grid-cols-2 lg:grid-cols-3 gap-[37px]">
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px] ">
            <p className=" text-[#FFB041] text-[25px]">STEP 1</p>
            <li className=" text-[18px] text-white mt-[20px] text-left">
              Download TON Keeper wallet and set up.
            </li>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px]">
            <p className=" text-[#FFB041] text-[25px]">STEP 2</p>
            <li className=" text-left text-[18px] text-white mt-[20px]">
              Fund TON Keeper Wallet with TON from a CEX like MEXC (if Meme is
              required, ensure to input it)
            </li>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px]">
            <p className="text-[25px] text-[#FFB041]">STEP 3</p>
            <li className="text-left text-[18px] text-white mt-[20px]">
              Once wallet is funded, tap on the in-app browser.
            </li>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px]">
            <p className=" text-[25px] text-[#FFB041]">STEP 4</p>
            <li className=" text-left text-[18px] text-white mt-[20px]">
              Input the DEX url ston.fi
            </li>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px]">
            <p className="text-[25px] text-[#FFB041]">STEP 5</p>
            <li className=" text-left text-[18px] text-white mt-[20px]">
              Connect your wallet
            </li>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px]">
            <p className="text-[25px] text-[#FFB041]">STEP 6</p>
            <li className=" text-[18px] text-white text-left my-[20px]">
              Then get the contract address and paste on select $BUG beneath.
            </li>
            <li className=" text-left text-[18px] text-white">
              Proceed to swapping
            </li>
          </div>
        </div>
      </div>
      <div
        className="max-w-6xl mx-[10px] 2xl:max-w-7xl md:mx-auto"
        data-aos="fade-up"
      >
        <div
          className="relative text-center my-[60px] bg-cover bg-no-repeat py-[25px]"
          style={{ backgroundImage: backgroundImage, pointerEvents: "none" }}
        >
          <p className=" font-Fjalla text-[30px] lg:text-[50px] font-[400] text-white ">
            LAUNCHCANICS
          </p>
          <p className=" text-[18px] lg:text-[25px] font-semibold text-[#FFB041] font-Inter">
            LAUNCH MECHANICS
          </p>
        </div>

        <div className=" font-Fjalla grid md:grid-cols-2 lg:grid-cols-3 gap-[37px]">
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px] text-[25px] font-[600] font-Inter text-white">
            <p className="">Max Supply:</p>
            <p className=" text-[20px] ">43,433,4333,433,4333</p>
          </div>

          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px] text-[25px] font-[600] font-Inter text-white">
            <p className="">Total Supply:</p>
            <p className=" text-[20px] ">43,433,4333,433,4333 </p>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px] text-[25px] font-[600] font-Inter text-white">
            <p className="">Circulating Supply:</p>
            <p className=" text-[20px] ">
              (43,433,4333,433,4333) with a 43 days.
            </p>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px] text-[25px] font-[600] font-Inter text-white">
            <p className="">Contract Revoked / Renonced</p>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px] text-[25px] font-[600] font-Inter text-white">
            <p className="">Anti-Bot: for the first 4h 33m of launch</p>
          </div>

          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px] text-[25px] font-[600] font-Inter text-white">
            <p className="">Anti-Whate: {"<"}4.3% first 4d33m post-launch</p>
          </div>
        </div>
      </div>
      <div
        className="max-w-6xl mx-[10px] 2xl:max-w-7xl md:mx-auto"
        data-aos="fade-up"
      >
        <div
          className="relative text-center my-[60px] bg-cover bg-no-repeat py-[25px]"
          style={{ backgroundImage: backgroundImage, pointerEvents: "none" }}
        >
          <p
            className=" font-Fjalla text-[30px] lg:text-[50px] font-[400] text-white "
            id="tokenomics"
          >
            TOKENOMICS
          </p>
          {/* <p className=" text-[18px] lg:text-[25px] font-semibold text-[#FFB041] font-Inter">
            LAUNCH MECHANICS
          </p> */}
        </div>

        <div className=" font-Fjalla grid md:grid-cols-2 lg:grid-cols-3 gap-[10px] md:gap-[37px]">
          <div className=" bg-[#79092A] px-[27px] py-[16px] md:py-[40px] text-center max-w-[395px] text-[25px] font-[600] font-Inter text-white">
            <p className="">43.433T $BUG</p>
          </div>

          <div className=" bg-[#79092A] px-[27px] py-[16px] md:py-[40px] text-center max-w-[395px] text-[25px] font-[600] font-Inter text-white">
            <p className="">0% Allocations</p>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[16px] md:py-[40px] text-center max-w-[395px] text-[25px] font-[600] font-Inter text-white">
            <p className="">0% Presale</p>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[16px] md:py-[40px] text-center max-w-[395px] text-[25px] font-[600] font-Inter text-white">
            <p className="">0% Taxes</p>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[16px] md:py-[40px] text-center max-w-[395px] text-[25px] font-[600] font-Inter text-white">
            <p className="">0% BS</p>
          </div>

          <div className=" bg-[#79092A] px-[27px] py-[16px] md:py-[40px] text-center max-w-[395px] text-[25px] font-[600] font-Inter text-white overflow-x-scroll">
            <p className="">0x4336Df9145009570975747295f2901</p>
          </div>
        </div>
      </div>
      <div
        className=" flex items-center justify-center my-[20px]"
        data-aos="fade-down"
      >
        <img src={Buy} alt="" className=" h-[50px] md:h-full mx-auto" />
      </div>
      <div
        className=" font-Fjalla text-center my-[40px] max-w-6xl mx-10 2xl:max-w-7xl md:mx-auto"
        id="disclaimer"
        data-aos="fade-up"
      >
        <p className=" font-[400] text-[30px] md:text-[40px] text-[#FFB041]">
          DISCLAIMER
        </p>
        <p className=" font-[600] text-[25px] text-white font-Inter">
          $Bug is a community coin with no intrinsic value or expectations of
          financial return. There is no formal team or roadmap
        </p>
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#FFB041] text-[#000000] px-4 py-4 rounded-full shadow-lg hover:bg-[#47240E] hover:text-white transition-all duration-300 animate-bounce hover:animate-none"
        >
          <RiArrowUpDoubleLine className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default LandingPage;
