
// a function that takes in a to and from time as strings and returns the difference in minutes
const getMinutesBetweenTimes = (fromTime: string, toTime: string) => {
    const fromTimeDate = new Date(`2020-01-01T${fromTime}`);
    const toTimeDate = new Date(`2020-01-01T${toTime}`);
    let difference = toTimeDate.getTime() - fromTimeDate.getTime();
    if (difference < 0) {
        difference = -difference;
    }
    return difference / 1000 / 60;
}

const getTimeArray = (timeString: string) => {
    let timeArray = timeString.split(":");

    return timeArray.map((time) => {
        return parseInt(time);
    });
}

/**
 * 
 *
 * @param {Drink[]} drinks 
 * @returns Total amount of pure alcohol as a whole number
 */
export const getVol = (drinks: Drink[]) => {

    let volume = 0;

    drinks.forEach(drink => {
        const drinkVolume = Number(drink.volume) * getVolumeFromUnit(drink.unit);
        volume += drinkVolume * Number(drink.percentage) / 100;
    });

    return volume
}


/**
 * Converts possible units into a number of milliliters
 * 
 * @param {Unit} unit 
 * @returns Number of ml as an int
 */
const getVolumeFromUnit = (unit: Unit) => {
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
 * @param {number} volume 
 * @param {number} time 
 * @returns Total blood alcohol
 */
export const getBAL = (volume: number, time: number) => {

    //fomula: ml * density / (weight * r) - hours * metabolism

    const metabolism = 0.15;
    const density = 0.789;
    const weight = 89;
    const r = 0.68;

    const hours = time / 60;

    const sum = volume * density / (weight * r) - hours * metabolism;
    const value = Math.round(sum * 100) / 100;
    return value > 0 ? value : 0;
};

/**
 * 
 * @returns A string on the format "YYYYMMDD"
 */
export const getDateString = (date: Date) => {
    return (date.getFullYear()).toString() +
        (date.getMonth() + 1).toString() +
        (date.getDate()).toString();
}

/**
 * 
 * @param {Date} date 
 * @returns A string on the format "HH:MM"
 */
export const getTimeString = (date: Date) => ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);