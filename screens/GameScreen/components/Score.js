import { StyleSheet, Text, View, Keyboard } from "react-native";

export default function Score({ score }) {
  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: {score} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gold",
    padding: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  score: {
    fontSize: 32,
    color: "black",
  },
});
