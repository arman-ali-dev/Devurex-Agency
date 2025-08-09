import React from "react";
import Sidebar2 from "./components/Sidebar/Sidebar2";

import Sidebar1 from "./components/Sidebar/Sidebar1";
import AboutUs from "./pages/AboutUs/AboutUs";
import Blog from "./pages/Blog/Blog";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";

function App() {
  return (
    <>
      <div className="flex gap-5">
        {/* Sidebar container */}
        <div className="fixed h-screen w-[23%] flex">
          <Sidebar1 />
          <Sidebar2 />
        </div>

        {/* Main content container */}
        <div className="flex-1 ml-[23%] pt-30">
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>

      <div className=" ml-[23%] pl-5 pr-4 ">
        <Footer />
      </div>
    </>
  );
}

export default App;
