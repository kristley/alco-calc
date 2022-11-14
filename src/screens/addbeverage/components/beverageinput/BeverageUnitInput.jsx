import React, {useState} from "react";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";


export default function BeverageUnitInput(){
const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'cl', value: 'cl'},
    {label: 'dl', value: 'dl'},
    {label: 'l', value: 'l'},
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={styles.container}
      dropDownContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container:{
    width: 70,
    borderRadius: 15,
    borderWidth: 0,
    backgroundColor: "#E6E6E6",
  },
});