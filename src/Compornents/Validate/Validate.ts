import * as yup from "yup";

const validateLunchBoxStyle = function (this: any) {
  const { welfare_programme_Check } = this.parent;

  if (welfare_programme_Check.length > 2) {
    return false;
  }
  return true;
};

export const schema = yup.object({
  Employment_Classification: yup.string().required("必須です"),
  employment: yup.string().required("必須です"),
  welfare_programme_Check: yup
    .array()
    .of(yup.string())
    .defined()
    .test("boolCheck", "2つ以下で選択してください", validateLunchBoxStyle),
  heat_health: yup.string().required("必須です"),
});

export type FormType = {
  Employment_Classification: string;
  employment: string;
  welfare_programme_Check: (string | undefined)[];
  welfare_programme_Text?: string;
  heat_health: string;
  heat_health_Radio?: string;
  heat_health_Text?: string;
  // hete: string;
  // hete_Radio: string;
  // hete_Text: string;
};
