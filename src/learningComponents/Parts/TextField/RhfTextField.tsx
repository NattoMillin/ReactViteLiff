import {
  FieldValues,
  useController,
  UseControllerProps,
  useWatch,
} from "react-hook-form";
import { TextField, TextFieldProps } from "./TextField";
import { useCallback, useEffect } from "react";

export type RhfTextFieldProps<T extends FieldValues> = TextFieldProps &
  UseControllerProps<T>;

export const RhfTextField = <T extends FieldValues>(
  props: RhfTextFieldProps<T>
) => {
  const { name, control } = props;
  const {
    field: { ref, ...rest },
    fieldState: { error },
  } = useController<T>({ name, control });

  return (
    <TextField
      inputRef={ref}
      {...rest}
      {...props}
      errorMessage={(error && error.message) || props.errorMessage}
    />
  );
};
