export const getPlaceData = async(type, sw, ne) => {

    try {
        const response = await fetch(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary?bl_latitude=${sw.lat}&tr_latitude=${ne.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}&restaurant_tagcategory_standalone=10591&restaurant_tagcategory=10591&limit=30&currency=USD&open_now=false&lunit=km&lang=en_US`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API 
            }
        });
        const data = await response.json();
        return data;
     
    } catch (error) {
        console.log(error);
    }
}