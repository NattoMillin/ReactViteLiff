import { useController, UseControllerProps } from "react-hook-form";
import { FormValues } from "../Home";
import { ItemTypes } from "../../types/type";

export const Input = (props: ItemTypes & UseControllerProps<FormValues>) => {
  const { field, fieldState } = useController(props);
  return (
    <div>
      <input {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
      {props.errors?.FirstName && "First name is required"}
    </div>
  );
};
