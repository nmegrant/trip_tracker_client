import axios from "axios";
import Geocode from "react-geocode";

export function userToVisitFetched(userToVisitCities) {
  return {
    type: "USER_TO_VISIT_FETCHED",
    payload: userToVisitCities,
  };
}

export function newTripAdded(trip) {
  return {
    type: "NEW_TO_VISIT_ADDED",
    payload: trip,
  };
}

export function fetchUserToVisitThunkCreator() {
  return async function userToVisitThunk(dispatch, getState) {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`http://localhost:4000/usertovisit`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(userToVisitFetched(response.data));
    } catch (error) {
      console.log(`Error fetching user to visit`);
    }
  };
}

export function createNewUserToVisitThunkCreator(trip) {
  return async function newUserToVisitThunk(dispatch, getState) {
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
        `http://localhost:4000/usertovisit`,
        trip,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(newTripAdded(newTrip.data));
    } catch (error) {
      console.log(`Error creating new user trip: ${error}`);
    }
  };
}
