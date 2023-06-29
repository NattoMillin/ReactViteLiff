import * as yup from "yup";

const onNewlineValidator = (errorMessage: string) =>
  yup
    .string()
    .test("no-newline", errorMessage, (value) => !value?.includes("@"))
    .required("このフィールドは必須です。");

export const schema = yup.object().shape({
  Kind_Select: yup.string().required(),
  employment_Select: yup.string().required(),
  welfare_TextBox: onNewlineValidator("名前に改行は使用できません。"),
  Summer_Heat_Radio: yup.string().required(),
  Summer_Heat_Report_Radio: yup.string().required(),
  Summer_Heat_Report_TextBox:
    onNewlineValidator("名前に改行は使用できません。"),
  painful_experience_Radio: yup.string().required(),
  painful_experience_Report_Radio: yup.string().required(),
  painful_experience_Report_TextBox:
    onNewlineValidator("名前に改行は使用できません。"),
});

export type DefauleValue = yup.InferType<typeof schema>;
