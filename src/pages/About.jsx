import { useSelector } from "react-redux";
import Navbar from "../layouts/Navbar";

function About() {
  const dark = useSelector(state => state.dark)
  return (
    <div className={`h-full ${dark ? "dark" :""}`}>
      <Navbar />
      <div className="dark:bg-[#272935]  h-full">
        <div className=" py-20 px-8">
          <h1 className="text-[60px] text-center font-bold text-[#394E6A] dark:text-[#F7F7F7]">
            We love <span className="bg-blue-700 dark:bg-secondary text-[36px] dark:text-[#272935] px-4 py-4 rounded-2xl text-[#DBE1FF] dark:">Comfy </span>
          </h1>
          <p className=" dark:text-[#F7F7F7] text-[#394E6A] max-w-[672px] mx-auto text-[18px] pt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus,
            quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit
            ad illo sed officiis ea tempore! Similique eos minima sit porro,
            ratione aspernatur!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
