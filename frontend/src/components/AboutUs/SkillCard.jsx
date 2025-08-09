import React from "react";

const SkillCard = ({ icon, title, description }) => {
  return (
    <>
      <div className="bg-gradient-to-br w-full from-[#1a1a1a] to-[#111] text-white rounded-xl p-6 shadow-lg ">
        <div>{icon}</div>

        <div className="mt-4">
          <h2 className="font-medium text-[20px]">{title}</h2>
          <p className="text-[17px] mt-2 mb-0">{description}</p>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
