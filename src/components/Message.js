export function Message({ step, children }) {
  return (
    <div>
      <h3 className="message">{step > 0 && `Step ${step}:`}</h3>
      <p className="message">{children}</p>
    </div>
  );
}
