import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { IconButton, TextField } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const socialIcons = [
  { icon: <FacebookRoundedIcon sx={{ fontSize: 17 }} /> },
  { icon: <InstagramIcon sx={{ fontSize: 15 }} /> },
  { icon: <XIcon sx={{ fontSize: 13 }} /> },
  { icon: <LinkedInIcon sx={{ fontSize: 15 }} /> },
];

const Contact = () => {
  return (
    <>
      <section>
        <div className="text-center">
          <h1 className="font-semibold text-[32px]">Contact</h1>
          <p className="text-[17px] px-42 mt-2">
            Interested in hiring me for your project or just want to say hi? You
            can fill in the contact form below or send me an email to{" "}
            <Link className="text-[var(--primary-color)]">
              evans@yourwebsite.com
            </Link>{" "}
            .Want to get connected? Follow me on the social channels below.
          </p>
        </div>

        <div className="mt-6">
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
      </section>

      <div className="my-14 bg-white/10 h-[1px] w-full "></div>

      <section className="pl-5 pr-4">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <h1 className="text-[52px] font-semibold  border-[var(--primary-color)] border-l-[7px] pl-3">
              Contact Details
            </h1>
            <p className="text-[17px]">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 mt-14">
          <div className="border-[var(--primary-color)] border-l pl-7 py-6">
            <h4 className="font-medium text-[24px]">Phone</h4>
            <p className="text-[15px]">+123-456-7890</p>
          </div>

          <div className="border-[var(--primary-color)] border-l pl-7 py-6">
            <h4 className="font-medium text-[24px]">Location</h4>
            <p className="text-[15px]">123 Example Street, City, Country</p>
          </div>

          <div className="border-[var(--primary-color)] border-l pl-7 py-6">
            <h4 className="font-medium text-[24px]">Email</h4>
            <p className="text-[15px]">yourmail@domain.com</p>
          </div>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108231.62957435446!2d75.7119361890625!3d26.89396776935785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db187e0546cf3%3A0x48394b6f6b2e47bf!2sMICS%20-%20Mount%20InfoSolutions%20%26%20Consultancy%20Services!5e1!3m2!1sen!2sin!4v1754474166291!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full h-[400px] mt-16"
          ></iframe>
        </div>
      </section>

      <section className="pl-5 pr-4 mt-30 ">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <h1 className="text-[52px] font-semibold  border-[var(--primary-color)] border-l-[7px] pl-3">
              Get In Touch
            </h1>
            <p className="text-[17px]">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text.
            </p>
          </div>
        </div>

        <div className="py-16">
          <form className="border-[#535353]  p-10 border rounded-[24px]">
            <div className="flex gap-6">
              <div className="flex-1">
                <TextField
                  id="outlined-basic"
                  label="Your Name*"
                  variant="outlined"
                  className="w-full"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#535353", // normal border
                        borderRadius: "8px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#ccc", // hover border
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#ccc", // focus border
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#ccc", // normal label color
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#ccc", // focused label color
                    },
                  }}
                />
              </div>
              <div className="flex-1">
                <TextField
                  id="outlined-basic"
                  label="Email Address*"
                  variant="outlined"
                  className="w-full"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#535353", // normal border
                        borderRadius: "8px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#ccc", // hover border
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#ccc", // focus border
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#ccc", // normal label color
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#ccc", // focused label color
                    },
                  }}
                />
              </div>
            </div>

            <div className="flex gap-6 mt-6">
              <div className="flex-1">
                <TextField
                  id="outlined-basic"
                  label="Phone*"
                  variant="outlined"
                  className="w-full"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#535353", // normal border
                        borderRadius: "8px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#ccc", // hover border
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#ccc", // focus border
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#ccc", // normal label color
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#ccc", // focused label color
                    },
                  }}
                />
              </div>
              <div className="flex-1">
                <TextField
                  id="outlined-basic"
                  label="Location*"
                  variant="outlined"
                  className="w-full"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#535353", // normal border
                        borderRadius: "8px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#ccc", // hover border
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#ccc", // focus border
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#ccc", // normal label color
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#ccc", // focused label color
                    },
                  }}
                />
              </div>
            </div>
            <div className="flex-1 mt-6">
              <TextField
                id="outlined-basic"
                label="Message*"
                variant="outlined"
                className="w-full"
                multiline
                rows={4} // jitni height chahiye utni rows set karo
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#535353",
                      borderRadius: "8px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ccc",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ccc",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#ccc",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#ccc",
                    backgroundColor: "#000",
                  },
                }}
              />
            </div>

            <div className="mt-8">
              <button
                className="effect-button cursor-pointer px-7 py-3 rounded-full"
                type="submit"
              >
                <span className="font-semibold text-[18px]">Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
