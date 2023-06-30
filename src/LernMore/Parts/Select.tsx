import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import { MuiStyles } from "../type";

export type SelectItemType = {
  label: string;
  value: string;
};
type SelectTypes = {
  label?: string;
  styles?: MuiStyles;
  items: SelectItemType[];
};
export type RhfTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  SelectTypes;

export const Select = <T extends FieldValues>(props: RhfTextFieldProps<T>) => {
  const { name, control, label, styles, items } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...rest }, fieldState }) => (
        <>
          <FormControl fullWidth error={fieldState.invalid} sx={styles}>
            <InputLabel id="area-label">{label}</InputLabel>
            <MuiSelect
              label={label}
              onChange={(e: any) => onChange(e)}
              {...rest}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {items.map((item) => (
                <MenuItem key={item.label} value={item.label}>
                  {item.value}
                </MenuItem>
              ))}
            </MuiSelect>
            <FormHelperText>{fieldState.error?.message}</FormHelperText>
          </FormControl>
        </>
      )}
    />
  );
};
