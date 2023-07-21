import { SubmitHandler, useForm } from "react-hook-form";
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
import { TextFomattar, sendText } from "../sendMessage/SendMassage";
import styles from "./styles/Home.module.css";
import { HeatHelth } from "./Compornent/HeatHelth";
import { QuestionAccodion } from "./Compornent/QuestionAccodion";

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
      showerroom: "",
      welfare_programme_Text: "",
      heat_health: "",
      heat_health_Radio: "",
      heat_health_Text: "",
      hete: "",
      hete_Radio: "",
      hete_Text: "",
      HumanRelations: "",
      HumanRelations_Text: "",
      ImprovementRelations: "",
      Problem: "",
      TalkYourBoss: "",
      Harassment: "",
      LeavingOffice: "",
      RequestsSupervisors: "",
      ImprovementRelations_Text: "",
      Problem_Text: "",
      TalkYourBoss_Text: "",
      Harassment_Text: "",
      LeavingOffice_Text: "",
      RequestsSupervisors_Text: "",
      FamilyFest: "",
      Freebie: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormType> = (data: FormType) => {
    console.log(data);
    sendText(TextFomattar(data));
  };

  // const onSubmit: SubmitHandler<FormType> = (data: FormType) =>
  //   console.log(TextFomattar(data));

  return (
    <Stack
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      spacing={2}
      sx={{ m: 2 }}
    >
      {/* 題名 */}
      <Typography variant="h4" gutterBottom className={styles.MainName}>
        2023年 第1回 従業員アンケート{" "}
        <span className={styles.subtitle}>
          (対象者：全従業員 出向者・派遣含む)
        </span>
      </Typography>
      <Box className={styles.boxs}>
        <Typography variant="body2" gutterBottom className={styles.inline}>
          <span className={styles.question}>Q1</span>
          勤務先を選択してください
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
          勤務区分を選択してください。
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
            会社の熱中症対策の取り組みとして、良かったことを教えてください。(最大2つ)
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
          来年度の福利厚生の一環として、シャワールームの設置希望がありました。
          そこで、設置を希望するかご意見をいただけますでしょうか。
        </Typography>
        <Select
          name="showerroom"
          control={control}
          label="シャワールームについて"
          styles={{ minWidth: 120 }}
          items={[
            {
              value: "希望する",
              label: "希望する",
            },
            {
              value: "希望しない",
              label: "希望しない",
            },
          ]}
        />
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
      <HeatHelth
        FirstQuestion="工場内の暑さのせいで、体調・気分が悪くなったことはありますか？"
        control={control}
        name="heat_health"
        SecondRadio="heat_health_Radio"
        ThardText="heat_health_Text"
        QuestionNumber={5}
        restField={resetField}
      />

      <HeatHelth
        FirstQuestion="作業内容で痛い思いやきつい思いをしたことはありますか？"
        control={control}
        name="hete"
        SecondRadio="hete_Radio"
        ThardText="hete_Text"
        QuestionNumber={6}
        restField={resetField}
      />

      {/* 人間関係について */}
      <Typography variant="h5" gutterBottom className={styles.ContainName}>
        人間関係について
      </Typography>
      <QuestionAccodion
        FirstQuestion="職場内の人間関係はどうですか？(反対直含む)"
        Items={[
          {
            value: "良好",
            label: "良好",
          },
          {
            value: "普通",
            label: "普通",
          },
          {
            value: "険悪",
            label: "険悪",
          },
        ]}
        faildWord={["険悪"]}
        Labels="険悪となった理由をおきかせください。"
        control={control}
        name="HumanRelations"
        SecondRadio="HumanRelations_Text"
        QuestionNumber={7}
        restField={resetField}
      />

      <QuestionAccodion
        FirstQuestion="職場内の人間関係で改善してほしいことはありますか？"
        Items={[
          {
            value: "ない",
            label: "ない",
          },
          {
            value: "ある",
            label: "ある",
          },
        ]}
        control={control}
        Labels="改善してほしい内容をお聞かせください。"
        name="ImprovementRelations"
        SecondRadio="ImprovementRelations_Text"
        QuestionNumber={8}
        faildWord={["ある"]}
        restField={resetField}
      />
      <QuestionAccodion
        FirstQuestion="仕事上の困り事ができた場合、上司に相談できますか？"
        Items={[
          {
            value: "できる",
            label: "できる",
          },
          {
            value: "できない",
            label: "できない",
          },
        ]}
        faildWord={["できない"]}
        control={control}
        Labels="報告できなかった理由をお聞かせください。"
        name="Problem"
        SecondRadio="Problem_Text"
        QuestionNumber={9}
        restField={resetField}
      />
      <QuestionAccodion
        FirstQuestion="1日に1回以上、上司と話をしていますか？(プライベートな会話もOK)"
        Labels="話せない訳がありますか？。"
        Items={[
          {
            value: "している",
            label: "している",
          },
          {
            value: "していない",
            label: "していない",
          },
        ]}
        faildWord={["していない"]}
        control={control}
        name="TalkYourBoss"
        SecondRadio="TalkYourBoss_Text"
        QuestionNumber={10}
        restField={resetField}
      />
      <QuestionAccodion
        FirstQuestion="職場内においてハラスメントを感じる時がありますか？"
        Labels="内容をお聞かせください"
        Items={[
          {
            value: "ない",
            label: "ない",
          },
          {
            value: "あると思う",
            label: "あると思う",
          },
          {
            value: "ある(経験した)",
            label: "ある(経験した)",
          },
        ]}
        faildWord={["あると思う", "ある(経験した)"]}
        control={control}
        name="Harassment"
        SecondRadio="Harassment_Text"
        QuestionNumber={11}
        restField={resetField}
      />
      <QuestionAccodion
        FirstQuestion="退職したいと思ったことがありますか？"
        Labels="理由をお聞かせください。"
        Items={[
          {
            value: "ない",
            label: "ない",
          },
          {
            value: "ある",
            label: "ある",
          },
        ]}
        faildWord={["ある"]}
        control={control}
        name="LeavingOffice"
        SecondRadio="LeavingOffice_Text"
        QuestionNumber={12}
        restField={resetField}
      />
      <QuestionAccodion
        FirstQuestion="会社や上司に対して、何か要望はありますか？"
        Labels="要望をお聞かせください。"
        Items={[
          {
            value: "ない",
            label: "ない",
          },
          {
            value: "ある",
            label: "ある",
          },
        ]}
        faildWord={["ある"]}
        control={control}
        name="RequestsSupervisors"
        SecondRadio="RequestsSupervisors_Text"
        QuestionNumber={13}
        restField={resetField}
      />

      {/* 人間関係について */}
      <Typography variant="h5" gutterBottom className={styles.ContainName}>
        ファミリーフェスタについて
      </Typography>
      <Box className={styles.boxs}>
        <Typography variant="body2" gutterBottom className={styles.inline}>
          <span className={styles.question}>Q14</span>
          <span>
            今年もファミリーフェスタを開催いたします！
            <br />
            そこで、参加予定についてお伺いします。
          </span>
        </Typography>
        <Select
          name="FamilyFest"
          control={control}
          label="ファミリーフェスタの参加について"
          styles={{ minWidth: 120 }}
          items={[
            {
              value: "参加予定",
              label: "参加予定",
            },
            {
              value: "未定",
              label: "未定",
            },
            {
              value: "不参加",
              label: "不参加",
            },
          ]}
        />
      </Box>
      <Box className={styles.boxs}>
        <Typography variant="body2" gutterBottom className={styles.inline}>
          <span className={styles.question}>Q15</span>
          <span>ファミリーフェスタの景品で希望景品はありますか？</span>
        </Typography>
        <TextField
          name="Freebie"
          control={control}
          styles={{ width: "100%" }}
        />
      </Box>
      <Typography variant="body1" gutterBottom>
        お疲れ様でした！ 送信ボタンを押してください。
      </Typography>
      <Button variant="contained" type="submit">
        送信
      </Button>
    </Stack>
  );
}

export default Home;
