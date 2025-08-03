import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import {
  PersonOutlineOutlined as AboutIcon,
  NextWeekOutlined as ServicesIcon,
  ReceiptOutlined as ResumeIcon,
  Inventory2Outlined as ProductsIcon,
  ChatBubbleOutlineOutlined as BlogIcon,
  MailOutlineOutlined as ContactIcon,
} from "@mui/icons-material";

const menuItems = [
  {
    label: "About Us",
    icon: <AboutIcon sx={{ fontSize: 20, verticalAlign: "middle" }} />,
  },
  {
    label: "Services & Pricing",
    icon: <ServicesIcon sx={{ fontSize: 20, verticalAlign: "sub" }} />,
  },
  {
    label: "Resume",
    icon: <ResumeIcon sx={{ fontSize: 20, verticalAlign: "sub" }} />,
  },
  {
    label: "Products",
    icon: <ProductsIcon sx={{ fontSize: 20, verticalAlign: "sub" }} />,
  },
  {
    label: "Blog",
    icon: <BlogIcon sx={{ fontSize: 20, verticalAlign: "middle" }} />,
  },
  {
    label: "Contact",
    icon: <ContactIcon sx={{ fontSize: 20, verticalAlign: "middle" }} />,
  },
];
const socialIcons = [
  { icon: <FacebookRoundedIcon sx={{ fontSize: 17 }} /> },
  { icon: <InstagramIcon sx={{ fontSize: 15 }} /> },
  { icon: <XIcon sx={{ fontSize: 13 }} /> },
  { icon: <LinkedInIcon sx={{ fontSize: 15 }} /> },
];

const Sidebar2 = () => {
  return (
    <>
      <div className="bg-[var(--sidebar-color)] flex-1 h-full py-10 px-6">
        <div>
          <div className="flex justify-center ">
            <div className="relative">
              <div className="bg-[var(--primary-color)] rounded-full h-20 w-20 flex justify-center items-center overflow-hidden ">
                <img
                  src="https://portfolify-vue.netlify.app/assets/profile-nEVPe_16.png"
                  alt=""
                />
              </div>
              <span className="bg-[var(--bg-color)] absolute bottom-0 text-[15px] -right-1 flex h-[30px] w-[30px] justify-center items-center rounded-full leading-[30px]">
                👋
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-[26px]">Arman Ali</h2>
            <p className="text-center -mt-2 text-[14px]">
              Junior Software Engineer
            </p>
          </div>
          <div className="mt-3">
            <ul className="flex justify-center gap-3">
              {socialIcons.map((item, index) => (
                <li key={index}>
                  <IconButton
                    sx={{
                      opacity: 0.7,
                      height: "34px",
                      width: "34px",
                      border: "1px solid #808080",
                      borderRadius: "50px",
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
        </div>

        <span className="bg-[#cddbd8] h-[1px] opacity-70 mt-10 w-full inline-block "></span>

        <div className="mt-5 ">
          <ul className="space-y-3">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className={`block gap-1 px-3 py-1.5 rounded-lg transition-all duration-400 
              ${
                item.label === "About Us"
                  ? "bg-[var(--primary-color)]"
                  : "hover:bg-[var(--primary-color)]"
              }
            `}
                >
                  {item.icon}
                  <span className="inline-block align-middle ml-1.5">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="text-center mt-18">
            <Link className="effect-button px-7 py-1.5 rounded-full outline-none focus:outline-none hover:outline-none ring-0 focus:ring-0">
              <SendOutlinedIcon
                className="-rotate-45"
                sx={{ fontSize: 19, verticalAlign: "sub", marginRight: 0.5 }}
              />
              <span className="font-semibold text-[16px]">Hire Me</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar2;
