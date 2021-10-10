import GoogleMapReact from "google-map-react";
import placeImage from "../../images/restaurant.jpg";
import ReactStars from "react-rating-stars-component";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) => {

    const yellow = '#ffd700';
  return (
    <div className="h-screen">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        center={coordinates}
        default={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
        {places?.map((place, i) => (
          <div
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
            className="w-20 h-30  bg-white rounded-md shadow-xl overflow-hidden"
          >
            <p className="text-gray-800 font-medium text-xs p-1 text-center truncate">
              {place.name}
            </p>
            <img
              className="w-full max-h-10 object-cover p-0.5 overflow-hidden rounded-sm"
              src={place?.photo ? place.photo.images.large.url : placeImage}
              alt="Place"
            />
            <div className="flex justify-center mb-1">
              <ReactStars
                count={place.rating}
                size={12}
                isHalf={false}
                color= {yellow}
                activeColor= {yellow}
              />
            </div>
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
