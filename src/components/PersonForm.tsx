import { TFormDataActions } from "../hooks/useFormData";
import FormWrap from "./FormWrap";

interface IUserFormProps {
  name: string;
  age: string;
  formDataDispatch: React.Dispatch<TFormDataActions>;
}

export function PersonForm({ name, age, formDataDispatch }: IUserFormProps) {
  return (
    <FormWrap title="User">
      <label htmlFor="name">Name</label>
      <input
        id="name"
        value={name}
        name="name"
        onChange={(event) =>
          formDataDispatch({ type: "ADD_NAME", payload: event.target.value })
        }
        className=" m-2 border-2 border-black"
        type="text"
        required
        autoFocus
      />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        value={age}
        name="age"
        onChange={(event) =>
          formDataDispatch({ type: "ADD_AGE", payload: event.target.value })
        }
        className=" m-2 border-2 border-black"
        type="number"
        min={1}
        required
      />
    </FormWrap>
  );
}
