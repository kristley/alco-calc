import { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { getDates, toDateString } from "../../../api/drinks";


export default function ArrowButton({ symbol, displayedDate, setDisplayedDate, forward, today }) {

    const [dates, setDates] = useState(getDates());
    const [index, setIndex] = useState(dates.indexOf(displayedDate));

    useEffect(() => {
        const tempdates = getDates();
        if (!tempdates.includes(today)) {
            tempdates.push(today);
        }
        setDates(tempdates);

        setIndex(dates.indexOf(displayedDate))
    }, [displayedDate])


    const changeDate = () => {
        console.log(dates, index)
        if (dates.length < 2) {
            return;
        }

        //If right button is pressed
        if (forward) {
            //Dont do anything if showing today
            if (displayedDate == today) {
                return;
            }
            //Otherwise display next date in array
            setDisplayedDate(dates[index + 1]);
            return;
        }

        //If left button is pressed
        if (index == 0) {
            return;
        }
        setDisplayedDate(dates[index - 1]);
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