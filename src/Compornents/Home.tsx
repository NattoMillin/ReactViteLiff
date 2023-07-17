import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormType, schema } from "./Validate/Validate";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Stack,
  Typography,
  //  TextField
} from "@mui/material";
import {
  CheckItems,
  Employment_Classification_item,
  Employment_item,
} from "./Inner_Parts";
import { TextField } from "./Parts/TextField";
import { Select } from "./Parts/Select";
import { sendText } from "../sendMessage/SendMassage";
import styles from "./styles/Home.module.css";
import { HeatHelth } from "./Compornent/HeatHelth";
import { useEffect } from "react";

// import { CheckBoxGroup } from "./Parts/CheckboxGroup";
function Home() {
  const {
    control,
    handleSubmit,
    register,
    resetField,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      Employment_Classification: "",
      employment: "",
      welfare_programme_Check: [],
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

  const useWacthcheck = useWatch({
    control,
    name: "welfare_programme_Check", // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
    defaultValue: [], // default value before the render
  });

  useEffect(() => {
    console.log(useWacthcheck);
  }, [useWacthcheck]);

  // const onSubmit: SubmitHandler<FormType> = (data: FormType) =>
  //   sendText(data.Employment_Classification);

  const onSubmit: SubmitHandler<FormType> = (data: FormType) =>
    console.log(data);

  return (
    <Stack
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      spacing={2}
      sx={{ m: 2, width: "500px" }}
    >
      <Box className={styles.boxs}>
        <Typography variant="body2" gutterBottom className={styles.inline}>
          <span className={styles.question}>Q1</span>
          今年度の取り組みでよかったものを選択してください。テスト(最大2つ)
        </Typography>
        <Select
          name="employment"
          control={control}
          label="勤務先"
          styles={{ minWidth: 120 }}
          items={Employment_item}
        />
      </Box>
      <Box className={styles.boxs}>
        <Typography variant="body2" gutterBottom className={styles.inline}>
          <span className={styles.question}>Q2</span>
          今年度の取り組みでよかったものを選択してください。(最大2つ)
        </Typography>
        <Select
          name="Employment_Classification"
          control={control}
          label="勤務区分"
          styles={{ minWidth: 120 }}
          items={Employment_Classification_item}
        />
      </Box>
      <Box className={styles.boxs}>
        <Typography variant="body1" gutterBottom className={styles.bodys}>
          今年も異常気象と言われ、工場内の温度も高くなることが見込まれます。
        </Typography>
        <Typography variant="body2" gutterBottom className={styles.inline}>
          <span className={styles.question}>Q3</span>
          <span>
            会社の熱中症対策の取り組みとして、これは良かった・来年はこんなことをしてほしいなど
            教えてください。(最大2つ)
          </span>
        </Typography>
        <FormControl error className={styles.boxs_choice}>
          {CheckItems.map((item) => (
            <FormControlLabel
              key={item.id}
              label={item.name}
              value={item.id}
              id={item.id}
              control={<Checkbox {...register("welfare_programme_Check")} />}
            />
          ))}
          <FormHelperText>
            {errors?.welfare_programme_Check?.message}
          </FormHelperText>
        </FormControl>
      </Box>
      <Box className={styles.boxs}>
        <Typography variant="body2" gutterBottom className={styles.inline}>
          <span className={styles.question}>Q4</span>
          <span>
            来年度にこんな取り組みをしてほしいというものがあれば、教えてください。
          </span>
        </Typography>
        <TextField
          name="welfare_programme_Text"
          control={control}
          styles={{ width: "100%" }}
        />
      </Box>
      <Box className={styles.boxs}>
        <Typography variant="body2" gutterBottom className={styles.inline}>
          <span className={styles.question}>Q5</span>
          <span>工場内の暑さで、体調・気分が悪くなったことはありますか？</span>
        </Typography>
        <HeatHelth
          control={control}
          name="heat_health"
          SecondRadio="heat_health_Radio"
          ThardText="heat_health_Text"
          QuestionNumber={5}
          restField={resetField}
        />
      </Box>
      <Box className={styles.boxs}>
        <Typography variant="body2" gutterBottom className={styles.inline}>
          <span className={styles.question}>Q6</span>
          <span>作業内容で痛い思いや、きつい思いをしたことがありますか。</span>
        </Typography>
        <HeatHelth
          control={control}
          name="hete"
          SecondRadio="hete_Radio"
          ThardText="hete_Text"
          QuestionNumber={6}
          // setValueRadio={setValue("hete_Radio", "")}
          restField={resetField}
        />
      </Box>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Stack>
  );
}

export default Home;
