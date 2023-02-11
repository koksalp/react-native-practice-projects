import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../helpers/UI/CustomButton";

export default function GameOverScreen({ didUserWin, restartGame }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>GAME OVER</Text>
      <Text style={styles.didUserWin}>YOU {didUserWin ? "WIN" : "LOSE"}</Text>
      <CustomButton
        onPress={restartGame}
        innerText={"Play again "}
        container={styles.playAgainButtonContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    padding: 16,
    backgroundColor: "gold",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 100,
    borderRadius: 10,
  },
  header: {
    fontSize: 32,
  },
  didUserWin: {
    fontSize: 24,
  },
  playAgainButtonContainer: {
    width: 150,
    height: 70,
    position: "absolute",
    bottom: 10,
  },
});
