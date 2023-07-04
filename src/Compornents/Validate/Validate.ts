import * as yup from "yup";

const validateLunchBoxStyle = function (this: any) {
  const {
    welfare_programme_Check,
  } = this.parent
  let trueCount = 0;
  for (let i = 0; i < welfare_programme_Check.length; i++) {
    if (welfare_programme_Check[i]) {
      trueCount++;
      if (trueCount >= 2) {
        return false;
      }
    }
  }

  return true
}
// const onNewlineValidator = (errorMessage: string) =>
//   yup
//     .array()
//     .test("no-newline", errorMessage, (value) => !value?.includes("@"))
//     .required("このフィールドは必須です。");

export const schema = yup.object({
  Employment_Classification: yup.string().required("必須です"),
  // employment: yup.string().required("必須です"),
  welfare_programme_Check: yup.array().of(yup.boolean()).test(
    "boolCheck",
    "2つ以下で選択してください",
    validateLunchBoxStyle
  ),
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
