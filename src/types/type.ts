import { FieldErrors } from "react-hook-form";
import { FormValues } from "../components/Home";

export type ItemTypes = {
  Items?: string[];
  errors?: FieldErrors<FormValues>;
};
