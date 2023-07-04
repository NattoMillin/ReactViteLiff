import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@mui/material";
import { MuiStyles } from "../type";

export type RadioItemType = {
  label: string;
  value: string;
};
type RadioTypes = {
  label?: string;
  styles?: MuiStyles;
  items: RadioItemType[];
};
export type RhfTRadioProps<T extends FieldValues> = UseControllerProps<T> &
  RadioTypes;

export const RadioGroup = <T extends FieldValues>(props: RhfTRadioProps<T>) => {
  const { name, control, label, items, styles } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...rest }, fieldState }) => (
        <>
          <FormControl fullWidth error={fieldState.invalid} sx={styles}>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup name={name} value={rest.value}>
              {items.map((item) => (
                <FormControlLabel
                  {...rest}
                  key={item.label}
                  onChange={(e: any) => onChange(e)}
                  value={item.value}
                  control={<Radio />}
                  label={item.label}
                />
              ))}
            </MuiRadioGroup>
            <FormHelperText>{fieldState.error?.message}</FormHelperText>
          </FormControl>
          <div>{rest.value}</div>
        </>
      )}
    />
  );
};
