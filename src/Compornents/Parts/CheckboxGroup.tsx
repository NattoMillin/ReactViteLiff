import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import { MuiStyles } from "../type";

export type CheckBoxItemType = {
  id: string;
  name: string;
  checked: boolean;
  disabled?: boolean;
};
type CheckBoxTypes = {
  label?: string;
  styles?: MuiStyles;
  items: CheckBoxItemType[];
};
export type RhfTCheckboxProps<T extends FieldValues> = UseControllerProps<T> &
  CheckBoxTypes;

export const CheckBoxGroup = <T extends FieldValues>(
  props: RhfTCheckboxProps<T>
) => {
  const {
    name,
    control,
    //  label,
    items,
    styles,
  } = props;

  return (
    <>
      <FormControl fullWidth sx={styles}>
        <FormGroup>
          <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
              <>
                {items.map((item) => (
                  <FormControlLabel
                    label={item.name}
                    control={<Checkbox {...field} checked={field.value} />}
                  />
                ))}
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              </>
            )}
          />
        </FormGroup>
      </FormControl>
    </>
  );
};
