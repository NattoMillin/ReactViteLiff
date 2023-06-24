import { useController, UseControllerProps } from "react-hook-form";
import { FormValues } from "../Home";
import { ItemTypes } from "../../types/type";

export const Options = (props: ItemTypes & UseControllerProps<FormValues>) => {
  const { field } = useController(props);
  return (
    <label>
      {field.name}
      <select
        name={field.name}
        ref={field.ref}
        onChange={field.onChange}
        onBlur={field.onBlur}
      >
        {props.Items
          ? props.Items.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))
          : null}
      </select>
    </label>
  );
};
