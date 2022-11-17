//A way of getting the previous and next days recorded
let dates = [];
let index = 0;
const base_url = "http://localhost:3000"
const base_headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}
/*

const data = {
    "20221115": [
        { time: "00:30", beverage: "wine", volume: "2.0", unit: "dl", percentage: "11.5", color: "#7a121f" },
        { time: "17:14", beverage: "beer", volume: "0.5", unit: "l", percentage: "4.7", color: "#E8AA32" },
        { time: "17:00", beverage: "beer", volume: "0.5", unit: "l", percentage: "4.7", color: "#E8AA32" },
        { time: "17:49", beverage: "beer", volume: "0.5", unit: "l", percentage: "4.7", color: "#E8AA32" },
        { time: "17:14", beverage: "beer", volume: "0.5", unit: "l", percentage: "4.7", color: "#E8AA32" }
    ],
    "20220428": [
        { time: "01:23", beverage: "wine", volume: "2.0", unit: "dl", percentage: "11.5", color: "#7a121f" },
        { time: "01:44", beverage: "shot", volume: "4.0", unit: "cl", percentage: "40.0", color: "#6635ce" },
        { time: "01:45", beverage: "beer", volume: "0.5", unit: "l", percentage: "4.7", color: "#E8AA32" },
        { time: "03:06", beverage: "beer", volume: "0.5", unit: "l", percentage: "4.7", color: "#E8AA32" },
        { time: "12:30", beverage: "beer", volume: "0.5", unit: "l", percentage: "4.7", color: "#E8AA32" },
        { time: "12:30", beverage: "shot", volume: "4.0", unit: "l", percentage: "40.0", color: "#6635ce" },
        { time: "12:35", beverage: "wine", volume: "2.0", unit: "dl", percentage: "11.5", color: "#7a121f" },
        { time: "12:55", beverage: "beer", volume: "0.5", unit: "l", percentage: "4.7", color: "#E8AA32" },
        { time: "16:35", beverage: "beer", volume: "0.3", unit: "l", percentage: "4.7", color: "#d9cf34" },
        { time: "16:35", beverage: "shot", volume: "4.0", unit: "cl", percentage: "21.5", color: "#dd72d9" },
        { time: "17:28", beverage: "beer", volume: "0.5", unit: "l", percentage: "4.7", color: "#E8AA32" },
        { time: "18:10", beverage: "beer", volume: "0.3", unit: "l", percentage: "4.7", color: "#d9cf34" },
        { time: "18:22", beverage: "beer", volume: "0.5", unit: "l", percentage: "4.7", color: "#E8AA32" },
        { time: "19:16", beverage: "wine", volume: "2.0", unit: "dl", percentage: "11.5", color: "#7a121f" },
        { time: "23:59", beverage: "cider", volume: "0.5", unit: "l", percentage: "4.7", color: "#127a6e" }
    ],
    "20220501": [
        { time: "01:08", beverage: "beer", volume: "0.3", unit: "l", percentage: "4.7", color: "#d9cf34" },
        { time: "01:08", beverage: "beer", volume: "0.3", unit: "l", percentage: "4.7", color: "#d9cf34" },
        { time: "01:28", beverage: "shot", volume: "4.0", unit: "cl", percentage: "40.0", color: "#6635ce" },
        { time: "22:18", beverage: "wine", volume: "2.0", unit: "l", percentage: "11.5", color: "#7a121f" }
    ]
}

export const getDates = () => {
    const keys = Object.keys(data);
    return keys.sort();
}

getIndexes();
*/

/**
 * Sends a get request to the server asking for all days
 * 
 * @returns A list of all days stored in database
 */
export const getDays = () => {
    const api_url = base_url + "/day"
    const response = fetch(api_url, {
        method: "GET",
        headers: base_headers})
    .then((response) => response.json())
    .then((response) => {console.log("Success: ", response)})
    .catch((error) => {console.error("Error", error)});
    console.log("getdays")
    console.log(Array.from(JSON.parse(response)));
    console.log(JSON.parse(response))
    return Array.from(response);    
    //return data;
}

