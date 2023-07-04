import * as yup from "yup";

// const onNewlineValidator = (errorMessage: string) =>
//   yup
//     .array()
//     .test("no-newline", errorMessage, (value) => !value?.includes("@"))
//     .required("このフィールドは必須です。");

export const schema = yup.object({
  Employment_Classification: yup.string().required("必須です"),
  // employment: yup.string().required("必須です"),
  welfare_programme_Check: yup.array().of(yup.boolean()).max(2, "最大2つです。"),
  welfare_programme_Text: yup.string().required("必須です"),
  heat_health: yup.string().required("必須です"),
  // heat_health_Radio: yup.string().required("必須です"),
  // heat_health_Text: yup.string().required("必須です"),
  // hete: yup.string().required("必須です"),
  // hete_Radio: yup.string(),
  // hete_Text: yup.string(),
});

export type FormType = {
  Employment_Classification: string;
  // employment: string;
  welfare_programme_Check: boolean[];
  welfare_programme_Text: string;
  heat_health: string;
  // heat_health_Radio: string;
  // heat_health_Text: string;
  // hete: string;
  // hete_Radio: string;
  // hete_Text: string;
};
