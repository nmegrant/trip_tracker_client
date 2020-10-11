import axios from "axios";
import Geocode from "react-geocode";
import { toVisitFetched } from "../toVisit/actions";

export function visitedFetched(visitedCities) {
  return {
    type: "VISITED_FETCHED",
    payload: visitedCities,
  };
}

export function fetchVisitedThunkCreator() {
  return async function visitedThunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:4000/visited`);
      dispatch(visitedFetched(response.data));
    } catch (error) {
      console.log(`Error fetching visited: ${error}`);
    }
  };
}

export function addVisited(location) {
  return { type: "ADD_NEW_VISITED", payload: location };
}

export function addNewVisitedThunkCreator(location) {
  return async function addNewVisited(dispatch, getState) {
    try {
      const { lat, lng } = location;

      var country = "";
      var city = "";

      await Geocode.fromLatLng(lat, lng).then(
        (response) => {
          const address = response.results[0].formatted_address;
          const splitAddress = address.split(", ");

          country = splitAddress[splitAddress.length - 1];

          if (!/[\d]/.test(splitAddress[2])) {
            city = splitAddress[2];
          } else if (!/[\d]/.test(splitAddress[1])) {
            city = splitAddress[1];
          }
        },
        (error) => {
          console.error(error);
        }
      );

      const newVisited = await axios.post(`http://localhost:4000/visited`, {
        long: lng,
        lat,
        city,
        country,
      });

      const newToVisit = await axios.delete(`http://localhost:4000/tovisit`);

      dispatch(addVisited(newVisited.data));
      if (newToVisit.length > 0) {
        dispatch(toVisitFetched(newToVisit.data));
      }
    } catch (error) {
      console.log(`Error adding new city visisted: ${error}`);
    }
  };
}
