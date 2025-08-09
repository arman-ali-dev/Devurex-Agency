import React from "react";
import IconButton from "@mui/material/IconButton";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <>
      <Link className="col-span-1 group mb-10">
        <div className="overflow-hidden rounded-xl">
          <img
            className="w-full transition-transform duration-500 ease-in-out group-hover:scale-105"
            src="https://portfolify-vue.netlify.app/assets/project1-BtegeO_X.png"
            alt=""
          />
        </div>

        <div className="flex justify-between items-center mt-10">
          <div>
            <h2 className="font-semibold text-[25px]">
              Crypto Website Development for Defi X
            </h2>
            <ul className="flex items-center gap-3  mt-5">
              <li className="border py-1 px-4 inline-block text-[15px] rounded-full">
                React.Js
              </li>
              <li className="border py-1 px-4 inline-block text-[15px] rounded-full">
                gsap
              </li>
              <li className="border py-1 px-4 inline-block text-[15px] rounded-full">
                Web Development
              </li>
            </ul>
          </div>

          <div>
            <IconButton
              sx={{
                backgroundColor: "#535353",
                height: 48,
                width: 48,
                transition: "background-color 0.3s ease",

                "&:hover": {
                  backgroundColor: "var(--primary-color)",
                  "& .MuiSvgIcon-root": {
                    transform: "rotate(45deg)",
                    transition: "transform 0.4s ease, color 0.3s ease",
                    color: "#fff",
                  },
                },
              }}
            >
              <CallMadeOutlinedIcon
                sx={{
                  color: "#fff",
                  fontSize: 18,
                  transition: "transform 0.4s ease, color 0.3s ease",
                }}
              />
            </IconButton>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
