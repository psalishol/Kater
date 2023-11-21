import axios from 'axios';

import {world_api_token, authivate_token} from '@env';

class RequestService {
  private authHeader = {
    'X-RapidAPI-Key': world_api_token,
    'X-RapidAPI-Host': 'andruxnet-world-cities-v1.p.rapidapi.com',
  };

  /**
   * Performs a GET request to the specified API endpoint.
   * @param {string} endpoint - The API endpoint URL.
   * @param {any} data - (Optional) Query parameters for the GET request.
   * @returns {Promise<any>} - A Promise that resolves with the result of the GET request.
   */
  getRequest = async (
    url: string,
    data?: any,
    authHeader?: boolean,
    authivate?: boolean,
  ): Promise<any> => {
    try {
      const result = await axios.get(url, {
        method: 'GET',
        headers: authHeader
          ? authivate
            ? {Authorization: `Bearer ${authivate_token}`}
            : this.authHeader
          : {'Content-Type': 'application/json'},
        params: data || {}, // Including query parameters if provided.
      });

      return result;
    } catch (error) {
      console.error('Error in getRequest:', error);

      throw error;
    }
  };

  /**
   * Performs a POST request to the specified API endpoint.
   * @param {string} endpoint - The API endpoint URL.
   * @param {any} data - The data to be sent in the request body.
   * @param {any} headers - (Optional) Additional headers for the request.
   * @returns {Promise<any>} - A Promise that resolves with the result of the POST request.
   */
  postRequest = async (
    url: string,
    data: any,
    authHeader?: boolean,
    authivate?: boolean,
  ): Promise<any> => {
    try {
      const result = await axios.post(url, data, {
        withCredentials: true,

        headers: authHeader
          ? authivate
            ? {Authorization: `Bearer ${authivate_token}`}
            : this.authHeader
          : {'Content-Type': 'application/json'},

        responseType: 'json',
      });

      return result;
    } catch (error) {
      console.error('Error in postRequest:', (error as any).response.data);
      throw error;
    }
  };

  deleteRequest = async (
    url: string,
    authHeader?: boolean,
    authivate?: boolean,
  ): Promise<any> => {
    try {
      const result = await axios.delete(url, {
        withCredentials: true,
        headers: authHeader
          ? this.authHeader
          : {'Content-Type': 'application/json'},

        responseType: 'json',
      });

      return result;
    } catch (error) {
      console.error('Error in deleteRequest:', (error as any).response.data);
      throw error;
    }
  };
}

export default RequestService;
