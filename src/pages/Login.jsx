import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className=" mt-20 mx-auto font-bold  md:text-[20px] lg:text-[60px] text-center flex flex-col items-center">
      coming soon...{" "}
      <Link to={"/"}>
        
        <button className="btn btn-info w-40 text-[#F7F7F7]">Home</button>
      </Link>
    </div>
  );
}

export default Login;
