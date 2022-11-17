import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import ArrowButton from "./ArrowButton";
import { getDateString } from "../../../calculator/calculator";

export default function TopBar({ displayedDate, setDisplayedDate, todayString, date, setDate, day, setDay, drinks, setDrinks, availableDates}) {

  const [readableDate, setReadableDate] = useState("");


  const updateReadableDate = () => {
    const datestring = new Date(displayedDate.substring(0, 4), displayedDate.substring(4, 6) - 1, displayedDate.substring(6, 8)).toDateString()
    setReadableDate(datestring);
  }

  useEffect(() => {
    updateReadableDate();
  }, [displayedDate]);

  return (
    <View style={styles.topBar}>
      <ArrowButton
        symbol="chevron-thin-left"
        displayedDate={displayedDate}
        setDisplayedDate={setDisplayedDate}
        forward={false}
        todayString={todayString}
        date={date}
        setDate={setDate}
        setDay={setDay}
        day={day}
        drinks={drinks}
        setDrinks={setDrinks}
        availableDates={availableDates}
      />

      <Text style={styles.date}>
        {
          displayedDate == todayString ?
            "Today" :
            readableDate
        }
      </Text>

      <ArrowButton
        symbol="chevron-thin-right"
        displayedDate={displayedDate}
        setDisplayedDate={setDisplayedDate}
        forward={true}
        todayString={todayString}
        date={date}
        day={day}
        setDay={setDay}
        drinks={drinks}
        setDrinks={setDrinks}
        availableDates={availableDates}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginHorizontal: 20,
    backgroundColor: "#eee",
    borderRadius: 20,
  },
  date: {
    // textAlign : "center",
    fontSize: 30,
  }
});