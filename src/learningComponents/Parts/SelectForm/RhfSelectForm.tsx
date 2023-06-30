import { useController } from "react-hook-form";
import type { FieldValues, UseControllerProps } from "react-hook-form";
import { SelectForm, SelectFormProps } from "./SelectForm";
import { useEffect, useState } from "react";

export type RhfSelectFormProps<T extends FieldValues> = Omit<
  SelectFormProps,
  "selectedValue"
> &
  UseControllerProps<T>;

export const RhfSelectForm = <T extends FieldValues>(
  props: Omit<RhfSelectFormProps<T>, "onChange">
): JSX.Element => {
  const { name, control, ...propatey } = props;
  const {
    field: { ref, onChange, value: selectedValue, ...rest },
    fieldState: { error },
  } = useController<T>({ name, control });

  const [Values, setValues] = useState<string>("");
  const handleChange = (e: any) => {
    const value = e.target.value as string;
    setValues(value);
  };
  useEffect(() => {
    console.log(error?.message)
  },[error?.message])
  return (
    <SelectForm
      inputRef={ref}
      onChange={handleChange}
      {...rest}
      {...propatey}
      selectedValue={Values}
      errorMessage={(error && error.message) || props.errorMessage}
    />
  );
};
