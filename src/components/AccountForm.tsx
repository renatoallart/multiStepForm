import React from "react";
import { TFormDataActions } from "../hooks/useFormData";

interface IAccountFormProps {
  email: string;
  password: string;
  formDataDispatch: React.Dispatch<TFormDataActions>;
}

import FormWrap from "./FormWrap";

export function AccountForm({
  email,
  password,
  formDataDispatch,
}: IAccountFormProps) {
  return (
    <FormWrap title="Account">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={email}
        name="email"
        onChange={(event) =>
          formDataDispatch({ type: "ADD_EMAIL", payload: event.target.value })
        }
        className=" m-2 border-2 border-black"
        type="email"
        required
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        value={password}
        name="password"
        onChange={(event) =>
          formDataDispatch({
            type: "ADD_PASSWORD",
            payload: event.target.value,
          })
        }
        className=" m-2 border-2 border-black"
        type="password"
        required
      />
    </FormWrap>
  );
}
