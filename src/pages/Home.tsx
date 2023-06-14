import Popular from "../componets/Popular";
import Veggie from "../componets/Veggie";
import Victor from "../images/main-pic.jpg";

function Home() {
  return (
    <>
      <div className="mx-auto w-fit relative  mt-14">
        <img
          loading="lazy"
          className="rounded-4xl mx-auto "
          src={Victor}
          alt=""
        />
        <div className="absolute top-3 left-3  md:top-1/4 md:left-10 ">
          <h3 className="text-pic-orange  font-semibold text-lg ">
            Best eating experience
          </h3>
          <h2 className="text-white font-bold text-3xl my-2">
            Mike's famous salad with cheese
          </h2>
          <h3 className="text-white font-semibold text-lg">
            By Sina Khaninejad
          </h3>
        </div>
      </div>

      <Popular />
      <Veggie />
    </>
  );
}

export default Home;
