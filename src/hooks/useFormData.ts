import { useReducer } from "react";

// export interface IPerson {
//   name: string;
//   age: string;
// }
// export interface IAddress {
//   street: string;
//   city: string;
//   state: string;
//   zip: string;
// }
// export interface IUser {
//   email: string;
//   password: string;
// }
// interface IFormData {
//   person: IPerson;
//   address: IAddress;
//   user: IUser;
// }

// export type TFormDataActions =
//   | { type: "ADD_PERSON"; person: IPerson }
//   | { type: "ADD_ADDRESS"; address: IAddress }
//   | { type: "ADD_User"; user: IUser };

// const initialState: IFormData = {
//   person: { name: "", age: "" },
//   address: { state: "", city: "", street: "", zip: "" },
//   user: { email: "", password: "" },
// };

// function formDataReducer(state: IFormData, action: TFormDataActions) {
//   switch (action.type) {
//     case "ADD_PERSON":
//       return { ...state, person: action.person };
//     case "ADD_ADDRESS":
//       return { ...state, address: action.address };
//     case "ADD_User":
//       return { ...state, user: action.user };
//     default:
//       return state;
//   }
// }

export type TFormDataActions = {
  type:
    | "ADD_NAME"
    | "ADD_AGE"
    | "ADD_STATE"
    | "ADD_CITY"
    | "ADD_STREET"
    | "ADD_ZIP"
    | "ADD_EMAIL"
    | "ADD_PASSWORD";
  payload: string;
};

interface IFormData {
  name: string;
  age: string;
  estate: string;
  city: string;
  street: string;
  zip: string;
  email: string;
  password: string;
}

const initialState: IFormData = {
  name: "",
  age: "",
  estate: "",
  city: "",
  street: "",
  zip: "",
  email: "",
  password: "",
};

function formDataReducer(state: IFormData, action: TFormDataActions) {
  switch (action.type) {
    case "ADD_NAME":
      return { ...state, name: action.payload };
    case "ADD_AGE":
      return { ...state, age: action.payload };
    case "ADD_STREET":
      return { ...state, street: action.payload };
    case "ADD_CITY":
      return { ...state, city: action.payload };
    case "ADD_ZIP":
      return { ...state, zip: action.payload };
    case "ADD_STATE":
      return { ...state, estate: action.payload };
    case "ADD_PASSWORD":
      return { ...state, password: action.payload };
    case "ADD_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

export function useFormData() {
  const [formData, formDataDispatch] = useReducer(
    formDataReducer,
    initialState
  );
  return { formData, formDataDispatch };
}
