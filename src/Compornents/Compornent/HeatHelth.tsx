import {
  Controller,
  FieldValues,
  Path,
  PathValue,
  UseControllerProps,
} from "react-hook-form";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Typography,
  Box,
  Radio,
  RadioGroup as MuiRadioGroup,
  TextField as MuiTextField,
} from "@mui/material";
import { Radio_experience, Radio_YesNo } from ".././Inner_Parts";
import { RadioItemType } from "../Parts/RadioGroup";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import HeartStyle from "./HeatHelth.module.css";

type Names<T extends FieldValues> = {
  SecondRadio: Path<T>;
  ThardText: Path<T>;
  QuestionNumber: number;
  restField: (props: Path<T>) => void;
};

export type RhfTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Names<T>;

export const HeatHelth = <T extends FieldValues>(
  props: RhfTextFieldProps<T>
) => {
  const [HeatValue, setHeatValue] = useState("");
  const [HeatValueRadio, setHeatValueRadio] = useState("");
  const [showContents, setShowContents] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const childElement = useRef<HTMLDivElement>(null);
  const [showTextContents, setShowTextContents] = useState(false);
  const [TextcontentHeight, setTextcontentHeight] = useState(0);
  const TextchildElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (HeatValue == "never" || HeatValue == "") {
      setHeatValueRadio("");
      setShowContents(false);
      setShowTextContents(false);
      props.restField(props.SecondRadio);
      props.restField(props.ThardText);
      // props.setValue(props.SecondRadio, "");
      // props.setValue(props.ThardText, "");
    } else {
      if (childElement.current) {
        const childHeight = childElement.current?.clientHeight; // 対象要素の高さの取得
        setContentHeight(childHeight); // 対象要素の高さの代入
        setShowContents(true);
      }
    }
  }, [HeatValue]);

  useEffect(() => {
    if (HeatValueRadio == "yes" || HeatValueRadio == "") {
      setShowTextContents(false);
    } else {
      if (TextchildElement.current) {
        const childHeightText = TextchildElement.current?.clientHeight; // 対象要素の高さの取得
        setTextcontentHeight(childHeightText); // 対象要素の高さの代入
        setShowTextContents(true);
      }
    }
  }, [HeatValueRadio]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeatValue((event.target as HTMLInputElement).value);
  };
  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeatValueRadio((event.target as HTMLInputElement).value);
  };

  return (
    <Box className={HeartStyle.container}>
      <Controller
        name={props.name}
        control={props.control}
        render={({ field: { onChange, ...rest }, fieldState }) => (
          <>
            <div className={HeartStyle.container}>
              <FormControl
                fullWidth
                error={fieldState.invalid}
                sx={{ minWidth: 120 }}
              >
                <MuiRadioGroup
                  name={props.name}
                  value={HeatValue}
                  onChange={handleChange}
                >
                  {Radio_experience.map((item: RadioItemType) => (
                    <FormControlLabel
                      key={item.label}
                      {...rest}
                      onChange={(e: any) => onChange(e)}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </MuiRadioGroup>
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              </FormControl>
            </div>
          </>
        )}
      />
      <div
        style={{
          height: showContents ? `${contentHeight}px` : "0px",
          opacity: showContents ? 1 : 0,
        }}
        className={HeartStyle.innerContent}
      >
        <Controller
          name={props.SecondRadio}
          control={props.control}
          render={({ field: { onChange, ...rest }, fieldState }) => (
            <div ref={childElement} className={HeartStyle.container}>
              <Typography
                variant="body2"
                gutterBottom
                className={HeartStyle.inline}
              >
                <span
                  className={styles.question}
                >{`Q${props.QuestionNumber}-1`}</span>
                <span>そのことを上司に報告しましたか？</span>
              </Typography>
              <FormControl
                fullWidth
                error={fieldState.invalid}
                sx={{ minWidth: 120 }}
              >
                <MuiRadioGroup
                  name={"heat_health_Radio"}
                  value={HeatValueRadio}
                  onChange={handleChangeRadio}
                >
                  {Radio_YesNo.map((item: RadioItemType) => (
                    <FormControlLabel
                      {...rest}
                      key={item.label}
                      onChange={(e: any) => onChange(e)}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </MuiRadioGroup>
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              </FormControl>
            </div>
          )}
        />
      </div>
      <div
        style={{
          height: showTextContents ? `${TextcontentHeight}px` : "0px",
          opacity: showTextContents ? 1 : 0,
        }}
        className={HeartStyle.innerContent}
      >
        <Controller
          name={props.ThardText}
          control={props.control}
          render={({ field, fieldState }) => (
            <div ref={TextchildElement} className={HeartStyle.container}>
              <Typography
                variant="body2"
                gutterBottom
                className={HeartStyle.inline}
              >
                <span
                  className={styles.question}
                >{`Q${props.QuestionNumber}-2`}</span>
                <span>
                  いいえと答えた方、報告しずらかった理由をお聞かせください。
                </span>
              </Typography>
              <MuiTextField
                {...field}
                type="text"
                value={field.value}
                label={"理由をお聞かせください。"}
                sx={{ width: "100%" }}
                error={fieldState.invalid}
                // onChange={(event: any) => setHeatValueText(event.target.value)}
                onChange={(event: any) => {
                  field.onChange(event.target.value);
                }}
                multiline
                rows={3}
                helperText={fieldState.error?.message}
              />
            </div>
          )}
        />
      </div>
    </Box>
  );
};
