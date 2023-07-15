import {
  Controller,
  FieldValues,
  Path,
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
};
export type RhfTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Names<T>;

export const HeatHelth = <T extends FieldValues>(
  props: RhfTextFieldProps<T>
) => {
  const [HeatValue, setHeatValue] = useState("");
  const [HeatValueRadio, setHeatValueRadio] = useState("");
  const [HeatValueText, setHeatValueText] = useState("");

  const [showContents, setShowContents] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const childElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (HeatValue == "never") {
      setHeatValueRadio("");
      setHeatValueText("");
    }
  }, [HeatValue]);

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
                <MuiRadioGroup name={"heat_health"} value={HeatValue}>
                  {Radio_experience.map((item: RadioItemType) => (
                    <FormControlLabel
                      {...rest}
                      key={item.label}
                      onChange={() => setHeatValue(item.value)}
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

      <Controller
        name={props.SecondRadio}
        control={props.control}
        render={({ field: { onChange, ...rest }, fieldState }) => (
          <div ref={childElement} className={HeartStyle.container}>
            <FormControl
              fullWidth
              error={fieldState.invalid}
              sx={{ minWidth: 120 }}
            >
              <MuiRadioGroup name={"heat_health_Radio"} value={HeatValueRadio}>
                {Radio_YesNo.map((item: RadioItemType) => (
                  <FormControlLabel
                    {...rest}
                    key={item.label}
                    onChange={() => setHeatValueRadio(item.value)}
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
      <Controller
        name={props.ThardText}
        control={props.control}
        render={({ field: { onChange, ...rest }, fieldState }) => (
          <div className={HeartStyle.container}>
            <div
              className={
                HeatValueRadio === "No"
                  ? `${HeartStyle.appear} `
                  : `${HeartStyle.unappear}`
              }
            >
              <Typography
                variant="body2"
                gutterBottom
                className={styles.inline}
              >
                <span className={styles.question}>Q5-1</span>
                <div>
                  いいえと答えた方、報告しずらかった理由をお聞かせください。
                </div>
              </Typography>
              <MuiTextField
                {...rest}
                type="text"
                value={HeatValueText}
                label={"welfare_programme_Text"}
                sx={{ width: "100%" }}
                error={fieldState.invalid}
                onChange={(event: any) => setHeatValueText(event.target.value)}
                multiline
                rows={3}
                helperText={fieldState.error?.message}
              />
            </div>
          </div>
        )}
      />
    </Box>
  );
};
