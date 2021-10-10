import { Autocomplete } from "@react-google-maps/api";
import { useState } from "react";

const Header = ({setCoordinates}) => {
  const [autocomplete, setAutoComplete] = useState(null);

  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({lat, lng});
  }

  return (
    <header className="bg-indigo-500 shadow-lg">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center ml-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6xs"
            viewBox="0 0 20 20"
            fill="#ffffff"
          >
            <path
              fillRule="evenodd"
              d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-semibold text-white ml-2 text-xl">Near me</span>
        </div>
        <div className="flex mr-7 items-center">
          <div className="font-medium text-white mr-4 text-md">
            Explore new places
          </div>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className="relative text-gray-600 focus-within:text-gray-800">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="q"
                className="py-2 w-68 text-sm text-bg-700 bg-indigo-50 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-800 truncate"
                placeholder="Search"
                autoComplete="on"
              />
            </div>
          </Autocomplete>
        </div>
      </div>
    </header>
  );
};

export default Header;
