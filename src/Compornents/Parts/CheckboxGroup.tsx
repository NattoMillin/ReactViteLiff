import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { MuiStyles } from "../type";

export type CheckBoxItemType = {
  checked: boolean;
  label: string;
};
type CheckBoxTypes = {
  label?: string;
  styles?: MuiStyles;
  item: CheckBoxItemType;
};
export type RhfTCheckboxProps<T extends FieldValues> = UseControllerProps<T> &
  CheckBoxTypes;

export const CheckBoxGroup = <T extends FieldValues>(
  props: RhfTCheckboxProps<T>
) => {
  const { name, control,
    //  label,
      item, styles } = props;

  return (
    <>
      <FormControl fullWidth sx={styles}>
        <FormGroup>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <>
                <FormControlLabel
                  label={item.label}
                  control={<Checkbox {...field} checked={field.value} />}
                />
              </>
            )}
          />
        </FormGroup>
      </FormControl>
    </>
  );
};
