import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Searched() {
  const params = useParams().id;
  const [searched, setSearched] = useState([]);
  //ex : cookie

  useEffect(() => {
    getSearched();
  }, [params]);

  const getSearched = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
          import.meta.env.VITE_SOME_KEY
        }&query=${params}`
      );

      setSearched(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h1 className=" mt-16 mb-12 mx-auto w-11/12 text-3xl font-medium">
        {params} Recipes
      </h1>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3">
        {searched.map((item: any) => {
          return (
            <div
              key={item.id}
              className="mx-auto my-3 max-w-sm rounded overflow-hidden shadow-lg"
            >
              <Link to={"/react-food-recipe/recipe/" + item.id}>
                <img loading="lazy" className="w-full" src={item.image} />
              </Link>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  <Link to={"/recipe/" + item.id}>{item.title}</Link>
                </div>
              </div>
              <div className="px-6 pt-4 pb-2"></div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Searched;
