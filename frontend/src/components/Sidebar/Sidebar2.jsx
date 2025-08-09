import React from "react";

import { Link } from "react-router-dom";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

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
    path: "/",
    icon: <AboutIcon sx={{ fontSize: 20, verticalAlign: "middle" }} />,
  },
  {
    label: "Services & Pricing",
    path: "/services",

    icon: <ServicesIcon sx={{ fontSize: 20, verticalAlign: "sub" }} />,
  },
  {
    label: "Resume",
    path: "/resume",
    icon: <ResumeIcon sx={{ fontSize: 20, verticalAlign: "sub" }} />,
  },
  {
    label: "Projects",
    path: "/projects",
    icon: <ProductsIcon sx={{ fontSize: 20, verticalAlign: "sub" }} />,
  },
  {
    label: "Blog",
    path: "/blog",
    icon: <BlogIcon sx={{ fontSize: 20, verticalAlign: "middle" }} />,
  },
  {
    label: "Contact",
    path: "/contact",
    icon: <ContactIcon sx={{ fontSize: 20, verticalAlign: "middle" }} />,
  },
];

const Sidebar2 = () => {
  const [active, setActive] = React.useState("About Us");
  return (
    <>
      <div className="bg-black/50 flex-1 h-full py-10   ">
        <div className=" border border-[var(--border-color)] mx-7 px-3 py-1.5 rounded-lg flex items-center gap-2">
          <div className="border-[var(--border-color)] border rounded-md h-[30px] w-[30px] flex items-center justify-center">
            <PersonOutlineOutlinedIcon
              sx={{
                fontSize: 20,
              }}
            />
          </div>
          <h2 className="text-center font-bold text-[17px]">Arman Ali</h2>
        </div>

        <div className="bg-[var(--border-color)] h-[1px] px-7  mt-7  w-full inline-block "></div>

        <div className="mt-6">
          <div className="mt-5">
            <ul className="space-y-4">
              {menuItems.map((item, index) =>
                item.label === "Projects" ? (
                  // Projects Dropdown
                  <li className="mx-7" key={index}>
                    <div className=" py-1.5 font-semibold text-white">
                      {item.icon}
                      <span className="inline-block align-middle ml-1.5">
                        {item.label}
                      </span>
                    </div>
                    <ul className="ml-7 space-y-5 mt-3 border-[var(--border-color)] border-l pl-4  ">
                      <li>
                        <Link
                          to="/projects/web"
                          className="block text-gray-300 hover:text-white"
                        >
                          Web Apps
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/projects/mobile"
                          className="block  text-gray-300 hover:text-white"
                        >
                          Mobile Apps
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/projects/uiux"
                          className="block  text-gray-300 hover:text-white"
                        >
                          UI/UX Designs
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  // Regular Menu Item
                  <li
                    className={active == item.label ? "active-link" : ""}
                    key={index}
                  >
                    <Link
                      onClick={() => setActive(item.label)}
                      to={item.path}
                      className={`block   gap-1 px-7 py-1.5 rounded-lg transition-all duration-400`}
                    >
                      {item.icon}
                      <span className="inline-block align-middle ml-1.5">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                )
              )}
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
