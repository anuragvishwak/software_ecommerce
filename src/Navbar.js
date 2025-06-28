import React, { useState } from "react";
import img1 from "./2.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [currentTab, setcurrentTab] = useState("Home");

  return (
    <div className="">
      <div className="text-[#393e41] absolute w-full flex justify-between p-3 items-center">
        <img className="h-10" src={img1} />
        <div className="flex space-x-3 items-center">
          <div className="flex font-semibold text-lg items-center space-x-4">
            <button
              className={`${currentTab === "Home" ? "text-[#783f8e]" : ""}`}
              onClick={() => {
                setcurrentTab("Home");
                navigate("/");
              }}
            >
              Home
            </button>

            <button
              className={`${currentTab === "Products" ? "text-[#783f8e]" : ""}`}
              onClick={() => {
                setcurrentTab("Products");
                navigate("/Products");
              }}
            >
              Products
            </button>

            <button
              className={`${currentTab === "aboutUs" ? "text-[#783f8e]" : ""}`}
              onClick={() => setcurrentTab("aboutUs")}
            >
              Contact Us
            </button>
          </div>

          <button className="bg-[#783f8e] py-1 px-3 rounded text-white shadow">
            Reach Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
