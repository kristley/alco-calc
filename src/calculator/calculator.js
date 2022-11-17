
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

    for (let i = 0; i < timeArray.length; i++) {
        timeArray[i] = parseInt(timeArray[i]);
    }

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


/**
 * Takes an amount of alcohol in ml, and an amount of time on the format "hours:minutes"
 * and calculates current blood alcohol level based on an average norwegian adult male.
 * 
 * @param {String} volume 
 * @param {String} time 
 * @returns Total blood alcohol
 */
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

export const getPreviousDate = (currentDate) => {
    const previous = new Date(currentDate.getTime());
    previous.setDate(currentDate.getDate() - 1);
    return previous;
}

export const getNextDate = (currentDate) => {
    const next = new Date(currentDate.getTime());
    next.setDate(currentDate.getDate() + 1);
    return next;
}

export const getDateString = (date) => {
    return (date.getYear() + 1900).toString() +
        (date.getMonth() + 1).toString() +
        (date.getDate()).toString();
}