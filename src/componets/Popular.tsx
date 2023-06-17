import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Popular() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = async () => {
    const check = sessionStorage.getItem("popular");
    if (check) {
      setTrending(JSON.parse(check));
    } else {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/random?apiKey=${
            import.meta.env.VITE_SOME_KEY
          }&number=8`
        );
        setTrending(response.data.recipes);
        sessionStorage.setItem(
          "popular",
          JSON.stringify(response.data.recipes)
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  // const getTrending = async () => {
  //   const check = sessionStorage.getItem("popular");

  //   if (check) {
  //     setTrending(JSON.parse(check));
  //   } else {
  // const api = await fetch(
  //   `https://api.spoonacular.com/recipes/random?apiKey=${
  //     import.meta.env.VITE_SOME_KEY
  //   }&number=8`
  // );

  //     const data = await api.json();
  //     //console.log(typeof data.recipes);
  //     setTrending(data.recipes);
  //     sessionStorage.setItem("popular", JSON.stringify(data.recipes));
  //   }
  // };

  return (
    <>
      <h1 className="mt-16 mb-12 mx-auto w-11/12 text-3xl font-medium">
        Recommended Recipes
      </h1>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3">
        {trending.map((item: any) => {
          //console.log(typeof item);
          //console.log(typeof item.title);
          return (
            <div
              key={item.id}
              className="mx-auto my-3 max-w-sm rounded overflow-hidden shadow-lg"
            >
              <Link to={"/my-react-food-recipe/recipe/" + item.id}>
                <img loading="lazy" className="w-full" src={item.image} />
              </Link>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {" "}
                  <Link to={"/my-react-food-recipe/recipe/" + item.id}>
                    {item.title}
                  </Link>
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

export default Popular;

// {trending.map((item) => {
//   return (
//     <div
//       key={item.id}
//       className="mx-auto my-3 max-w-sm rounded overflow-hidden shadow-lg"
//     >
//       <Link to={"/recipe/" + item.id}>
//         <img className="w-full" src={item.image} />
//       </Link>
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">
//           {" "}
//           <Link to={"/recipe/" + item.id}>{item.title}</Link>
//         </div>
//       </div>
//       <div className="px-6 pt-4 pb-2">
//         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//           {item.readyInMinutes} Min
//         </span>

//         {item.cuisines.map((cuisin) => {
//           return (
//             <span
//               key={cuisin}
//               className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//             >
//               {cuisin}
//             </span>
//           );
//         })}
//       </div>
//     </div>
//   );
// })}
