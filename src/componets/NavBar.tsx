import { TbToolsKitchen2 } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";

function NavBar() {
  const [hamburger, sethamburger] = useState(false);

  return (
    <nav className=" text-base  flex justify-between align-middle mt-8">
      <div className="text-center">
        <Link to="/my-react-food-recipe">
          <TbToolsKitchen2 size={50} />
        </Link>
      </div>
      <Search />
      <ul className=" font-semibold text-nav-link fs- hidden  md:flex  md:w-48  md:justify-between ">
        <li>
          <Link to="/my-react-food-recipe">Home</Link>
        </li>
        <li>
          <Link
            target="_blank"
            to="https://github.com/sinakaya/my-react-food-recipe"
          >
            Github
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            to="https://sinakaya.github.io/my-portfolio-react/"
          >
            About
          </Link>
        </li>
      </ul>
      <div
        onClick={() => sethamburger(!hamburger)}
        className="cursor-pointer w-fit h-fit md:hidden"
      >
        {hamburger ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
      </div>
      {hamburger ? (
        <div className="z-10 rounded-sm absolute w-8/12 h-4/6 left-1/4 top-20 bg-white shadow-lg md:hidden">
          <ul className=" font-semibold flex flex-col justify-evenly items-center h-full">
            <li>
              <Link to="/my-react-food-recipe">Home</Link>
            </li>
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 "></hr>
            <li>
              <Link to="/my-react-food-recipe">Explore</Link>
            </li>
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 "></hr>
            <li>
              <Link to="/my-react-food-recipe">Help</Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}

export default NavBar;
