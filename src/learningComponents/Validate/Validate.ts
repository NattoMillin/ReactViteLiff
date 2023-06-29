import * as yup from "yup";

const onNewlineValidator = (errorMessage: string) =>
  yup
    .string()
    .test("no-newline", errorMessage, (value) => !value?.includes("@"))
    .required("このフィールドは必須です。");

export const schema = yup.object({
  Employment_Classification: yup.string().required("必須です"),
  employment: yup.string().required("必須です"),
  welfare_programme_Check: yup.string(),
  welfare_programme_Text: yup.string().required("必須です"),
  heat_health: yup.string(),
  heat_health_Radio: yup.string(),
  heat_health_Text: yup.string(),
  hete: yup.string(),
  hete_Radio: yup.string(),
  hete_Text: yup.string(),
});

export type FormType = yup.InferType<typeof schema>;
