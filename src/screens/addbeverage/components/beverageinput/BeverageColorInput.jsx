import React from "react";
import { StyleSheet, View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function BeverageColorInput({style}) {
const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'red', value: '#FF0000', icon: () => <View style={{backgroundColor: "#FF0000" , width: 18, height: 18, borderRadius: 9}} />},
    {label: 'green', value: '#00FF00', icon: () => <View style={{backgroundColor: "#00FF00" , width: 18, height: 18, borderRadius: 9}} />},
    {label: 'blue', value: '#0000FF', icon: () => <View style={{backgroundColor: "#0000FF" , width: 18, height: 18, borderRadius: 9}} />},
    {label: 'yellow', value: '#FFFF00', icon: () => <View style={{backgroundColor: "#FFFF00" , width: 18, height: 18, borderRadius: 9}} />},
    {label: 'orange', value: '#FFA500', icon: () => <View style={{backgroundColor: "#FFA500" , width: 18, height: 18, borderRadius: 9}} />},
    {label: 'purple', value: '#800080', icon: () => <View style={{backgroundColor: "#800080" , width: 18, height: 18, borderRadius: 9}} />},
    {label: 'pink', value: '#FFC0CB', icon: () => <View style={{backgroundColor: "#FFC0CB" , width: 18, height: 18, borderRadius: 9}} />},
    {label: 'brown', value: '#A52A2A', icon: () => <View style={{backgroundColor: "#A52A2A" , width: 18, height: 18, borderRadius: 9}} />},
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}
