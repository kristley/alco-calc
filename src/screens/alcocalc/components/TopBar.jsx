import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import ArrowButton from "./ArrowButton";

export default function TopBar({ displayedDate, setDisplayedDate, today }) {
	const [readableDate, setReadableDate] = useState("");

	const updateReadableDate = () => {
		if(displayedDate == today) {
			setReadableDate("Today");
			return;
		}
		const datestring = new Date(
			displayedDate.substring(0, 4),
			displayedDate.substring(5, 6) - 1,
			displayedDate.substring(7, 8)
		).toDateString();
		setReadableDate(datestring);
	};

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
				today={today}
			/>

			<Text style={styles.date}>
				{readableDate}
			</Text>

			<ArrowButton
				symbol="chevron-thin-right"
				displayedDate={displayedDate}
				setDisplayedDate={setDisplayedDate}
				forward={true}
				today={today}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	topBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 15,
		marginHorizontal: 20,
		backgroundColor: "#eee",
		borderRadius: 20,
	},
	date: {
		fontSize: 24,
	},
});
