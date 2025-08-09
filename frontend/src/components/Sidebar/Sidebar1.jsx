import { IconButton } from "@mui/material";
import React from "react";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const socialIcons = [
  { icon: <FacebookRoundedIcon sx={{ fontSize: 17 }} /> },
  { icon: <InstagramIcon sx={{ fontSize: 15 }} /> },
  { icon: <XIcon sx={{ fontSize: 13 }} /> },
  { icon: <LinkedInIcon sx={{ fontSize: 15 }} /> },
];

const Sidebar1 = () => {
  return (
    <>
      <div className="w-[18%]  h-full py-10 flex flex-col justify-between">
        <div className=" flex justify-center">
          <ul className=" space-y-7">
            {socialIcons.map((item, index) => (
              <li key={index}>
                <IconButton
                  sx={{
                    opacity: 0.7,
                    height: "34px",
                    width: "34px",
                    border: "1px solid #808080",
                    borderRadius: "5px",
                    padding: "8px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#333",
                      border: "1px solid #fff",
                      opacity: 1,
                      "& svg": {
                        color: "#fff",
                      },
                    },
                    "& svg": {
                      transition: "color 0.3s ease",
                      color: "var(--primary-color)",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <ul className="space-y-7">
            <li className="relative">
              <IconButton
                sx={{
                  height: "34px",
                  width: "34px",
                  backgroundColor: "var(--primary-color)",
                  border: "1px solid transparent",
                  borderRadius: "8px",
                  padding: "8px",
                  "&:hover": {
                    backgroundColor: "#333",
                    border: "1px solid #555",
                  },
                }}
              >
                <ShoppingCartOutlinedIcon
                  sx={{ color: "#eee", fontSize: 17 }}
                />
              </IconButton>
              <span className="absolute -top-1 -right-1  h-[14px] w-[14px] flex justify-center items-center rounded-full bg-[#ffac27] text-[9px] leading-[20px] text-white text-center">
                0
              </span>
            </li>

            <li>
              <IconButton
                sx={{
                  backgroundColor: "var(--primary-color)",
                  border: "1px solid transparent",
                  borderRadius: "8px",
                  padding: "8px",
                  "&:hover": {
                    backgroundColor: "#333",
                    border: "1px solid #555",
                  },
                }}
              >
                <NightlightRoundOutlinedIcon
                  sx={{ color: "#eee", fontSize: 18 }}
                />
              </IconButton>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar1;
