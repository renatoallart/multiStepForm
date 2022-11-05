import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function nextStep() {
    setCurrentStepIndex((step) => {
      if (step + 1 === steps.length) return step;
      return step + 1;
    });
  }

  function backStep() {
    setCurrentStepIndex((step) => {
      if (step <= 0) return step;
      return step - 1;
    });
  }
  return {
    currentStepIndex,
    steps,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    nextStep,
    backStep,
  };
}
