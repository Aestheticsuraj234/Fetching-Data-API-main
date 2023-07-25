import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const SearchData = () => {
  const { searchQuery, setSearchQuery, handleFilterData } = useContext(
    GlobalContext
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilterData(searchQuery);
    
  };

  return (
    <>
      <form  onSubmit={handleSubmit}>
        <div className="mb-3 rounded-full">
          <div className="relative mb-4 flex flex-wrap items-stretch">
            <input
              type="search"
              className="relative mt-3 text-center w-60 flex-auto rounded-full border border-solid border-gray-600 bg-transparent bg-clip-padding px-3 py-[0.25rem] font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:placeholder:text-gray-500 dark:focus:border-primary"
              placeholder="Search API Data"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button
            
              className="relative z-[2] flex items-center bg-blue-700 p-4 mt-3 ml-2 text-xs rounded-full font-medium uppercase leading-tight text-white shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-300 ease-in-out hover:scale-110"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchData;
