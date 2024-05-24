export function Button({ color, bcolor, onClick, children }) {
  return (
    <button style={{ backgroundColor: bcolor, color: color }} onClick={onClick}>
      {children}
    </button>
  );
}
