import axios from "axios";
import Geocode from "react-geocode";

export function toVisitFetched(toVisitCities) {
  return {
    type: "TO_VISITED_FETCHED",
    payload: toVisitCities,
  };
}

export function fetchToVisitThunkCreator() {
  return async function toVisitThunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:4000/tovisit`);
      dispatch(toVisitFetched(response.data));
    } catch (error) {
      console.log(`Error fetching visited: ${error}`);
    }
  };
}

export function addToVisit(location) {
  return { type: "ADD_NEW_TO_VISITED", payload: location };
}

export function addNewToVisitThunkCreator(location) {
  return async function addNewToVisit(dispatch, getState) {
    try {
      const { lat, lng, toVisit } = location;
      const splitUpLocation = toVisit.split(" ");
      var country = "";

      let city = splitUpLocation[0].replace(/,/g, "");
      if (splitUpLocation.length !== 2) {
        await Geocode.fromLatLng(lat, lng).then(
          (response) => {
            const address = response.results[0].formatted_address;
            const splitAddress = address.split(" ");
            country = splitAddress[splitAddress.length - 1];
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        country = splitUpLocation[1];
      }
      const newToVisit = await axios.post(`http://localhost:4000/tovisit`, {
        long: lng,
        lat,
        city,
        country,
      });
      dispatch(addToVisit(newToVisit.data));
    } catch (error) {
      console.log(`Error adding new city to visist: ${error}`);
    }
  };
}
