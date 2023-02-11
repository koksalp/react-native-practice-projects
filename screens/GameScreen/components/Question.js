import { StyleSheet, Text, View } from "react-native";
//
export default function Question({ gameObject }) {
  const { firstNumber, secondNumber, operator, incorrect } = gameObject;

  return (
    <View style={styles.container}>
      <Text style={[styles.question, incorrect ? styles.incorrect : {}]}>
        {firstNumber} {operator} {secondNumber}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    fontSize: 32,
    fontWeight: "bold",
  },
  incorrect: {
    color: "red",
  },
});
