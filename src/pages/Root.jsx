import { Outlet } from "react-router-dom";

function Root() {
  return <div className="h-full dark">
    <Outlet />
  </div> ;
}

export default Root;
