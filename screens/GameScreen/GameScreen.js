import { StyleSheet, Text, View } from "react-native";
import Question from "./components/Question";
import Answer from "./components/Answer";
import Score from "./components/Score";
import DisplayLives from "./components/DisplayLives";

export default function GameScreen({
  gameObject,
  resetUserInput,
  setUserInput,
  checkUserInput,
}) {
  return (
    <View style={styles.container}>
      <DisplayLives try={gameObject.try} incorrect={gameObject.incorrect} />
      <Question gameObject={gameObject} />
      <Answer
        resetUserInput={resetUserInput}
        setUserInput={setUserInput}
        gameObject={gameObject}
        checkUserInput={checkUserInput}
      />
      <Score score={gameObject.score} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 24,
    borderRadius: 10,
  },
});
