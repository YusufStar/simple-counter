import reducer from "./Redux"
import { createStore } from "redux"
import { Provider, useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import Counter from "./Counter";

function App() {
  const store = createStore(reducer)

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
