import { useEffect, useState } from "react";
import { getPlaceData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    setisLoading(true);
    if (bounds) {
      const placesDataHandler = async (type, sw, ne) => {
        const res  = await getPlaceData(type, sw, ne);
        const { data } = await res;
        console.log(data);
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setisLoading(false);
      };
      placesDataHandler(type, bounds.sw, bounds.ne);
    }
  }, [type, bounds]);

  return (
    <>
      <div className="">
        <Header setCoordinates={setCoordinates} />
      </div>
      <div className="flex flex-row">
        <div className="w-1/4 flex-none border-r border-gray-200">
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type = {type}
            setType = {setType}
            rating = {rating}
            setRating = {setRating}
          />
        </div>
        <div className="w-3/4 flex-grow">
          <Map
            coordinates={coordinates}
            setBounds={setBounds}
            setCoordinates={setCoordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </div>
      </div>
    </>
  );
}

export default App;
