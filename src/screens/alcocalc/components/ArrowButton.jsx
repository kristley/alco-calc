import { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { getDrinks, getDay } from "../../../api/apiService";
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
			const data = await getDrinks(displayedDate)
			const json = await data.json();
            setDrinks(json)
			}
        

		const updateDay = async () => {
			const data = await getDay(displayedDate)
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