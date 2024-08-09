import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handleprevios() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function handlenext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  const messages = ["learn React", "find a job", "invest"];

  return (
    <>
      <button className="close" onClick={() => setIsOpen((s) => !s)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
            <button onClick={() => alert(`learn how to ${messages[step - 1]}`)}>
              learn how
            </button>
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleprevios}
            >
              previose
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlenext}
            >
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
