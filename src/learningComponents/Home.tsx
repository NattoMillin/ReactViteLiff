import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { RhfTextField } from "./Parts/TextField/RhfTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormType, schema } from "./Validate/Validate";
import { Box, FormLabel } from "@mui/material";
import { RhfSelectForm } from "./Parts/SelectForm/RhfSelectForm";
import {
  Employment_Classification_item,
  employment_item,
  welfare_programme_Check_Item,
} from "./Inner_Parts";
import { RhfCheckboxGroup } from "./Parts/CheckBox/RhfCheckBox";
import { useEffect } from "react";

function Home() {
  const { control, handleSubmit } = useForm<FormType>({
    defaultValues: {
      Employment_Classification: "",
      employment: "",
      welfare_programme_Check: "",
      welfare_programme_Text: "",
      heat_health: "",
      heat_health_Radio: "",
      heat_health_Text: "",
      hete: "",
      hete_Radio: "",
      hete_Text: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const watched_heat_health_experience = useWatch({
    name: "Employment_Classification",
    control,
    defaultValue:""
  });
  
  useEffect(() => {
    console.log(watched_heat_health_experience)
  },[watched_heat_health_experience])
  
  const watched_heat_health_experience_YesNo = useWatch({
    name: "heat_health_Radio",
    control,
  });
  const watched_hete_experience = useWatch({
    name: "heat_health",
    control,
  });
  const watched_hete_experience_YesNo = useWatch({
    name: "heat_health_Radio",
    control,
  });

  const onSubmit: SubmitHandler<FormType> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RhfSelectForm
        name="Employment_Classification"
        selectPropsList={Employment_Classification_item}
        control={control}
      />
      <RhfSelectForm
        name="employment"
        selectPropsList={employment_item}
        control={control}
      />
      <h3>職場環境についてお聞きします。</h3>
      <p>今年度も異常気象といわれ工場内の温度も外気温より高い日が・・・</p>
      <Box>
        <FormLabel component="legend">
          今年度の取り組み内容で来年も継続してほしいものをチェックしてください。
        </FormLabel>
        <RhfCheckboxGroup
          name="welfare_programme_Check"
          control={control}
          checkBoxPropsList={welfare_programme_Check_Item}
        />
        <RhfTextField name="welfare_programme_Text" control={control} />
      </Box>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Home;