/**
 * Sends a get request to the server asking for a specific day given a date
 * 
 * @param {String} date 
 * @returns A day object if it exists
 */
 export const getDay = (date) => {
    const api_url = base_url + "/day/" + date
    const response = fetch(api_url, {
        method: "GET",
        headers: base_headers})
    .then((response) => response.json())
    .then((response) => {console.log("Success: ", response)})
    .catch((error) => {console.error("Error", error)});
    return JSON.parse(response);    
    //return data;
}



/**
 * Gets the list of drinks corresponding to the date
 * 
 * @param {String} date 
 * @returns A list of drinks, empty list if no drinks
 */
export const getDrinks = (date) => {
    console.log("before getdrinks")
    console.log("---")
    const api_url = base_url + "/day/" + date + "/drinks"
    const response = fetch(api_url, {
        method: "GET",
        headers: base_headers})
    .then((response) => response.json())
    .then((response) => {console.log("Success: ", response)})
    .catch((error) => {console.error("Error", error)});
    return response;     
    //return data[date];
}


/**
 * Adds a drink to the selected date.
 * 
 * @param {Object} drink 
 * @returns null
 */
export const addDrink = (date, drink) => {
    const api_url = base_url + "/day/"  + date + "/add"
    const response = fetch(api_url, {
        method: "PATCH",
        headers: base_headers,
        body: JSON.stringify(drink)
    })
    .then((response) => response.json())
    .then((drink) => {console.log("Success: ", drink)})
    .catch((error) => {console.error("Error", error)});

    
    /*if (!dates.contains(date)) {
        return;
    }*/

   // data[date].push(drink);
}


/**
 * Creates a new day using the provided date and drink, if does not already exist.
 * 
 * @param {String} date 
 * @param {Object} drink 
 * @returns null
 */
export const createDay = (date, drink) => {
    const data = {date: date, drinks: [drink]}
    const api_url = base_url +  "/day"
    const response = fetch(api_url, {
        method: "POST",
        headers: base_headers,
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((drink) => {console.log("Success: ", drink)})
    .catch((error) => {console.error("Error", error)});
    /*if (dates.contains(date)) {
        return;
    }

    data[date] = [drink];
    getIndexes();*/
}

/*export const addDrink2 = (drink) => {
    
    drink.time = "16:57";
    data[20221115].push(drink);
}*/


/**
 * Adds a drink to the selected date.
 * 
 * @param {Object} drink 
 * @returns null
 */

/*
export const addDrink = (drink) => {
    const today = new Date();

    const date = toDateString(today);

    const addZero = (num) => num < 10 ? `0${num}` : num;

    drink.time = addZero(today.getHours()) + ":" + addZero(today.getMinutes());
    if (date in data) {
        data[date].push(drink);
        return;
    }

    data[date] = [drink];
}
*/
/**
 * Removes a drink from the selected date, if both exist.
 * 
 * @param {String} date 
 * @param {Object} drink 
 * @returns null
 */
export const removeDrink = (date, drink) => {
    const api_url = base_url + "/day/"  + date + "/remove"
    const response = fetch(api_url, {
        method: "PATCH",
        headers: base_headers,
        body: JSON.stringify(drink)
    })
    .then((response) => response.json())
    .then((drink) => {console.log("Success: ", drink)})
    .catch((error) => {console.error("Error", error)});

}
  /*  if (data[date].length < 2) {
        deleteDay(date);
    }

    const index = data[date].indexOf(drink);
    if (index > -1) {
        array.splice(index, 1);
    }
}
*/

/**
 * Deletes the date, if it exists.
 * 
 * @param {String} date 
 * @returns null
 */
export const deleteDay = (date) => {
    const api_url = base_url + "/day/" + date
    const response = fetch(api_url, {
        method: "DELETE",
        headers: base_headers
    })
    .then((response) => response.json())
    .then((drink) => {console.log("Success: ", drink)})
    .catch((error) => {console.error("Error", error)});
}