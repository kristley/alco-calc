import { Alert } from "react-native";

const base_url = "http://localhost:3000"
const base_headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

/**
 * Sends a get request to the server asking for all prefabs
 * 
 * @returns A list of all registered prefabs
 */
export const getPrefabs = () => {
    const api_url = base_url + "/prefab"
    const response = fetch(api_url, {
        method: "GET",
        headers: base_headers})
    .then((response) => response.json())
    .then((response) => {console.log("Success: ", response)})
    .catch((error) => {console.error("Error", error)});
    return Array.from(response);    

    //return data;
}

/**
 * Adds a prefab to the list if the lists length is less than 9
 * 
 * @param {Object} prefab 
 * @returns null
 */
export const addPrefab = (prefab) => {
    if (getPrefabs().length < 9){
        const data = {date: date, drinks: [drink]}
    const api_url = base_url +  "/prefab"
    const response = fetch(api_url, {
        method: "POST",
        headers: base_headers,
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((drink) => {console.log("Success: ", drink)})
    .catch((error) => {console.error("Error", error)});
    } else {
        console.log("More than 9 prefabs")
    }
    
}

/**
 * Removes a specific prefab from the list if it exists
 * 
 * @param {Object} prefab 
 * @returns null
 */
export const removePrefab = (prefab) => {
    const api_url = base_url + "/day/" + prefab.id
    const response = fetch(api_url, {
        method: "DELETE",
        headers: base_headers
    })
    .then((response) => response.json())
    .then((drink) => {console.log("Success: ", drink)})
    .catch((error) => {console.error("Error", error)});
}

/*
const data = [
    { id: 1, beverage: "Beer", volume: "0.5", unit: "l", percentage: "4.7", color: "#E8AA32" },
    { id: 2, beverage: "Beer", volume: "0.3", unit: "l", percentage: "4.7", color: "#ee0" },
    { id: 3, beverage: "Wine", volume: "2", unit: "cl", percentage: "11.5", color: "#7a121f" },
    { id: 4, beverage: "Shot", volume: "45", unit: "ml", percentage: "40", color: "#6635CE" },
    { id: 5, beverage: "Cider", volume: "0.5", unit: "l", percentage: "4.7", color: "#127A6E" },
    { id: 6, beverage: "Vodka Redbull", volume: "0.5", unit: "l", percentage: "4.7", color: "#DD72D9" },
    // { id: 7, beverage: "Vodka Redbull Redbull", volume: "0.5", unit: "l", percentage: "4.7", color: "#DD72D9" },
];
*/