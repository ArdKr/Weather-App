import React from "react";

import Button from "../Button";

import { useDispatch } from "react-redux";
import { updateWeatherData } from "../../services/redux/slices/weatherSlice";

import {
  getWeatherInformation,
  searchLocationByCords,
} from "../../services/api/client";

const SearchLocation = () => {
  const dispatch = useDispatch();

  const getCordinations = () => {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(getLocationByCords);
    } else {
      console.log("Couldn't get location");
    }
  };

  const getLocationByCords = (position) => {
    const long = position.coords.longitude;
    const lat = position.coords.latitude;

    dispatch(updateWeatherData([]));

    searchLocationByCords(lat, long).then((response) => {
      const newCity = response[0].woeid;

      getWeatherInformation(newCity).then((response) => {
        dispatch(updateWeatherData(response));
      });
    });
  };

  return (
    <div className="search p-12 flex justify-between">
      <Button color="gray-darker" onClick={alert}>
        Seach for places
      </Button>

      <Button
        color="gray-darker"
        onClick={getCordinations}
        rounded={true}
        paddingEqual={true}
      >
        <i className="fas fa-map-marker-alt"></i>
      </Button>
    </div>
  );
};

export default SearchLocation;
