import React, { useEffect, useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { ReceiptOutlined as ResumeIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const words = ["Developer", "Designer"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const updateText = () => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const typingTimer = setTimeout(updateText, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, typingSpeed, wordIndex, words]);

  return (
    <>
      <section className="hero-section pl-5">
        <div className="grid grid-cols-2  items-center">
          <div className="col-span-1">
            <h2 className="text-[22px] ">HI, I'M A FREELANCER</h2>
            <h1 className="text-[72px] -mt-2 text-[var(--primary-color)] font-bold">
              {text}
              <span className="animate-pulse">|</span>
            </h1>

            <p className="text-[17px] pr-40">
              I'm a software engineer specializing in scalable web apps. Explore
              my <Link className="text-[var(--primary-color)]">blog</Link> ,
              <Link className="text-[var(--primary-color)]">
                {" "}
                project portfolio
              </Link>{" "}
              and{" "}
              <Link className="text-[var(--primary-color)]">
                online resume
              </Link>{" "}
              .
            </p>

            <div className="flex items-center gap-5 mt-8">
              <Link className="effect-button px-6 py-[14px] rounded-full outline-none focus:outline-none hover:outline-none ring-0 focus:ring-0">
                <EastOutlinedIcon
                  sx={{
                    fontSize: 19,
                    verticalAlign: "sub",
                    marginRight: 0.5,
                  }}
                />
                <span className="font-semibold text-[18px] ml-0.5">
                  View Projects
                </span>
              </Link>

              <Link className="bg-white/10 px-6 py-[14px] rounded-full outline-none focus:outline-none hover:outline-none ring-0 focus:ring-0">
                <ResumeIcon
                  sx={{
                    fontSize: 20,
                    verticalAlign: "sub",
                    marginRight: 0.5,
                  }}
                />
                <span className="font-semibold text-[18px] ml-0.5">
                  View Resume
                </span>
              </Link>
            </div>
          </div>

          <div className="col-span-1 flex justify-end mr-5">
            <div className="relative animate-shake bg-[var(--primary-color)] rounded-md h-[400px] w-[320px] overflow-hidden text-white font-black">
              {/* Arman Ali Top */}
              <div className="absolute top-4 left-4 text-lg font-semibold">
                2025
              </div>

              {/* 2025 Bottom */}
              <div className="absolute bottom-4 left-4 text-2xl tracking-widest font-extrabold">
                Arman Ali
              </div>

              {/* Bikhre Portfolio Letters */}
              <span className="absolute text-[48px] rotate-[20deg] bottom-[30px] right-[30px]">
                P
              </span>
              <span className="absolute text-[48px] rotate-[35deg] bottom-[70px] right-[50px]">
                O
              </span>
              <span className="absolute text-[48px] rotate-[15deg] bottom-[110px] right-[70px]">
                R
              </span>
              <span className="absolute text-[48px] rotate-[45deg] bottom-[150px] right-[90px]">
                T
              </span>
              <span className="absolute text-[48px] rotate-[10deg] bottom-[190px] right-[110px]">
                F
              </span>
              <span className="absolute text-[48px] rotate-[30deg] bottom-[230px] right-[130px]">
                O
              </span>
              <span className="absolute text-[48px] rotate-[20deg] bottom-[270px] right-[150px]">
                L
              </span>
              <span className="absolute text-[48px] rotate-[40deg] bottom-[310px] right-[170px]">
                I
              </span>
              <span className="absolute text-[48px] rotate-[25deg] bottom-[350px] right-[190px]">
                O
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
