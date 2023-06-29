import * as yup from "yup";

// const onNewlineValidator = (errorMessage: string) =>
//   yup
//     .string()
//     .test("no-newline", errorMessage, (value) => !value?.includes("@"))
//     .required("このフィールドは必須です。");

export const schema = yup.object({
  Employment_Classification: yup.string().required(),
  employment: yup.string().required(),
  welfare_programme_Check: yup.string().required(),
  welfare_programme_Text: yup.string().required(),
  heat_health: yup.string().required(),
  heat_health_Radio: yup.string().required(),
  heat_health_Text: yup.string().required(),
  hete: yup.string().required(),
  hete_Radio: yup.string().required(),
  hete_Text: yup.string().required(),
});

export type FormType = {
  Employment_Classification: string;
  employment: string;
  welfare_programme_Check: string;
  welfare_programme_Text: string;
  heat_health: string;
  heat_health_Radio: string;
  heat_health_Text: string;
  hete: string;
  hete_Radio: string;
  hete_Text: string;
};
