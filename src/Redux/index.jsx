const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

  case "+":
    return { counter: state.counter + 1 };

  case "RESET":
    return { counter: 0 };

  case "-":
    return { counter: state.counter -1};

  default:
    return state
  }
};

export default reducer