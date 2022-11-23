import { getDateString } from "../calculator/calculator"
export const base_url = "https://alcocalc-api.herokuapp.com"
export const base_headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "-skip-browser-warning": "something"
}

type DateString = string;

//-------------------------
//DRINKS

/**
 * Sends a get request to the server asking for all drinks on a given date
 * 
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns an array of Drink objects.
*/
export const getDrinks = (date : DateString) => {
}


/**
 * Adds a drink to the selected date.
 * 
 * @param {Drink} drink - The drink to add.
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns the modified Day object.
 */
export const addDrink = (drink: Beverage) => {
}


/**
 * Removes a drink from the selected date, if both exist.
 * 
 * @param {Beverage} drink 
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns the modified Day object.
 */
export const removeDrink = (drink : Beverage) => {
}

//-------------------------
//DAYS


/**
 * Sends a get request to the server asking for all days
 * 
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns an array of all Day objects
*/
export const getDays = () => {
}


/**
 * Sends a get request to the server asking for a specific day
 * 
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns the Day object
*/
export const getDay = (date: DateString) => {
}


/**
 * Creates a new day using the provided date, if it does not already exist.
 * 
 * @param {DateString} date 
 * @param {Object} drink 
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns the created Day object
 */
export const createDay = (date: DateString, drink: ) => {
}

/**
 * Deletes the date, if it exists.
 * 
 * @param {DateString} date 
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns the deleted Day object
 */
export const deleteDay = (date: DateString) => {
}


/**
 * Sends a get request to the server asking for all dates
 * 
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns an array of all dates
*/
export const getAvailableDates = () => {
}


//-------------------------
//PREFABS


/**
 * Sends a get request to the server asking for all prefabs
 * 
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns an array of all Prefab objects
*/
export const getPrefabs = () => {
}


/**
 * Adds a prefab to the list if the lists length is less than 9
 * 
 * @param {Drink} prefab 
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns the added Prefab object
 */
export const addPrefab = (prefab: Drink) => {
}

/**
 * Removes a specific prefab from the list if it exists
 * 
 * @param {Drink} prefab 
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns the deleted Prefab object
 */
export const removePrefab = (prefab : Drink) => {
}

