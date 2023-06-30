import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormType, schema } from "./Validate/Validate";
import { Box, Button, FormLabel, Stack } from "@mui/material";
import {
  Employment_Classification_item,
  Radio_experience,
  employment_item,
  welfare_programme_Check_Item,
} from "./Inner_Parts";
import { TextField } from "./Parts/TextField";
import { Select } from "./Parts/Select";
import { RadioGroup } from "./Parts/RadioGroup";

function Home() {
  const { control, handleSubmit } = useForm<FormType>({
    defaultValues: {
      Employment_Classification: "",
      employment: "",
      welfare_programme_Check: "",
      welfare_programme_Text: "",
      heat_health: "experience",
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
    name: "heat_health",
    control,
  });
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

  const onSubmit: SubmitHandler<FormType> = (data) =>
    console.log(`submit: ${data.Employment_Classification}`);

  return (
    <Stack
      component="form"
      noValidate
      onSubmit={handleSubmit((data) =>
        console.log(`submit: ${data.Employment_Classification}`)
      )}
      spacing={2}
      sx={{ m: 2, width: "25ch" }}
    >
      <TextField name="welfare_programme_Text" control={control} />
      <Select
        name="Employment_Classification"
        control={control}
        label="Select"
        styles={{ minWidth: 120, m: 3 }}
        items={Employment_Classification_item}
      />
      <RadioGroup
        name="heat_health"
        control={control}
        label="Heat"
        styles={{ minWidth: 120, m: 3 }}
        items={Radio_experience}
      />
      {/* 
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
      </Box> */}
      <Button type="submit">Submit</Button>
    </Stack>
  );
}

export default Home;
