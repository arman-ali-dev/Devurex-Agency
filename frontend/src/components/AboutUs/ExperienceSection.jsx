import React, { useEffect, useState } from "react";

const ExperienceSection = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 6;
    const duration = 1000;
    const incrementTime = Math.floor(duration / end);

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, incrementTime);

    return () => clearInterval(counter);
  }, []);

  return (
    <>
      <section className="pt-28 pl-5">
        <div className="grid grid-cols-6">
          <div className="col-span-2 flex  items-center">
            <h1 className="text-[var(--primary-color)] font-bold text-[70px]">
              1
            </h1>
            <span className="inline-block h-[40px]  mx-5 w-[1px] bg-white"></span>
            <p>Years Of Experience</p>
          </div>

          <div className="col-span-2 flex  items-center">
            <h1 className="text-[var(--primary-color)] w-[14%] font-bold text-[70px]">
              {count}
            </h1>
            <span className="inline-block h-[40px]  mx-5 w-[1px] bg-white"></span>
            <p>Projects Completed</p>
          </div>

          <div className="col-span-2 flex justify-end mr-6  items-center">
            <h1 className="text-[var(--primary-color)] w-[14%] font-bold text-[70px]">
              2
            </h1>
            <span className="inline-block h-[40px]  mx-5 w-[1px] bg-white"></span>
            <p>Clients Worked With</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
