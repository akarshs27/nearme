import placeImage from "../../images/restaurant.jpg";
const PlaceDetails = ({ selected, refProp, place }) => {
  if (selected) {
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
   
  const defualtValue = 'Not listed';

  return (
    <div>
      <div className="overflow-hidden shadow-xl rounded-lg h-90 w-60 md:w-80 cursor-pointer mb-4">
        <div className="mb-2">
          <img
            className="w-full max-h-40 object-cover"
            src={place?.photo ? place.photo.images.large.url : placeImage}
            alt="Restaurant"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between pl-3 pr-3">
            <h2 className="text-gray-800 text-md font-medium">{place.name}</h2>
            <p className="text-gray-800 text-sm font-medium">
              {place.rating}/5
            </p>
          </div>
          <div className="flex items-center justify-between pl-3 pr-3">
            <h2 className="text-gray-700 text-sm font-normal">Price</h2>
            <p className="text-gray-600 text-sm font-normal">
              {place?.price_level ? place.price_level : defualtValue}
            </p>
          </div>
          <div className="flex items-center justify-between pl-3 pr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-700 flex-none"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <p className="text-gray-600 text-sm font-normal">{place?.phone ? place.phone: defualtValue}</p>
          </div>
          <div className="flex items-center justify-between pl-3 pr-3 pb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-700 mr-8 flex-none"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <p className="text-gray-600 text-sm font-normal truncate">
              {place?.address_obj?.street1 ? place.address_obj.street1 : defualtValue}
            </p>
          </div>
          <div className="flex items-center pl-1 pr-1 justify-center pb-4">
            <button className="text-indigo-500 text-center font-medium text-sm" onClick={() => window.open(place.web_url, '_blank')}>
              See more infomation about this place
            </button>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 text-indigo-500 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
