import Navbar from "../Component/Navbar";
import Logo from "../assets/Logo.png";
import HeroImage from "../assets/HeroImage.png";
import HeroImage2 from "../assets/HeroImage2.png";
import Telegram from "../assets/telegram.png";
import Twitter from "../assets/twitter.png";
import How from "../assets/HeaderImage.png";
import Bestie from "../assets/bestie.png";
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

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,
    });
  }, []);

  const backgroundImage = `url(${How})`;

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
      <div className="hidden md:block font-Fjalla text-[60px] font-[400] text-white bg-[#b71f20] py-[9px] text-center">
        <p className="text-[#ffffff]">
          I AM BUG INU, <span className=" text-[#FFB041]">DOGE&apos;s</span>{" "}
          BEST FRIEND!
        </p>
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
            className=" max-w-[400px] h-full w-full object-cover"
          />
          <div className="">
            <div
              className="max-w-[450px] max-h-[450px] overflow-hidden rounded-full shadow-2xl"
              style={{ pointerEvents: "none" }}
            >
              <img
                src={Bestie}
                alt=""
                className="w-full object-fill"
                data-aos="fade-down"
                style={{ pointerEvents: "none" }}
              />
            </div>
          </div>
          <img
            src={HeroImage2}
            alt=""
            data-aos="fade-right"
            style={{ pointerEvents: "none" }}
            className=" max-w-[400px] h-full w-full object-cover"
          />
        </div>

        <div
          className="max-w-[450px] mx-auto max-h-[450px] overflow-hidden rounded-full shadow-2xl"
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
      </div>

      <div
        className="my-[40px] place-items-center flex items-center justify-center gap-[37px]"
        id="buy"
        data-aos="fade-up"
      >
        <a href="https://x.com/Buginu_SOL" target="blank">
          <img src={Twitter} alt="" data-aos="" className=" animate-bounce" />
        </a>

        <a href="https://t.me/buginu_official" target="blank">
          <img src={Telegram} alt="" className=" animate-bounce" />
        </a>
      </div>
      <div
        className="max-w-6xl mx-[10px] 2xl:max-w-7xl md:mx-auto hidden"
        data-aos="fade-up"
      >
        <div
          className="relative text-center my-[60px] bg-cover bg-no-repeat py-[25px] "
          style={{ backgroundImage: backgroundImage, pointerEvents: "none" }}
        >
          <p
            className=" font-Fjalla text-[30px] lg:text-[50px] font-[400] text-white"
            id="how"
          >
            HOW TO BUY $BUGINU
          </p>
          <p className=" text-[18px] lg:text-[25px] font-semibold text-[#FFB041] font-Inter">
            using STon.fi on the TON blockchain:
            {/* ON A DECENTRALIZED EXCHANGE */}
          </p>
        </div>

        <div className=" font-Fjalla grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-[37px]">
          <div className=" bg-[#b71f20] px-[27px] py-[40px] text-center max-w-[395px] ">
            <p className=" text-[#FFB041] text-[25px]">STEP 1</p>
            <li className=" text-[18px] text-white mt-[20px] text-left">
              Download and Set up a base compatible crypto wallet e.g Coinbase,
              Trust Wallet, MetaMask
            </li>
          </div>
          <div className=" bg-[#b71f20] px-[27px] py-[40px] text-center max-w-[395px]">
            <p className=" text-[#FFB041] text-[25px]">STEP 2</p>
            <li className=" text-left text-[18px] text-white mt-[20px]">
              Transfer Ethereum (ETH) on base directly to your Base network
              wallet or Bridge Ethereum Mainnet tokens (ETH) to base via Orbiter
              Finance bridge.
            </li>
          </div>
          <div className=" bg-[#b71f20] px-[27px] py-[40px] text-center max-w-[395px]">
            <p className="text-[25px] text-[#FFB041]">STEP 3</p>
            <li className="text-left text-[18px] text-white mt-[20px]">
              Visit Matcha, an onchain liquidity swap aggregator that allows you
              to trade supported Base currencies. Ensure your wallet is
              connected to the Base network.
            </li>
          </div>
          <div className=" bg-[#b71f20] px-[27px] py-[40px] text-center max-w-[395px]">
            <p className="text-[25px] text-[#FFB041]">STEP 4</p>
            <li className="text-left text-[18px] text-white mt-[20px]">
              Start trading on Base using your connected wallet. Explore
              available tokens and monitor market conditions for optimal trading
              opportunities.
            </li>
          </div>
        </div>
      </div>
      <div
        className="max-w-6xl mx-[10px] 2xl:max-w-7xl md:mx-auto"
        data-aos="fade-up"
      >
        <div className="relative text-center my-[60px] bg-cover bg-no-repeat bg-[#b71f20] py-[25px]">
          <p className=" font-Fjalla text-[30px] lg:text-[50px] font-[400] text-[#000000] ">
            Launch Configuration
          </p>
        </div>

        <div className=" font-Fjalla grid place-items-center  md:grid-cols-2 lg:grid-cols-3 gap-[37px]">
          <div className=" bg-[#b71f20] px-[27px] py-[40px] text-center max-w-[395px] w-full text-[25px] font-[600] font-Inter text-[#000000]">
            <p className="text-[30px] text-[#000000] ">Max Supply:</p>
            <p className=" text-[20px] text-white">1,000,000,000</p>
          </div>

          <div className=" bg-[#b71f20] px-[27px] py-[40px] text-center max-w-[395px] w-full text-[25px] font-[600] font-Inter text-[#000000]">
            <p className="text-[30px]  text-[#000000]">Circulating Supply:</p>
            <p className=" text-[20px] text-white">1,000,000,000</p>
          </div>
          <div className=" bg-[#b71f20] px-[27px] py-[40px] text-center max-w-[395px] w-full text-[25px] font-[600] font-Inter text-white">
            <p className="text-[30px] text-[#000000] ">
              Contract Revoked / Renounced
            </p>
          </div>
        </div>
      </div>

      <div
        className="max-w-6xl mx-[10px] 2xl:max-w-7xl md:mx-auto"
        data-aos="fade-up"
      >
        <div
          className="relative text-center my-[60px] bg-cover bg-no-repeat py-[25px] bg-[#b71f20]"
          // style={{ backgroundImage: backgroundImage, pointerEvents: "none" }}
        >
          <p className=" font-Fjalla text-[30px] lg:text-[50px] font-[400] text-[#000000]">
            $BUGINU
          </p>
          <p className=" text-[18px] lg:text-[25px] font-semibold text-[#FFB041] font-Inter">
            CONTRACT ADDRESS
          </p>

          <p className=" text-[14px] lg:text-[16px] font-semibold text-[#ffffff] font-Inter">
            Deployed on SOLANA NETWORK
          </p>
        </div>

        <div className="text-center font-[600] font-Inter text-white ">
          <p className="mb-[20px] text-[30px]  animate-bounce min-w-[300px] overflow-auto">
            Coming Soon...
          </p>
          <p className="mb-[20px] text-[20px] lowercase animate-bounce min-w-[300px] overflow-auto hidden">
            {textToCopy}
          </p>
          <p
            className="bg-[#b71f20] px-[26px] inline rounded-[10px] py-[10px] text-[20px] cursor-pointer hidden"
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
          className="bg-[#b71f20] relative text-center my-[60px] bg-cover bg-no-repeat py-[25px]"
          // style={{ backgroundImage: backgroundImage, pointerEvents: "none" }}
        >
          <p
            className=" font-Fjalla text-[30px] lg:text-[50px] font-[400] text-[#000000] "
            id="tokenomics"
          >
            TOKENOMICS
          </p>
          {/* <p className=" text-[18px] lg:text-[25px] font-semibold text-[#FFB041] font-Inter">
            LAUNCH MECHANICS
          </p> */}
        </div>

        <div className=" font-Fjalla grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-[10px] md:gap-[37px]">
          <div className=" bg-[#b71f20] px-[27px] py-[16px] md:py-[40px] text-center max-w-[395px] w-full text-[25px] font-[600] font-Inter text-white">
            <p className="">1,000,000,000 $BUGINU</p>
          </div>

          <div className=" bg-[#b71f20] px-[27px] py-[16px] md:py-[40px] text-center max-w-[395px] w-full text-[25px] font-[600] font-Inter text-white">
            <p className="">0% Presale</p>
          </div>
          <div className=" bg-[#b71f20] px-[27px] py-[16px] md:py-[40px] text-center max-w-[395px] w-full text-[25px] font-[600] font-Inter text-white">
            <p className="">0% Taxes</p>
          </div>
        </div>
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
          $BUGINU is a community coin with no intrinsic value or expectations of
          financial return. There is no formal team or roadmap. The coin is
          Useless.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
