import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { getDrinks, getDay } from "../../../api/apiService";

export default function ArrowButton() {

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

        //If right button is pressed
        if (forward) {
            //Dont do anything if showing today
            if (displayedDate == todayString) {
                return;
            }
            //Otherwise display next date in array
            const newDate = availableDates[index + 1]
            if (newDate == todayString) {
                setDisplayedDate(todayString);

            } else {
                setDisplayedDate(newDate);
            }
            return;
        }

        const newDate = availableDates[index - 1]
        if (index != 0) {
            setDisplayedDate(newDate);

        }

    }

    return (
        <TouchableOpacity onPress={changeDate}>
            <Entypo
                name={symbol}
                size={40}
                color={"#808080"}
            />
        </TouchableOpacity>
    );
}
