import { TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';

export default function ArrowButton({symbol, onPress}: {symbol: any, onPress: () => void}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Entypo
                name={symbol}
                size={40}
                color={"#808080"}
            />
        </TouchableOpacity>
    );
}
