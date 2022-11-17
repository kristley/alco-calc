import { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { getDates, toDateString } from "../../../api/drinks";
import { getDateString, getNextDate, getPreviousDate } from "../../../calculator/calculator";


export default function ArrowButton({ symbol, displayedDate, setDisplayedDate, forward, todayString, date, setDate, day, setDay, drinks, setDrinks}) {

    const base_url = "http://localhost:3000"
	const base_headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}


 useEffect(() => { 

    const updateDrinks = async () => {
			const api_url = base_url + "/day/" + displayedDate + "/drinks"
			const data = await fetch(api_url,  {
				method: "GET",
				headers: base_headers})
				.catch((error) => {	console.error("Error", error)})
			
			// convert the data to json
			const json2 = await data.json();
			return setDrinks(json2)
			}
        

		const updateDay = async () => {
			const api_url = base_url + "/day/" + displayedDate
			const data = await fetch(api_url,  {
			method: "GET",
			headers: base_headers})
			.catch((error) => {console.log("Error", error)})

    
			const json = await data.json();
			setDay(json);
		}


    updateDay()
    updateDrinks()
    }, [displayedDate])


    const changeDate = () => {


        //If right button is pressed
        if (forward) {
            //Dont do anything if showing today
            if (displayedDate == todayString) {
                return;
            }
            //Otherwise display next date in array
            const newDate = getNextDate(date)

            setDate(newDate);
            setDisplayedDate(getDateString(newDate));
            return;
        }
        
        const newDate = getPreviousDate(date)
        setDate(newDate);
        setDisplayedDate(getDateString(newDate));

    }

    return (
        <TouchableOpacity onPress={changeDate}>
            <EntypoIcon
                name={symbol}
                style={styles.arrow}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    arrow: {
        color: "rgba(128,128,128,1)",
        fontSize: 40
    }
});