import {RequestService} from '../../../lib';
import {Location} from '../state';

const apiKey = 'AIzaSyAExqn-v-guxgZ8S1LyV7AttHLlmSBeqlU';

/**getLocation fetches location from Latitude and Longitu
 *
 * @param latitude device current latitude
 * @param longitude  device current longitude
 * @returns
 */
export const getLocation = async (
  latitude?: number,
  longitude?: number,
): Promise<Location | undefined> => {
  const req = new RequestService();

  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  try {
    const response = await req.getRequest(apiUrl);

    if (response.data.status === 'OK' && response.data.results.length > 0) {
      const addressComponents = response.data.results[0].address_components;

      let location: Location = {
        state: '',
        city: '',
        country: '',
        fullAdress: response.data.results[0].formatted_address ?? '',
      };

      for (const component of addressComponents) {
        if (component.types.includes('administrative_area_level_1')) {
          location.state = component.long_name;
        } else if (component.types.includes('locality')) {
          location.city = component.long_name;
        } else if (component.types.includes('country')) {
          location.country = component.long_name;
        } else if (component.types.includes('country')) {
          location.fullAdress = component.long_name;
        }
      }

      return location;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error('Error fetching address:', error);
  }
};

/**Gets the formatted city and state in a particular country
 * @param country - Country to fetch the city and state
 * @returns
 */
export const getCountryCityState = async (
  country?: string,
): Promise<{city: string; state: string}[] | undefined> => {
  const req = new RequestService();

  const apiUrl = 'https://andruxnet-world-cities-v1.p.rapidapi.com/';

  try {
    const response = await req.getRequest(
      apiUrl,
      {
        query: country,
        searchby: 'country',
      },
      true,
    );

    if (response?.data && !!response.data) {
      const locationMap = response.data.map((location: any) => {
        return {
          city: location.city,
          state: location.state,
        };
      });

      return locationMap;
    }

    return [];
  } catch (error) {
    console.error('Error fetching cities:', error);
  }
};
