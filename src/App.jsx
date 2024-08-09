import React from "react";

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const messages = ["learn React", "find a job", "invest"];
  const [step, setStep] = React.useState(1);
  const [isOpen, setIsOpen] = React.useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

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

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <button
                style={{ backgroundColor: "#f2ca50", color: "#fff" }}
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </button>
            </div>
          </StepMessage>
          <div className="buttons">
            <Button bgcolor="#78f250" color="#fff" onClick={handlePrevious}>
              Previous
            </Button>
            <Button bgcolor="#78f250" color="#fff" onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ bgcolor, color, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgcolor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
