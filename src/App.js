import "./App.scss";
import { Backspace } from "phosphor-react";
import { useReducer } from "react";
import { reducer } from "./reducer";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";

function App() {
  const [{ currentOperand }, dispatch] = useReducer(reducer, {
    currentOperand: 0,
  });

  return (
    <div className="calculator-app">
      <div className="output">{currentOperand}</div>
      <OperationButton operation="%" dispatch={dispatch} />

      <button
        className="operation"
        onClick={() => {
          dispatch({ type: "clear" });
        }}
      >
        C
      </button>
      <button
        className="operation"
        onClick={() => {
          dispatch({ type: "remove" });
        }}
      >
        <Backspace size={20} />
      </button>
      <OperationButton operation="+" dispatch={dispatch} />

      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />

      <OperationButton operation="-" dispatch={dispatch} />

      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />

      <OperationButton operation="/" dispatch={dispatch} />

      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />

      <OperationButton operation="x" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />

      <DigitButton digit="0" dispatch={dispatch} />
      <button
        className="digit-special"
        onClick={() => {
          dispatch({ type: "result" });
        }}
      >
        =
      </button>
      <button
        style={{ opacity: 0, width: 0, height: 0 }}
        onClick={() => {
          dispatch({ type: "result" });
        }}
      ></button>
    </div>
  );
}

export default App;
