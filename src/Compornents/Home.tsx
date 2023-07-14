import React from "react";
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
  Radio_experience,
  Radio_YesNo,
} from "./Inner_Parts";
import { TextField } from "./Parts/TextField";
import { Select } from "./Parts/Select";
import { RadioGroup } from "./Parts/RadioGroup";
import { sendText } from "../sendMessage/SendMassage";
import { useEffect } from "react";
import styles from "./styles/Home.module.css";
import { HeatHelth } from "./Compornent/HeatHelth";

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
      heat_health_Radio: "",
      heat_health_Text: "",
      // hete: "",
      // hete_Radio: "",
      // hete_Text: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const watched_heat_health_experience = useWatch({
    name: "heat_health",
    control,
  });
  const watched_heat_health_Radio = useWatch({
    name: "heat_health_Radio",
    control,
  });

  useEffect(() => {
    console.log(watched_heat_health_Radio);
  }, [watched_heat_health_Radio]);

  const onSubmit: SubmitHandler<FormType> = (data: FormType) =>
    sendText(data.Employment_Classification);

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
        {" "}
        {/* 熱中症対策の取り組みSelectBox */}
        <Typography variant="body1" gutterBottom className={styles.bodys}>
          今年も異常気象と言われ、工場内の温度も高くなることが見込まれます。
        </Typography>
        <Typography variant="body2" gutterBottom className={styles.inline}>
          <span className={styles.question}>Q3</span>
          <div>
            会社の熱中症対策の取り組みとして、これは良かった・来年はこんなことをしてほしいなど
            教えてください。(最大2つ)
          </div>
        </Typography>
        <FormControl error className={styles.boxs_choice}>
          {CheckItems.map((item) => (
            <FormControlLabel
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
        {" "}
        {/* 来年度の取り組みSelectBox */}
        <Typography variant="body2" gutterBottom className={styles.inline}>
          <span className={styles.question}>Q4</span>
          <div>
            来年度にこんな取り組みをしてほしいというものがあれば、教えてください。
          </div>
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
          <div>工場内の暑さで、体調・気分が悪くなったことはありますか？</div>
        </Typography>
        <HeatHelth control={control} name="welfare_programme_Text" />
      </Box>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Stack>
  );
}

export default Home;
