import { useController, UseControllerProps } from "react-hook-form";
import { FormValues } from "../../types/type";
import { ItemTypes } from "../../types/type";

export const Radio = (props: ItemTypes & UseControllerProps<FormValues>) => {
  const { field } = useController(props);
  return (
    <div>
      <p>{props.contentName}</p>
      {props.Items
        ? props.Items.map((item, index) => (
            <label key={index}>
              <input
                key={index}
                type="radio"
                value={item}
                name={field.name}
                ref={field.ref}
                onChange={field.onChange}
              />
              {item}
            </label>
          ))
        : null}
    </div>
  );
};
