import { StyleSheet, Text, View, TextInput } from "react-native";
import CustomButton from "../../../helpers/UI/CustomButton";
export default function Answer({
  resetUserInput,
  setUserInput,
  checkUserInput,
  gameObject,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.answerInput}
        keyboardType={
          Platform.OS === "ios" ? "numbers-and-punctuation" : "number-pad"
        }
        maxLength={2}
        onChangeText={(text) => setUserInput(text)}
        value={gameObject.userInput}
      />
      <View style={styles.buttonsView}>
        <CustomButton
          innerText={"Reset"}
          onPress={resetUserInput}
          container={styles.customButton}
        />
        <CustomButton
          innerText={"Okay"}
          onPress={checkUserInput}
          container={styles.customButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  answerInput: {
    borderBottomColor: "orange",
    borderBottomWidth: 3,
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
  },
  buttonsView: {
    flexDirection: "row",
  },
  customButton: {
    marginHorizontal: 4,
    marginTop: 12,
  },
});
