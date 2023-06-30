import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { TextField as MuiTextField } from "@mui/material";
import { MuiStyles } from "../type";

type TextTypes = { DefaultValue?: string; label?: string; styles?: MuiStyles };
export type RhfTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  TextTypes;

export const TextField = <T extends FieldValues>(
  props: RhfTextFieldProps<T>
) => {
  const { name, control, label, styles } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <MuiTextField
          {...field}
          type="text"
          label={label}
          sx={styles}
          error={fieldState.invalid}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};
