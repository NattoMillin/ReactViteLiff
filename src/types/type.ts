import { FieldErrors } from "react-hook-form";
import * as yup from "yup";
import { schema } from "../components/Validater/Validation";
schema;

export type ItemTypes = {
  Items?: string[];
  errors?: FieldErrors<FormValues>;
};

export const Address = ["tokyo", "osaka", ""] as const; // ''は未選択状態
export const Gender = ["male", "female", "other"] as const;

export type FormValues = yup.InferType<typeof schema>;

export const DefaulValue: FormValues = {
  Kind_Select: "",
  employment_Select: "",
  welfare_TextBox: "",
  Summer_Heat_Radio: "ない",
  Summer_Heat_Report_Radio: "はい",
  Summer_Heat_Report_TextBox: "",
  painful_experience_Radio: "ない",
  painful_experience_Report_Radio: "はい",
  painful_experience_Report_TextBox: "",
};
