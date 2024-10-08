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
  const [copied, setCopied] = useState(false);
  const textToCopy =
    "1A1ZP1EP5QGEFI2ENJWENFNJFJWHEKDHUI2GQUIG2IQHHHJKSKDQKHDGKQGGQDJWDLMV7DIVFNA";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

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

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [copied]);

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
        <div className="grid place-items-center md:flex items-center md:justify-between gap-[12px]">
          <img
            src={HeroImage}
            alt=""
            data-aos="fade-up"
            style={{ pointerEvents: "none" }}
            className=" max-w-[400] h-full w-full object-cover"
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
            className=" max-w-[400] h-full w-full object-cover"
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

        <div className=" font-Fjalla grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-[37px]">
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px] ">
            <p className=" text-[#FFB041] text-[25px]">STEP 1</p>
            <li className=" text-[18px] text-white mt-[20px] text-left">
              Download and Set up a base compatible crypto wallet e.g Coinbase,
              Trust Wallet, MetaMask
            </li>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px]">
            <p className=" text-[#FFB041] text-[25px]">STEP 2</p>
            <li className=" text-left text-[18px] text-white mt-[20px]">
              Transfer Ethereum (ETH) on base directly to your Base network
              wallet or Bridge Ethereum Mainnet tokens (ETH) to base via Orbiter
              Finance bridge.
            </li>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px]">
            <p className="text-[25px] text-[#FFB041]">STEP 3</p>
            <li className="text-left text-[18px] text-white mt-[20px]">
              Visit Matcha, an onchain liquidity swap aggregator that allows you
              to trade supported Base currencies. Ensure your wallet is
              connected to the Base network.
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

        <div className=" font-Fjalla grid place-items-center  md:grid-cols-2 lg:grid-cols-3 gap-[37px]">
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px] w-full text-[25px] font-[600] font-Inter text-white">
            <p className="">Max Supply:</p>
            <p className=" text-[20px] ">43,433,4333,433,4333</p>
          </div>

          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px] w-full text-[25px] font-[600] font-Inter text-white">
            <p className="">Total Supply:</p>
            <p className=" text-[20px] ">43,433,4333,433,4333 </p>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px] w-full text-[25px] font-[600] font-Inter text-white">
            <p className="">Circulating Supply:</p>
            <p className=" text-[20px] ">
              (43,433,4333,433,4333) with a 43 days.
            </p>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[40px] text-center max-w-[395px] w-full text-[25px] font-[600] font-Inter text-white">
            <p className="">Contract Revoked / Renounced</p>
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
            $BUG INU
          </p>
          <p className=" text-[18px] lg:text-[25px] font-semibold text-[#FFB041] font-Inter">
            CONTRACT ADDRESS
          </p>
        </div>

        <div className="text-center font-[600] font-Inter text-white ">
          <p className="mb-[20px] text-[20px] lowercase animate-bounce min-w-[300px] overflow-auto">
            {textToCopy}
          </p>
          <p
            className="bg-[#79092A] px-[26px] inline rounded-[10px] py-[10px] text-[20px] cursor-pointer"
            onClick={handleCopy}
          >
            Copy
          </p>

          <p className=" font-[400] text-[14px] mt-[30px] italic">
            {" "}
            {copied && "Text has been Copied to clipboard"}
          </p>
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

        <div className=" font-Fjalla grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-[10px] md:gap-[37px]">
          <div className=" bg-[#79092A] px-[27px] py-[16px] md:py-[40px] text-center max-w-[395px] w-full text-[25px] font-[600] font-Inter text-white">
            <p className="">433B $BUG</p>
          </div>

          <div className=" bg-[#79092A] px-[27px] py-[16px] md:py-[40px] text-center max-w-[395px] w-full text-[25px] font-[600] font-Inter text-white">
            <p className="">0% Allocations</p>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[16px] md:py-[40px] text-center max-w-[395px] w-full text-[25px] font-[600] font-Inter text-white">
            <p className="">0% Presale</p>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[16px] md:py-[40px] text-center max-w-[395px] w-full text-[25px] font-[600] font-Inter text-white">
            <p className="">0% Taxes</p>
          </div>
          <div className=" bg-[#79092A] px-[27px] py-[16px] md:py-[40px] text-center max-w-[395px] w-full text-[25px] font-[600] font-Inter text-white">
            <p className="">0% BS</p>
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
          financial return. There is no formal team or roadmap. The coin is
          Useless.
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
