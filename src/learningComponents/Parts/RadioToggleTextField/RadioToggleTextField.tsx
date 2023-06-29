import { FieldValues, useWatch, FieldPath } from "react-hook-form";
import { RhfRadioGroup, RhfRadioGroupProps } from "../RadioGroup/RhfRadioGroup";
import { RhfTextField } from "../TextField/RhfTextField";

const YesNoToggle = [
  {
    label: "はい",
    value: "Yes",
  },
  {
    label: "いいえ",
    value: "No",
  },
];

type SecondType<T extends FieldValues> = FieldPath<T>;

export const ToggleTextField = <
  T extends FieldValues,
  Tname extends FieldPath<T> = FieldPath<T>
>(
  props: RhfRadioGroupProps<T>,
  SecondRadioName: Tname,
  SecondTextName: Tname
): JSX.Element => {
  const { name, control, radioPropsList, ...rest } = props;

  const watched_SummerHeatRadio = useWatch({
    name: name,
    control,
  });
  const watched_SummerHeatRadios = useWatch({
    name: SecondRadioName,
    control,
  });

  return (
    <>
      <RhfRadioGroup
        name={name}
        control={control}
        {...rest}
        radioPropsList={radioPropsList}
      />
      {watched_SummerHeatRadio == "ある" ? (
        <RhfRadioGroup
          name={SecondRadioName}
          control={control}
          radioPropsList={YesNoToggle}
          {...rest}
        />
      ) : null}
      {watched_SummerHeatRadios == "はい" ? (
        <RhfTextField name={SecondTextName} control={control} />
      ) : null}
    </>
  );
};
