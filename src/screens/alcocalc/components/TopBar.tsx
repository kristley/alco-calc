import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import ArrowButton from "./ArrowButton";
import { getAvailableDates } from "../../../api/apiService";

export default function TopBar({ displayedDate, setDisplayedDate, todayString, date, setDate, day, setDay, drinks, setDrinks }) {

  const [readableDate, setReadableDate] = useState("");

  const updateReadableDate = () => {
    const datestring = new Date(displayedDate.substring(0, 4), displayedDate.substring(4, 6) - 1, displayedDate.substring(6, 8)).toDateString()
    setReadableDate(datestring);
  }

  const [availableDates, setAvailableDates] = useState([]);

  useEffect(() => {
    const updateAvailableDates = async () => {
      const data = await getAvailableDates()
      const json = await data.json();
      setAvailableDates(json)
    }
    updateAvailableDates()
  }, []);


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
  date: {
    fontSize: 24,
  },
  topBar: {
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    padding: 15,
  },
});