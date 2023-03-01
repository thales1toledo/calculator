export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      className="digit"
      onClick={() => dispatch({ type: "add-digit", payload: { digit } })}
    >
      {digit}
    </button>
  );
}
