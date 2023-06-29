import { useController, UseControllerProps } from "react-hook-form";
import { FormValues } from "../../types/type";
import { ItemTypes } from "../../types/type";

export const Selects = (props: ItemTypes & UseControllerProps<FormValues>) => {
  const { field } = useController(props);
  return (
    <div>
      <select
        {...field}
        // name={field.name}
        // ref={field.ref}
        // onChange={field.onChange}
        // onBlur={field.onBlur}
      >
        {props.Items
          ? props.Items.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};
