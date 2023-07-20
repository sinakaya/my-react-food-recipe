import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Search() {
  const inputRef: any = useRef();
  const navigate = useNavigate();

  function submitHandler(e: any) {
    e.preventDefault();
    navigate("/react-food-recipe/searched/" + inputRef.current.value);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="relative">
        <div className="rounded-r-md flex h-full w-10 absolute top-0 right-0 bg-nav-active ">
          <button className="mx-auto my-auto">
            <AiOutlineSearch className="text-white" size={22} />
          </button>
        </div>
        <input
          type="search"
          ref={inputRef}
          placeholder="Search for recipes..."
          className="bg-slate-200 !outline-none py-1 rounded-md px-20"
          required
        />
      </div>
    </form>
  );
}

export default Search;
