import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { ReceiptOutlined as ResumeIcon } from "@mui/icons-material";
const AboutUs = () => {
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
      <section className="hero-section">
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
                  View Portfolio
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
            <div className="bg-[var(--primary-color)] rounded-md h-[400px] w-[320px] animate-shake"></div>
          </div>
        </div>
      </section>

      <section className="pt-28 pb-[300px]">
        <div className="grid grid-cols-6">
          <div className="col-span-2 flex  items-center">
            <h1 className="text-[var(--primary-color)] font-bold text-[70px]">
              5
            </h1>
            <span className="inline-block h-[40px]  mx-5 w-[1px] bg-white"></span>
            <p>Years Of Experience</p>
          </div>

          <div className="col-span-2 flex  items-center">
            <h1 className="text-[var(--primary-color)] font-bold text-[70px]">
              110
            </h1>
            <span className="inline-block h-[40px]  mx-5 w-[1px] bg-white"></span>
            <p>Projects Completed</p>
          </div>

          <div className="col-span-2 flex justify-end mr-6  items-center">
            <h1 className="text-[var(--primary-color)] font-bold text-[70px]">
              6k
            </h1>
            <span className="inline-block h-[40px]  mx-5 w-[1px] bg-white"></span>
            <p>Clients Worldwide</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
