export function getRandomInteger(min = 1, max = 9) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomOperator() {
  const operators = ["+", "-", "x"];
  const randomOperatorIndex = getRandomInteger(0, operators.length - 1);

  return operators[randomOperatorIndex];
}

export function getAnswer(first, second, operator) {
  if (operator === "+") {
    return +first + +second;
  } else if (operator === "-") {
    return +first - +second;
  } else if (operator === "x") {
    return +first * +second;
  }
}

export function getInitialState() {
  return {
    firstNumber: getRandomInteger(),
    secondNumber: getRandomInteger(),
    operator: getRandomOperator(),
    userInput: "",
    score: 0,
    try: 0,
    incorrect: false,
    isGameOver: false,
    didUserWin: false,
  };
}
