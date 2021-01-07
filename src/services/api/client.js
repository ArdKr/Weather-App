/**
 * https://cors-anywhere.herokuapp.com/ for getting rid of CORS problems
 * BASE_URL + location id -> gets information about the location
 * SEARCH_URL + word -> searches a city
 */

const BASE_URL =
  "https://thingproxy.freeboard.io/fetch/https://www.metaweather.com/api/location/";
// "https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/";
const SEARCH_URL = BASE_URL + "search/";

// I will be using axios to make the requests
const axios = require("axios");

/**
 * Handles how the request is made to the server
 * * ex. Can be used to switch from axios to fetch() without having to change many functions
 *
 * @param {string} url
 * @param {object} params
 */
const request = (url = "", params = {}) => {
  return axios.get(`${url}`, { params });
};

/**
 * Handle responses in the promise
 * * Exported from functions below for DRY reasons
 *
 * @param {object} response
 */
const handleResponse = (response) => {
  if (response.statusText === "OK") {
    return response.data;
  }

  throw new Error(response.statusText);
};

/**
 * Search cities around the world
 *
 * @param {string} query
 */
export const searchLocation = async (query) => {
  const requestPromise = await request(SEARCH_URL, { query })
    .then((response) => {
      return handleResponse(response);
    })
    .catch((e) => {
      return Promise.reject(e.message);
    });

  return requestPromise;
};

/**
 * Search a city by cordinations
 *
 * @param {Number} long
 * @param {Number} latt
 */
export const searchLocationByCords = async (long, latt) => {
  const requestPromise = await request(SEARCH_URL, {
    lattlong: `${long},${latt}`,
  })
    .then((response) => {
      return handleResponse(response);
    })
    .catch((e) => {
      return Promise.reject(e.message);
    });

  return requestPromise;
};

/**
 * Get weather information for a city by id
 *
 * @param {int} cityId
 */
export const getWeatherInformation = async (cityId) => {
  const requestPromise = await request(`${BASE_URL}${cityId}`)
    .then((response) => {
      return handleResponse(response);
    })
    .catch((e) => {
      return Promise.reject(e.message);
    });

  return requestPromise;
};
