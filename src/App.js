import { useState } from "react";
import { Button } from "./components/Button";
import { Message } from "./components/Message";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // want step to be dynamic
  //  need piece of state
  // const step = 2;

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step === 1) {
      return;
    }
    // if set state based on current state use call back to retrieve current state
    setStep((s) => s - 1);
  }

  function handleNext() {
    if (step === 3) {
      return;
    }
    // callback to get current state
    setStep((s) => s + 1);
  }

  //  cant just return { } with a conditional render for isOpen
  // needs to be inside a component - div or fragement to start JSX (NB to remember)

  return (
    <>
      {/* dont always have to write function first can use annonymouse */}
      <button className="close" onClick={() => setIsOpen((isO) => !isO)}>
        {isOpen ? "×" : "⊕"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <Message step={step}>{messages[step - 1]}</Message>

          <div className="buttons">
            <Button bcolor="#7950f2" color="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bcolor="#7950f2" color="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
