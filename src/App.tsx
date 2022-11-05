import { FormEvent } from "react";
import { AccountForm } from "./components/AccountForm";
import { AddressForm } from "./components/AddressForm";
import { PersonForm } from "./components/PersonForm";
import { useFormData } from "./hooks/useFormData";
import { useMultiStepForm } from "./hooks/useMultiStepForm";

export function App() {
  const { formData, formDataDispatch } = useFormData();

  const {
    steps,
    step,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    nextStep,
    backStep,
  } = useMultiStepForm([
    <PersonForm {...formData} formDataDispatch={formDataDispatch} />,
    <AddressForm {...formData} formDataDispatch={formDataDispatch} />,
    <AccountForm {...formData} formDataDispatch={formDataDispatch} />,
  ]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!isLastStep) return nextStep();
    console.log(formData);
    alert("Successful Account Creation");
  }
  return (
    <main className="flex justify-center">
      <div className="relative bg-white border-2 border-black p-8 m-4 rounded-md font-sans w-[400px]">
        <form onSubmit={handleSubmit}>
          <div className="absolute , top-2 right-2">
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className="mt-4 flex gap-2 justify-end">
            {!isFirstStep && (
              <button
                onClick={backStep}
                type="button"
                className="font-bold bg-slate-300 p-2 rounded hover:bg-blue-300"
              >
                Back
              </button>
            )}
            {currentStepIndex < steps.length && (
              <button
                type="submit"
                className="font-bold bg-slate-300 p-2 rounded hover:bg-blue-300"
              >
                {isLastStep ? "Finish" : "Next"}
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
