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
