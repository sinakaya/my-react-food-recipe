import { useState } from "react";
import { CiSearch } from "react-icons/Ci";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function submitHandler(e: any) {
    e.preventDefault();
    navigate("/searched/" + input);
    setInput("");
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="relative">
        <div className="flex h-full w-10 absolute top-0 right-0 bg-green-500">
          <button className="mx-auto my-auto">
            <CiSearch className="text-white" size={22} />
          </button>
        </div>
        <input
          type="search"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for recipes..."
          className="bg-slate-200 !outline-none py-1 rounded-sm px-20"
        />
      </div>
    </form>
  );
}

export default Search;
