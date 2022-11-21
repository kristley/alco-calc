import { getDateString } from "../calculator/calculator"
export const base_url = "https://alcocalc-api.herokuapp.com"
export const base_headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "-skip-browser-warning": "something"

}



//-------------------------
//DRINKS

/**
 * Sends a get request to the server asking for all drinks on a given date
 * 
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns an array of Drink objects.
*/
export const getDrinks = (date) => {
    const api_url = base_url + "/day/" + date + "/drinks"
    const response = fetch(api_url, {
        method: "GET",
        headers: base_headers
    })
        .catch((error) => { console.error("Error", error) });
    return response;
}


/**
 * Adds a drink to the selected date.
 * 
 * @param {Object} drink 
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns the modified Day object.
 */
export const addDrink = (date, drink) => {
    const api_url = base_url + "/day/" + date + "/add"
    const response = fetch(api_url, {
        method: "PATCH",
        headers: base_headers,
        body: JSON.stringify(drink)
    })
        .catch((error) => { console.error("Error", error) });
    return response;
}


/**
 * Removes a drink from the selected date, if both exist.
 * 
 * @param {String} date 
 * @param {Object} drink 
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns the modified Day object.
 */
export const removeDrink = (drink) => {
    const date = getDateString(new Date())
    const api_url = base_url + "/day/" + date + "/remove"
    const response = fetch(api_url, {
        method: "PATCH",
        headers: base_headers,
        body: JSON.stringify({
            id: drink._id
        })
    })
        .catch((error) => { console.error("Error", error) });
    return response
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
    const api_url = base_url + "/day/"
    const response = fetch(api_url, {
        method: "GET",
        headers: base_headers
    })
        .catch((error) => { console.log("Error", error) })
    return response;
}


/**
 * Sends a get request to the server asking for a specific day
 * 
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns the Day object
*/
export const getDay = (date) => {
    const api_url = base_url + "/day/" + date
    const response = fetch(api_url, {
        method: "GET",
        headers: base_headers
    })
        .catch((error) => { console.log("Error", error) })
    return response;
}


/**
 * Creates a new day using the provided date, if it does not already exist.
 * 
 * @param {String} date 
 * @param {Object} drink 
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns the created Day object
 */
export const createDay = (date, drink) => {
    const data = { date: date, drinks: [drink] }
    const api_url = base_url + "/day"
    const response = fetch(api_url, {
        method: "POST",
        headers: base_headers,
        body: JSON.stringify(data)
    })
        .catch((error) => { console.error("Error", error) });
    return response
}

/**
 * Deletes the date, if it exists.
 * 
 * @param {String} date 
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns the deleted Day object
 */
export const deleteDay = (date) => {
    const api_url = base_url + "/day/" + date
    const response = fetch(api_url, {
        method: "DELETE",
        headers: base_headers
    })
        .catch((error) => { console.error("Error", error) });
    return response;
}


/**
 * Sends a get request to the server asking for all dates
 * 
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns an array of all dates
*/
export const getAvailableDates = () => {
    const api_url = base_url + "/day/dates/all"
    const response = fetch(api_url, {
        method: "GET",
        headers: base_headers
    })
        .catch((error) => { console.log("Error", error) })
    return response;
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
    const api_url = base_url + "/prefab"
    const response = fetch(api_url, {
        method: "GET",
        headers: base_headers
    })
        .catch((error) => { console.log("Error", error) })
    return response;
}


/**
 * Adds a prefab to the list if the lists length is less than 9
 * 
 * @param {Object} prefab 
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns the added Prefab object
 */


export const addPrefab = async (prefab) => {
    const response1 = await getPrefabs()
    const json = await response1.json()
    const noOfPrefabs = json.length;
    if (noOfPrefabs < 9) {
        const api_url = base_url + "/prefab"
        const response2 = await fetch(api_url, {
            method: "POST",
            headers: base_headers,
            body: JSON.stringify(prefab)
        })
            .catch((error) => { console.error("Error", error) });
        return response2;
    }

}


/**
 * Removes a specific prefab from the list if it exists
 * 
 * @param {Object} prefab 
 * @returns A Promise that resolves with a Response object. 
 *          Response.json() returns the deleted Prefab object
 */
export const removePrefab = (prefab) => {
    const api_url = base_url + "/prefab/" + prefab._id
    const response = fetch(api_url, {
        method: "DELETE",
        headers: base_headers
    })
        .catch((error) => { console.error("Error", error) });
    return response;
}

