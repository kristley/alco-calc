
/**
 * Takes two timestrings, and returns the time differential between them
 * 
 * @param {String} from 
 * @param {String} to 
 * @returns A timestring on the format: "hours:minutes"
 */
export const getTimeElapsed = (from, to) => {

    let fromArray = getTimeArray(from);
    let toArray = getTimeArray(to);

    let hours = toArray[0] - fromArray[0];
    let minutes = toArray[1] - fromArray[1];

    if (minutes < 0) {
        hours -= 1;
        minutes = 60 + minutes;
    }

    return ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);
}


/**
 * Takes a timestring on the format "hours:minutes", and creates a 2d list from it
 * 
 * @param {String} timeString 
 * @returns A timeArray with the format: [hours, minutes]
 */
const getTimeArray = (timeString) => {
    let timeArray = timeString.split(":");

    timeArray.forEach(element => {
        element = parseInt(element);
    });

    return timeArray;
}


/**
 * 
 *
 * @param {Array} drinks 
 * @returns Total amount of pure alcohol as a whole number
 */
export const getTotalVolume = (drinks) => {

    let volume = 0;

    drinks.forEach(drink => {
        const drinkVolume = parseFloat(drink.volume) * getVolumeFromUnit(drink.unit);
        volume += drinkVolume * parseFloat(drink.percentage) / 100;
    });

    return Math.floor(volume);
}


/**
 * Converts possible units into a number of milliliters
 * 
 * @param {String} unit 
 * @returns Number of ml as an int
 */
const getVolumeFromUnit = (unit) => {
    switch (unit) {
        case "l":
            return 1000;
        case "dl":
            return 100;
        case "cl":
            return 10;
        case "ml":
            return 1;
        default:
            return 0;
    }
}



export const getBloodAlcohol = (volume, time) => {

    //fomula: ml * density / (weight * r) - hours * metabolism

    const metabolism = 0.15;
    const density = 0.789;
    const weight = 89;
    const r = 0.68;

    const timeArray = getTimeArray(time);
    const hours = parseInt(timeArray[0]) + parseInt(timeArray[1]) / 60;

    const sum = volume * density / (weight * r) - hours * metabolism;
    return Math.round(sum * 100) / 100;
};

export const getDateString = (date) => {
    return (date.getYear() + 1900).toString() + 
    (date.getMonth() + 1).toString()  +
    (date.getDate()).toString();
}