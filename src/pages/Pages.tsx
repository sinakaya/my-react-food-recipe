import Home from "./Home";
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";
import Searched from "./Searched";
import { Routes, Route } from "react-router-dom";
import Errorfof from "./Errorfof";

function Pages() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/my-react-food-recipe" element={<Home />}></Route>

        <Route path="/searched/:id" element={<Searched />}></Route>
        <Route path="/cuisine/:type" element={<Cuisine />}></Route>
        <Route path="/recipe/:name" element={<Recipe />}></Route>

        <Route path="/*" element={<Errorfof />}></Route>
      </Routes>
    </div>
  );
}

export default Pages;
