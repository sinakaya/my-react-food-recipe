import { TbToolsKitchen2 } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Search from "./Search";

function NavBar() {
  return (
    <nav className="text-base  flex justify-between align-middle mt-8">
      <div className="text-center">
        <Link to="/my-react-food-recipe">
          <TbToolsKitchen2 size={50} />
        </Link>
      </div>
      <Search />
      <ul className="font-semibold text-nav-link fs- hidden  md:flex  md:w-48  md:justify-between ">
        <li>
          <Link to="/my-react-food-recipe">Home</Link>
        </li>
        <li>
          <Link to="/my-react-food-recipe">Explore</Link>
        </li>
        <li>
          <Link to="/my-react-food-recipe">Help</Link>
        </li>
      </ul>
      <div className="cursor-pointer w-fit h-fit md:hidden">
        <GiHamburgerMenu size={30} />
      </div>
    </nav>
  );
}

export default NavBar;
