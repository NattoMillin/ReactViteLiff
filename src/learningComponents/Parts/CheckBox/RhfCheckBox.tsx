import React, { useEffect, useState } from "react";
import { DeepMap, FieldError, useController } from "react-hook-form";
import type { FieldValues, UseControllerProps } from "react-hook-form";
import { CheckBox, CheckboxGroupProps } from "./CheckBox";

export type RhfCheckboxGroupProps<T extends FieldValues> = Omit<
  CheckboxGroupProps,
  "checkedValues"
> &
  UseControllerProps<T>;

export const RhfCheckboxGroup = <T extends FieldValues>(
  props: RhfCheckboxGroupProps<T>
): JSX.Element => {
  const { name, control } = props;
  const {
    field: { ref, onChange, value: checkedValues, ...rest },
    fieldState: { error },
  } = useController<T>({ name, control });

  const [checkedValuesItems, setCheckedValues] = useState<string[]>([]);
  useEffect(() => {
    setCheckedValues(checkedValues);
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCheckedValues((prevValues) => [...prevValues, value]);
    } else {
      setCheckedValues((prevValues) =>
        prevValues.filter((item) => item !== value)
      );
    }
  };

  return (
    <CheckBox
      inputRef={ref}
      onChange={handleChange}
      {...rest}
      checkBoxPropsList={props.checkBoxPropsList}
      checkedValues={[...checkedValuesItems]}
      errorMessage={(error && error.message) || props.errorMessage}
    />
  );
};
