//A way of getting the previous and next days recorded
let dates = [];
let index = 0;

const data = {
    "20220423": [
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

const getIndexes = () => {
    const keys = Object.keys(data);
    dates = keys.sort();
    index = dates.length - 1;
}

getIndexes();


/**
 * Gets the list of drinks corresponding to the date, if it exists
 * 
 * @param {String} date 
 * @returns A list of drinks
 */
export const getDrinks = (date) => {
    return data[date];
}


/**
 * Creates a new day using the provided date and drink, if does not already exist.
 * 
 * @param {String} date 
 * @param {Object} drink 
 * @returns null
 */
export const createDay = (date, drink) => {
    if (dates.contains(date)) {
        return;
    }

    data[date] = [drink];
    getIndexes();
}


/**
 * Adds a drink to the selected date, if the date exists.
 * 
 * @param {String} date 
 * @param {Object} drink 
 * @returns null
 */
export const addDrink = (date, drink) => {
    if (!dates.contains(date)) {
        return;
    }

    data[date].push(drink);
}

export const addDrink2 = (drink) => {
    drink.time = "16:57";
    data[20220423].push(drink);
}


/**
 * Removes a drink from the selected date, if both exist.
 * 
 * @param {String} date 
 * @param {Object} drink 
 * @returns null
 */
export const removeDrink = (date, drink) => {
    if (data[date].length < 2) {
        deleteDay(date);
    }

    const index = data[date].indexOf(drink);
    if (index > -1) {
        array.splice(index, 1);
    }
}


/**
 * Deletes the date, if it exists.
 * 
 * @param {String} date 
 * @returns null
 */
export const deleteDay = (date) => {
    delete data[date];
}