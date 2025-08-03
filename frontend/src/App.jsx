import React from "react";
import Sidebar2 from "./components/Sidebar/Sidebar2";
import "./index.css"; // ya ./App.css

import Sidebar1 from "./components/Sidebar/Sidebar1";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <>
      <div className="flex gap-5">
        {/* Sidebar container */}
        <div className="fixed h-screen w-[22%] flex">
          <Sidebar1 />
          <Sidebar2 />
        </div>

        {/* Main content container */}
        <div className="flex-1 ml-[23%] pt-30">
          <AboutUs />
        </div>
      </div>
    </>
  );
}

export default App;
