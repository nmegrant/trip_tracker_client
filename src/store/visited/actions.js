import axios from "axios";
import Geocode from "react-geocode";

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
      const { lat, lng, visited } = location;
      const splitUpLocation = visited.split(" ");
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
      const newVisited = await axios.post(`http://localhost:4000/visited`, {
        long: lng,
        lat,
        city,
        country,
      });
      console.log(newVisited.data);
      dispatch(addVisited(newVisited.data));
    } catch (error) {
      console.log(`Error adding new city visisted: ${error}`);
    }
  };
}
