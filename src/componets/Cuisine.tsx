import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useParams } from "react-router-dom";
function Cuisine() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-16 text-white">
      <Carousel arrows={false} responsive={responsive}>
        <button className="w-72 h-44 bg-[#F6784C] rounded-md">
          <a href="/my-react-food-recipe/category/french">French</a>
        </button>
        <button className="w-72 h-44 bg-[#C4D600] rounded-md">
          <a href="/my-react-food-recipe/category/greek">Greek</a>
        </button>
        <button className="w-72 h-44 bg-[#EAAA00] rounded-md">
          <a href="/my-react-food-recipe/category/italian">Italian</a>
        </button>
        <button className="w-72 h-44 bg-[#ED8B00] rounded-md">
          <a href="/my-react-food-recipe/category/middle%20eastern">
            Middle Eastern
          </a>
        </button>
        <button className="w-72 h-44 bg-[#84BD00] rounded-md">
          <a
            className="w-full h-full"
            href="/my-react-food-recipe/category/latin%20american"
          >
            Latin American
          </a>
        </button>
        <button className="w-72 h-44 bg-[#F6784C] rounded-md">
          <a href="/my-react-food-recipe/category/chinese">Chinese</a>
        </button>
        <button className="w-72 h-44 bg-[#C4D600] rounded-md">
          <a href="/my-react-food-recipe/category/indian">Indian</a>
        </button>
      </Carousel>
    </div>
  );
}

export default Cuisine;
