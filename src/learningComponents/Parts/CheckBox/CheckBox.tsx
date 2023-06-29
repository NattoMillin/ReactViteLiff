import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import type { FormGroupProps } from "@mui/material";

export type checkItem = {
  label: string;
  value: string;
};

export type CheckboxGroupProps = FormGroupProps & {
  inputRef?: FormGroupProps["ref"];
  errorMessage?: string;
  checkBoxPropsList: checkItem[];
  checkedValues: string[];
};

export const CheckBox: React.FC<CheckboxGroupProps> = ({
  inputRef,
  checkBoxPropsList,
  checkedValues,
  errorMessage,
  ...rest
}) => {
  return (
    <div>
      <FormGroup ref={inputRef} {...rest}>
        {checkBoxPropsList.map((props) => (
          <FormControlLabel
            key={props.value}
            control={
              <Checkbox
                value={props.value}
                checked={checkedValues.includes(props.value)}
              />
            }
            label={props.label}
          />
        ))}
      </FormGroup>
      {!!errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </div>
  );
};
