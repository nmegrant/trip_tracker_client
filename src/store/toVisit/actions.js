import axios from "axios";
import Geocode from "react-geocode";
import { loading, doneLoading } from "../appState/actions";
import { showMessageThunkCreator } from "../appState/actions";

export function toVisitFetched(toVisitCities) {
  return {
    type: "TO_VISITED_FETCHED",
    payload: toVisitCities,
  };
}

export function fetchToVisitThunkCreator() {
  return async function toVisitThunk(dispatch, getState) {
    try {
      dispatch(loading());
      const response = await axios.get(`http://localhost:4000/tovisit`);
      dispatch(toVisitFetched(response.data));
      dispatch(doneLoading());
    } catch (error) {
      console.log(`Error fetching to visit: ${error}`);
    }
  };
}

export function addToVisit(location) {
  return { type: "ADD_NEW_TO_VISITED", payload: location };
}

export function addNewToVisitThunkCreator(location) {
  return async function addNewToVisit(dispatch, getState) {
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
      const newToVisit = await axios.post(`http://localhost:4000/tovisit`, {
        long: lng,
        lat,
        city,
        country,
      });
      dispatch(addToVisit(newToVisit.data));
      dispatch(showMessageThunkCreator("New to visit location added.", "info"));
    } catch (error) {
      dispatch(
        showMessageThunkCreator("Unable to add new to visit location.", "warn")
      );
      console.log(`Error adding new city to visist: ${error}`);
    }
  };
}

export function toVisitUpdatedFetched(toVisitCities) {
  return {
    type: "TO_VISITED_UPDATED_FETCHED",
    payload: toVisitCities,
  };
}

export function deleteToVisitThunkCreator(location) {
  return async function deleteToVisitThunkCreator(dispatch, getState) {
    try {
      const { city, country } = location;

      //why does delete not work???
      const newToVisit = await axios.request({
        url: `http://localhost:4000/tovisit`,
        method: "DELETE",
        data: {
          country,
          city,
        },
      });

      if (newToVisit.data.length > 0) {
        dispatch(toVisitUpdatedFetched(newToVisit.data));
        dispatch(
          showMessageThunkCreator("Deleted location from to visit", "info")
        );
      }
    } catch (error) {
      console.log(`Error deleting city: ${error}`);
    }
  };
}
