import React, { useEffect, useRef, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const faqData = [
  {
    question: "What makes you different from other developers?",
    answer: `I focus not just on code but on delivering clean, scalable, and user-focused solutions. Every project I work on is crafted with attention to design, performance, and long-term usability.`,
    quote: `"I don’t just build projects — I solve real-world problems with technology."`,
  },
  {
    question: "What tech stack do you use?",
    answer: `I specialize in both MERN (MongoDB, Express, React, Node.js) and Java + Spring Boot stacks. For mobile apps, I use React Native, and for design I work with Figma and Canva.`,
    quote: `"Using modern tools helps me deliver fast, responsive, and future-ready apps."`,
  },
  {
    question: "Can you work with international clients?",
    answer: `Yes! I’ve already worked on projects that required collaboration across time zones and cultures. I'm comfortable communicating clearly and delivering quality work remotely.`,
    quote: `"Distance doesn’t matter when deadlines and communication are crystal clear."`,
  },
  {
    question: "What services do you offer?",
    answer: `I provide web and app development, UI/UX design, and full-stack solutions. From landing pages to scalable business platforms — I can handle it all end-to-end.`,
    quote: `"I love turning ideas into actual working apps that look and feel great."`,
  },
  {
    question: "What’s your experience level?",
    answer: `I bring 3+ years of continuous learning experience with a growing portfolio of real-world projects. I’ve worked on 6+ projects and collaborated with 2+ clients already.`,
    quote: `"Every line of code I write is backed by hours of learning and hands-on work."`,
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const contentRefs = useRef([]);
  const sectionRef = useRef(null);
  const triggeredRef = useRef(false);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggeredRef.current) {
            triggeredRef.current = true; // mark as triggered
            setActiveIndex(0); // open first accordion
          }
        });
      },
      { threshold: 0.7 } // 70% visible hone par trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <>
      <section className="mt-30" ref={sectionRef}>
        <h3 className="text-[32px] font-semibold pl-5 pr-4 mb-5">Why Me?</h3>
        <div className="bg-black/50 w-full">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={index} className="overflow-hidden">
                <button
                  onClick={() => toggleIndex(index)}
                  className={`w-full cursor-pointer flex justify-between items-center px-6 py-6 text-lg font-medium ${
                    index !== faqData.length - 1
                      ? "border-b border-[#535353]"
                      : ""
                  } hover:bg-black/40 transition-all duration-300 ${
                    isOpen ? "bg-black/40 border-none" : ""
                  }`}
                >
                  {item.question}
                  <span className="transition-transform duration-300">
                    {isOpen ? (
                      <RemoveCircleOutlineIcon />
                    ) : (
                      <AddCircleOutlineIcon />
                    )}
                  </span>
                </button>

                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden transition-all duration-500 ease-in-out bg-black/40 px-6 text-sm text-gray-300"
                  style={{
                    maxHeight: isOpen
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="py-4 leading-relaxed">
                    {item.answer}
                    <br />
                    <br />
                    <em>{item.quote}</em>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FaqSection;
