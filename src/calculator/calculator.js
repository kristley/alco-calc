
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

    let fromHours = parseInt(fromArray[0]);
    let fromMinutes = parseInt(fromArray[1]);

    let toHours = parseInt(toArray[0]);
    let toMinutes = parseInt(toArray[1]);

    let hours = toHours - fromHours;
    let minutes = toMinutes - fromMinutes;

    if (minutes < 0) {
        hours--;
        minutes = 60 + minutes;
    }

    if (hours < 0) {
        hours = 24 + hours;
    }

    let hoursString = hours.toString();
    let minutesString = minutes.toString();

    if (hours < 10) {
        hoursString = "0" + hoursString;
    }

    if (minutes < 10) {
        minutesString = "0" + minutesString;
    }

    return hoursString + ":" + minutesString;

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
    const value = Math.round(sum * 100) / 100;
    return value > 0 ? value : 0;
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