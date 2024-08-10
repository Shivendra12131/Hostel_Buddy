// api.js
import axios from "axios";
import { fetchToken } from './jwtLocalStorage.js';

const BASE_URL = import.meta.env.VITE_API_URL;

const getHeaders = () => {
  const token = fetchToken();
  return {
    Authorization: `Bearer ${token}`,
  };
};

export const getDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${url}`, {
      params, 
      headers: getHeaders(),
    });
    return data;
  } catch (err) {
    console.error(`Error fetching data from ${url}:`, err);
    throw err;
  }
};

export const fetchProducts = async (page = 1, limit = 12) => {
  const params = { page, limit };
  try {
    const data = await getDataFromApi('/products', params);
    return data;
  } catch (err) {
    console.error('Error fetching products:', err);
    throw err;
  }
};

export const postDataFromApi = async (url, body) => {
  try {

    const { data } = await axios.post(BASE_URL + url, body, {

      headers: getHeaders(),
    });
    return data;
  } catch (err) {
    console.error(`Error posting data to ${url}:`, err);
    throw err;
  }
};

export const deleteDataFromApi = async (url, params) => {
  try {

    const { data } = await axios.delete(BASE_URL + url, {
      params,
      headers: getHeaders(),
    });
    return data;
  } catch (err) {
    console.error(`Error deleting data from ${url}:`, err);
    throw err;
  }
};

export const putDataFromApi = async (url, params = "", body) => {
    try {
        const {data} = await axios.put(BASE_URL + url, body, {
            params,
            headers : getHeaders() ,
        })
        return data;
    } catch (err) {
        console.log(err)
        return err;
    }
}

export const patchDataFromApi = async (url, body, params) => {
  try {
    const { data } = await axios.patch(BASE_URL + url, body, {
      params,
      headers: getHeaders(),
    });
    return data;
  } catch (err) {
    console.error(`Error patching data to ${url}:`, err);
    throw err;
  }
};