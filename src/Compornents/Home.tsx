import {
  SubmitHandler,
  useForm,
  // useWatch
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormType, schema } from "./Validate/Validate";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
  //  TextField
} from "@mui/material";
import {
  CheckItems,
  Employment_Classification_item,
  Employment_item,
  Radio_experience,
} from "./Inner_Parts";
import { TextField } from "./Parts/TextField";
import { Select } from "./Parts/Select";
import { RadioGroup } from "./Parts/RadioGroup";
import { sendText } from "../sendMessage/SendMassage";

// import { CheckBoxGroup } from "./Parts/CheckboxGroup";
function Home() {
  // const checkItems: boolean[] = CheckItems.map((element) => element.checked);
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      Employment_Classification: "",
      employment: "",
      welfare_programme_Check: [],
      welfare_programme_Text: "",
      heat_health: "experience",
      // heat_health_Radio: "",
      // heat_health_Text: "",
      // hete: "",
      // hete_Radio: "",
      // hete_Text: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // const watched_heat_health_experience = useWatch({
  //   name: "heat_health",
  //   control,
  // });

  const onSubmit: SubmitHandler<FormType> = (data: FormType) =>
    sendText(data.Employment_Classification);

  return (
    <Stack
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      spacing={2}
      sx={{ m: 2, width: "25ch" }}
    >
      <Select
        name="employment"
        control={control}
        label="Select"
        styles={{ minWidth: 120, m: 3 }}
        items={Employment_item}
      />
      <Select
        name="Employment_Classification"
        control={control}
        label="Select"
        styles={{ minWidth: 120, m: 3 }}
        items={Employment_Classification_item}
      />
      <p>今年も異常気象と言われ、工場内の温度も高くなることが見込まれます。</p>
      <p>
        会社の熱中症対策の取り組みとして、これは良かった・来年はこんなことをしてほしいなど
        教えてください。
      </p>
      <Box>
        <Typography variant="h5" gutterBottom>
          今年度の取り組みでよかったものを選択してください。(最大2つ)
        </Typography>
        {CheckItems.map((item) => (
          <FormControlLabel
            label={item.name}
            value={item.id}
            id={item.id}
            control={<Checkbox {...register("welfare_programme_Check")} />}
          />
        ))}
        {errors.welfare_programme_Check && (
          <p>
            {errors.welfare_programme_Check.type}:{" "}
            {errors.welfare_programme_Check.message}
          </p>
        )}
      </Box>
      <TextField name="welfare_programme_Text" control={control} />
      {/* <CheckBoxGroup
        name={`welfare_programme_Check`}
        label="Check"
        control={control}
        styles={{ minWidth: 120, m: 3 }}
        items={CheckItems}
      /> */}

      <RadioGroup
        name="heat_health"
        control={control}
        label="Heat"
        styles={{ minWidth: 120, m: 3 }}
        items={Radio_experience}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Stack>
  );
}

export default Home;
