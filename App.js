import { useState } from "react";
import { StyleSheet, Text, View, Keyboard, Platform } from "react-native";

import { gameObject as gameConstant } from "./helpers/constants";
import {
  getRandomInteger,
  getAnswer,
  getRandomOperator,
  getInitialState,
} from "./helpers/functions";

import GameScreen from "./screens/GameScreen/GameScreen";
import GameOverScreen from "./screens/GameOverScreen/GameOverScreen";

export default function App() {
  const [gameObject, setGameObject] = useState(getInitialState);
  function setUserInput(userInput) {
    setGameObject((prevState) => ({
      ...prevState,
      userInput: userInput,
      incorrect: false,
    }));
  }

  function resetUserInput() {
    setGameObject((prevState) => ({
      ...prevState,
      userInput: "",
    }));
  }

  function checkUserInput() {
    const { firstNumber, secondNumber, operator, userInput } = gameObject;

    if (isNaN(userInput) || userInput === "") {
      setGameObject((prevState) => ({
        ...prevState,
        incorrect: true,
      }));
      return;
    }
    const answer = getAnswer(firstNumber, secondNumber, operator);

    // user answer is correct
    if (answer === +userInput) {
      // user win
      if (gameObject.score + 1 === gameConstant.scoreToWin) {
        setGameObject((prevState) => ({
          ...prevState,
          score: prevState.score + 1,
          isGameOver: true,
          didUserWin: true,
          incorrect: false,
        }));
      } else {
        // question changes
        setGameObject((prevState) => ({
          ...prevState,
          firstNumber: getRandomInteger(),
          secondNumber: getRandomInteger(),
          operator: getRandomOperator(),
          incorrect: false,
          score: prevState.score + 1,
          userInput: "",
        }));
      }
    } else {
      // user answer is incorrect

      // score is already 0
      if (gameObject.score === 0) {
        // player loses
        if (gameObject.try + 1 === gameConstant.tryLimit) {
          setGameObject((prevState) => ({
            ...prevState,
            isGameOver: true,
            didUserWin: false,
            incorrect: true,
            try: prevState.try + 1,
          }));
        } else {
          // player has another try/tries
          setGameObject((prevState) => ({
            ...prevState,
            incorrect: true,
            try: prevState.try + 1,
          }));
        }
      } else {
        // score is neither 0 nor player wins the game
        setGameObject((prevState) => ({
          ...prevState,
          incorrect: true,
          score: prevState.score - 1,
        }));
      }
    }
  }

  let currentScreen = (
    <GameScreen
      gameObject={gameObject}
      resetUserInput={resetUserInput}
      setUserInput={setUserInput}
      checkUserInput={checkUserInput}
    />
  );

  if (gameObject.isGameOver) {
    currentScreen = (
      <GameOverScreen
        didUserWin={gameObject.didUserWin}
        restartGame={restartGame}
      />
    );
  }

  function restartGame() {
    setGameObject(getInitialState);
  }

  return (
    <View
      style={[
        styles.container,
        { justifyContent: gameObject.isGameOver ? "flex-start" : "center" },
      ]}
    >
      {!gameObject.isGameOver && (
        <Text style={styles.gameName}>MATH GAME </Text>
      )}
      {currentScreen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  gameName: {
    fontSize: 48,
    position: "absolute",
    top: Platform.OS === "ios" ? 30 : 50,
  },
});
