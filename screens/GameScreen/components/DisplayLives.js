import { StyleSheet, Text, View } from "react-native";
import { gameObject as gameObject } from "../../../helpers/constants";

export default function DisplayLives(props) {
  const numberOfLives = gameObject.tryLimit - props.try;
  return (
    <View style={styles.container}>
      <Text style={[styles.lives, props.incorrect ? styles.incorrect : {}]}>
        You have {numberOfLives} {numberOfLives === 1 ? "live" : "lives"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  lives: {
    fontSize: 24,
  },
  incorrect: {
    color: "red",
  },
});
