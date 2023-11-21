import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Service for handling asynchronous storage operations using AsyncStorage.
 */
class LocalStorageService {
  /**
   * Writes a value to the AsyncStorage under the specified key.
   * @param {string} key - The key under which the value will be stored.
   * @param {any} value - The value to be stored.
   * @returns {Promise<void>} - A Promise that resolves when the operation is complete.
   */
  async writeToStorage(key: string, value: any): Promise<void> {
    /**
     * Converts the value to a JSON string before storing it in AsyncStorage.
     */
    const _value = JSON.stringify(value);

    try {
      /**
       * Attempts to set the item in AsyncStorage.
       */
      await AsyncStorage.setItem(key, _value);
    } catch (error) {
      /**
       * Handles errors silently, as the failure to write to storage may not necessarily disrupt the application flow.
       */
    }
  }

  /**
   * Reads a value from AsyncStorage using the specified key.
   * @param {string} key - The key under which the value is stored.
   * @returns {Promise<any | null>} - A Promise that resolves with the retrieved value or null if the key is not found.
   */
  async readFromStorage(key: string): Promise<any | null> {
    try {
      /**
       * Attempts to get the item from AsyncStorage.
       */
      const value = await AsyncStorage.getItem(key);

      if (value) {
        /**
         * Parses the retrieved value from JSON before returning it.
         */
        return JSON.parse(value);
      }

      /**
       * Returns null if the key is not found in AsyncStorage.
       */
      return null;
    } catch (error) {
      /**
       * Handles errors silently, returning null in case of any issues with AsyncStorage.
       */
      return null;
    }
  }

  async deleteFromStorage(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {}
  }

  async deleteAllKeys() {
    await AsyncStorage.clear();
  }
}

export default LocalStorageService;
