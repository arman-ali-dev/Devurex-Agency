import { IconButton } from "@mui/material";
import React from "react";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";

const Sidebar1 = () => {
  return (
    <>
      <div className="w-[18%]  h-full py-10 flex justify-center">
        <ul className="space-y-7">
          <li>
            <IconButton
              sx={{
                border: "1px solid #555",
                borderRadius: "8px",
                padding: "8px",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              <CodeOffIcon
                className="text-[var(--primary-color)]"
                sx={{ fontSize: 20 }}
              />
            </IconButton>
          </li>

          <li className="relative">
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
              <ShoppingCartOutlinedIcon sx={{ color: "#eee", fontSize: 18 }} />
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
    </>
  );
};

export default Sidebar1;
