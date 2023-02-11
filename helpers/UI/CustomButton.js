import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CustomButton(props) {
  return (
    <Pressable
      style={[styles.container, props.container]}
      onPress={props.onPress}
    >
      <View>
        <Text style={[styles.userInput, props.userInput]}>
          {props.innerText}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: "#6855c3",
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  userInput: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
