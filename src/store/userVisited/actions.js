import axios from "axios";
import Geocode from "react-geocode";
import { loading, doneLoading } from "../appState/actions";

export function userVisitedFetched(visitedCities) {
  return {
    type: "USER_VISITED_FETCHED",
    payload: visitedCities,
  };
}

export function newPastTripAdded(trip) {
  return {
    type: "NEW_VISITED_ADDED",
    payload: trip,
  };
}

export function fetchUserVisitedThunkCreator() {
  return async function userVisitedThunk(dispatch, getState) {
    try {
      dispatch(loading());
      const token = localStorage.getItem("token");
      const response = await axios.get(`http://localhost:4000/uservisited`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(userVisitedFetched(response.data));
      dispatch(doneLoading());
    } catch (error) {
      console.log(`Error fetching visited: ${error}`);
    }
  };
}

export function createNewUserVisitedThunkCreator(trip) {
  return async function newUserVisitedThunk(dispatch, getState) {
    const token = localStorage.getItem("token");
    try {
      Geocode.setApiKey(process.env.REACT_APP_API_KEY);
      Geocode.setLanguage("en");
      Geocode.enableDebug();
      await Geocode.fromAddress(`${trip.city}, ${trip.country}`).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          trip = { ...trip, long: lng, lat };
        },
        (error) => {
          console.error(error);
        }
      );
      const newTrip = await axios.post(
        `http://localhost:4000/uservisited`,
        trip,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(newPastTripAdded(newTrip.data));
    } catch (error) {
      console.log(`Error logging past user trip: ${error}`);
    }
  };
}
