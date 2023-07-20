import Home from "./Home";
import Category from "./Category";
import Recipe from "./Recipe";
import TestPage from "./TestPage";
import Searched from "./Searched";
import { Routes, Route } from "react-router-dom";
import ErrorPageNotFound from "./ErrorPageNotFound";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/react-food-recipe">
          <Route index element={<Home />}></Route>
          <Route path="searched/:id" element={<Searched />}></Route>
          {/* <Route path="cuisine/:type" element={<Cuisine />}></Route> */}
          <Route path="recipe/:name" element={<Recipe />}></Route>
          <Route path="category/:type" element={<Category />}></Route>
        </Route>
        <Route path="*" element={<ErrorPageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default Pages;
