import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_SOME_KEY
        }&number=8&tags=vegetarian`
      );

      const data = await api.json();
      setVeggie(data.recipes);
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
    }
  };

  return (
    <>
      <h1 className=" mt-16 mb-12 mx-auto w-11/12 text-3xl font-medium">
        Veggie Recipes
      </h1>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3">
        {veggie.map((item: any) => {
          return (
            <div
              key={item.id}
              className="mx-auto my-3 max-w-sm rounded overflow-hidden shadow-lg"
            >
              <Link to={"/recipe/" + item.id}>
                <img className="w-full" src={item.image} />
              </Link>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  <Link to={"/recipe/" + item.id}>{item.title}</Link>
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {item.readyInMinutes} Min
                </span>

                {item.cuisines.map((cuisin: string) => {
                  return (
                    <span
                      key={cuisin}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {cuisin}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Veggie;
