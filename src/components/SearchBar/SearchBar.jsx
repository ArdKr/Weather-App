import React, { useState } from "react";

import Input from "../Input";
import Button from "../Button";

import { useDispatch } from "react-redux";
import { updateWeatherData } from "../../services/redux/slices/weatherSlice";

import {
  searchLocation,
  getWeatherInformation,
} from "../../services/api/client";

const SearchBar = ({ switchSearchBar }) => {
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const dispatch = useDispatch();

  const onSearchButtonClick = () => {
    if (searchInput.length > 1) {
      searchLocation(searchInput).then((response) => {
        // Remove any error message
        setErrorMessage("");

        if (response.length === 0) {
          setErrorMessage("No city found");
          setSearchResults([]);
          return;
        }

        setSearchResults(response);
      });

      return;
    }

    setErrorMessage("Search word is too short");
  };

  const openCityById = (cityId) => {
    dispatch(updateWeatherData([]));
    getWeatherInformation(cityId).then((response) => {
      dispatch(updateWeatherData(response));
    });
  };

  const CityField = ({ cityName, cityId }) => {
    return (
      <div
        onClick={() => openCityById(cityId)}
        className="result-item transition-all text-gray text-normal px-5 py-9 cursor-pointer w-full border-light border-transparent hover:border-gray flex justify-between items-center"
      >
        {cityName}
        <div className="icon transform scale-0 group-hover:scale-100 transition-all">
          <i className="fas fa-chevron-right "></i>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full bg-blue text-gray-dark absolute top-0 left-0 z-50 p-8 px-12 md:px-20">
      <div className="text-white text-lg w-full text-right">
        <i
          className="fas fa-times cursor-pointer"
          onClick={switchSearchBar}
        ></i>
      </div>

      <div className="search-input flex w-full justify-between mt-16 gap-5">
        <div className="flex-grow">
          <Input
            placeholder="search location"
            icon="search"
            fullHeight={true}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="flex">
          <Button onClick={onSearchButtonClick}>Search</Button>
        </div>
      </div>
      <p className="text-red-700 text-normal mt-4">{errorMessage}</p>

      <div className="search-results flex flex-col mt-20 group gap-2 overflow-auto max-h-96">
        {searchResults.map((city) => {
          return (
            <CityField
              cityName={city.title}
              cityId={city.woeid}
              key={city.woeid}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
