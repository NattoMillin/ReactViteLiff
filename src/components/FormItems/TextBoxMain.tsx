import { useController, UseControllerProps } from "react-hook-form";
import { FormValues } from "../../types/type";
import { ItemTypes } from "../../types/type";

export const Textbox = (props: ItemTypes & UseControllerProps<FormValues>) => {
  const { field } = useController(props);
  return (
    <div>
      <p>{props.contentName}</p>
      <textarea {...field} placeholder={props.name} />
      {/* <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p> */}
      <p>{props.errors?.FirstName?.message}</p>
    </div>
  );
};
