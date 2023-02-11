import { StyleSheet, Text, View } from "react-native";

export default function ErrorModal({ message }) {
  return (
    <View style={styles.container}>
      <View style={styles.backdrop} />
      <View style={styles.modal}>
        <Text style={styles.messageText}>
          {message === undefined
            ? "Something went wrong, please try again"
            : message}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backdrop: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  modal: {
    borderRadius: 6,
    backgroundColor: "white",
    padding: 16,
    width: 300,
    zIndex: 10,
    justifyConent: "center",
    alignItems: "center",
  },
  messageText: {
    color: "black",
    fontSize: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});
