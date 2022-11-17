import { Alert } from "react-native";

/**
 * Sends a get request to the server asking for all prefabs
 * 
 * @returns A list of all registered prefabs
 */
export const getPrefabs = () => {
    return data;
}

/**
 * Adds a prefab to the list if the lists length is less than 9
 * 
 * @param {Object} prefab 
 * @returns null
 */
export const addPrefab = (prefab) => {
    if (data.length < 9) {
        data.push(prefab);
        return;
    }
    Alert.alert("Too many prefabs");
}

/**
 * Removes a specific prefab from the list if it exists
 * 
 * @param {Object} prefab 
 * @returns null
 */
export const removePrefab = (prefab) => {
    const index = data.indexOf(prefab);
    if (index > -1) {
        data.splice(index, 1);
    }
}


const data = [
    { id: 1, beverage: "Beer", volume: "0.5", unit: "l", percentage: "4.7", color: "#E8AA32" },
    { id: 2, beverage: "Beer", volume: "0.3", unit: "l", percentage: "4.7", color: "#ee0" },
    { id: 3, beverage: "Wine", volume: "2", unit: "cl", percentage: "11.5", color: "#7a121f" },
    { id: 4, beverage: "Shot", volume: "45", unit: "ml", percentage: "40", color: "#6635CE" },
    { id: 5, beverage: "Cider", volume: "0.5", unit: "l", percentage: "4.7", color: "#127A6E" },
    { id: 6, beverage: "Vodka Redbull", volume: "0.5", unit: "l", percentage: "4.7", color: "#DD72D9" },
    // { id: 7, beverage: "Vodka Redbull Redbull", volume: "0.5", unit: "l", percentage: "4.7", color: "#DD72D9" },
];