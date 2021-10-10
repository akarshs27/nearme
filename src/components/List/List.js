import { useState, useEffect, createRef } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import SkeletonLoader from "../Skeleton/SkeletonLoader";

const List = ({
  places,
  childClicked,
  isLoading,
  type,
  rating,
  setType,
  setRating,
}) => {
  const [elRef, setElRef] = useState([]);

  useEffect(() => {
    setElRef((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <div className="p-5 overflow-y-scroll h-screen">
      <h2 className="font-medium text-xl text-gray-800 mb-3">
        Restaurants, Hotels and Attractions around you
      </h2>

      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
          <div className="flex items-center">
            <div className="mr-8">
              <label
                className="text-gray-500 text-xs font-medium"
                htmlFor="type"
              >
                Type
                <select
                  id="type"
                  className="block py-1 pr-3 border-b border-gray-400 bg-white focus:outline-none focus:ring-primary-500 text-base text-gray-800"
                  name="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="restaurants">Restaurants</option>
                  <option value="hotels">Hotels</option>
                  <option value="attractions">Attractions</option>
                </select>
              </label>
            </div>
            <div className="">
              <label
                className="text-gray-500 text-xs font-medium"
                htmlFor="rating"
              >
                Select
                <select
                  id="ratind"
                  className="block py-1 pr-3 border-b border-gray-400 bg-white focus:outline-none focus:ring-primary-500 text-base text-gray-800"
                  name="rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="">Rating</option>
                  <option value={0}>All</option>
                  <option value={3}>Above 3.0</option>
                  <option value={4}>Above 4.0</option>
                  <option value={4.5}>Above 4.5</option>
                </select>
              </label>
            </div>
          </div>

          <div className="flex flex-col justify-center mt-8 ">
            {places?.map((place, i) => (
              <div key={i} ref={elRef[i]} >
              <PlaceDetails
                place={place}
              
                selected={Number(childClicked) === i}
                refProp={elRef[i]}
              />
              </div>
            ))}
          </div>
        </>
      )}
     
    </div>
  );
};

export default List;
