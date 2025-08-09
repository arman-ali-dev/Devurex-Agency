import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BlogCard from "../../components/Blog/BlogCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Blog = () => {
  return (
    <>
      <section>
        <div>
          <h1 className="text-[32px] font-semibold text-center">
            A Blog About Software Development And <br /> Life
          </h1>
          <p className="text-center text-[16.5px] mt-1">
            Welcome to my blog. Subscribe and get my latest blog post in your
            inbox.
          </p>
        </div>
        <div>
          <form className="mt-8 text-center">
            <input
              className="w-[60%] border border-[#333] mr-5 px-8 py-4 rounded-full text-[18px] outline-none"
              type="text"
              placeholder="Enter your email"
            />
            <button
              className="effect-button px-7 py-3 rounded-full"
              type="submit"
            >
              <SendOutlinedIcon
                className="-rotate-45"
                sx={{ fontSize: 21, verticalAlign: "sub", marginRight: 0.5 }}
              />
              <span className="font-semibold text-[18px]">Subscribe</span>
            </button>
          </form>
        </div>
      </section>

      <div className="my-16 bg-white/10 h-[1px] w-full "></div>

      <section className="pb-30 pl-5 pr-4">
        <div className="grid grid-cols-3 mt-16 gap-8">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
            <BlogCard />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Stack spacing={2}>
            <Pagination
              count={10}
              variant="outlined"
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#fff",
                  borderColor: "#535353",
                  fontSize: 13,
                },
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: "var(--primary-color)",
                  color: "#fff",
                  borderColor: "var(--primary-color)",
                  "&:hover": {
                    backgroundColor: "var(--primary-color)",
                  },
                },
              }}
            />
          </Stack>
        </div>
      </section>
    </>
  );
};

export default Blog;
