import { TFormDataActions } from "../hooks/useFormData";
import FormWrap from "./FormWrap";

interface IUserFormProps {
  street: string;
  city: string;
  zip: string;
  estate: string;
  formDataDispatch: React.Dispatch<TFormDataActions>;
}

export function AddressForm({
  city,
  estate,
  street,
  zip,
  formDataDispatch,
}: IUserFormProps) {
  return (
    <FormWrap title="Address">
      <label htmlFor="street">Street</label>
      <input
        id="street"
        value={street}
        name="street"
        onChange={(event) =>
          formDataDispatch({ type: "ADD_STREET", payload: event.target.value })
        }
        className=" m-2 border-2 border-black"
        type="text"
        required
        autoFocus
      />
      <label htmlFor="city">City</label>
      <input
        id="city"
        value={city}
        name="city"
        onChange={(event) =>
          formDataDispatch({ type: "ADD_CITY", payload: event.target.value })
        }
        className=" m-2 border-2 border-black"
        type="text"
        required
      />
      <label htmlFor="state">State</label>
      <input
        id="state"
        value={estate}
        name="estate"
        onChange={(event) =>
          formDataDispatch({ type: "ADD_STATE", payload: event.target.value })
        }
        className=" m-2 border-2 border-black"
        type="text"
        required
      />
      <label htmlFor="zip">Zip</label>
      <input
        id="zip"
        value={zip}
        name="zip"
        onChange={(event) =>
          formDataDispatch({ type: "ADD_ZIP", payload: event.target.value })
        }
        className=" m-2 border-2 border-black"
        type="number"
        required
      />
    </FormWrap>
  );
}
