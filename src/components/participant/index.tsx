import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type ParticipantProperties = {
  name: string;
};

export function Participant({ name }: ParticipantProperties) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}> {name} </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
