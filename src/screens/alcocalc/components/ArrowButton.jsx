import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { getDrinks, getDay } from "../../../api/apiService";

export default function ArrowButton({ symbol, displayedDate, setDisplayedDate, forward, todayString, setDay, setDrinks, availableDates}) {

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
        
        const index = availableDates.indexOf(displayedDate)
        console.log(availableDates)
        console.log("INDEX: ----", index)
        //If right button is pressed
        if (forward) {
            //Dont do anything if showing today
            if (displayedDate == todayString) {
                return;
            }
            //Otherwise display next date in array
            const newDate = availableDates[index + 1]
            if (newDate == todayString){
                setDisplayedDate(todayString);

            } else {
                setDisplayedDate(newDate);
            }
            return;
        }
        
        const newDate = availableDates[index - 1]
        if (index != 0){
            setDisplayedDate(newDate);

        }

    }

    return (
        <TouchableOpacity onPress={changeDate}>
            <EntypoIcon
                name={symbol}
                size={40}
                color={"#808080"}
            />
        </TouchableOpacity>
    );
}
