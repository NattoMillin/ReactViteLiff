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
import { RadioItemType } from "../Parts/RadioGroup";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import HeartStyle from "./HeatHelth.module.css";
import AccodionStyle from "./QuestionAccodion.module.css";

type Names<T extends FieldValues> = {
  FirstQuestion: string;
  Labels: string;
  Items: RadioItemType[];
  SecondRadio: Path<T>;
  QuestionNumber: number;
  restField: (props: Path<T>) => void;
};

type RhfTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Names<T>;

export const QuestionAccodion = <T extends FieldValues>(
  props: RhfTextFieldProps<T>
) => {
  const [FirstQuestion, setFirstQuestion] = useState("");
  // const [SecondQuestion, setSecondQuestion] = useState("");
  const [showContents, setShowContents] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const childElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (FirstQuestion == props.Items[1].value) {
      // setSecondQuestion("");
      if (childElement.current) {
        const childHeight = childElement.current?.clientHeight;
        setContentHeight(childHeight);
        setShowContents(true);
      }
    } else {
      setShowContents(false);
      props.restField(props.SecondRadio);
    }
  }, [FirstQuestion]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstQuestion((event.target as HTMLInputElement).value);
  };

  return (
    <Box className={styles.boxs}>
      <Typography variant="body2" gutterBottom className={styles.inline}>
        <span className={styles.question}>{`Q${props.QuestionNumber}`}</span>
        <span>{props.FirstQuestion}</span>
      </Typography>
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
                  value={FirstQuestion}
                  onChange={handleChange}
                >
                  {props.Items.map((item: RadioItemType) => (
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
        className={AccodionStyle.innerContent}
      >
        <Controller
          name={props.SecondRadio}
          control={props.control}
          render={({ field, fieldState }) => (
            <div ref={childElement} className={AccodionStyle.container}>
              <MuiTextField
                {...field}
                type="text"
                value={field.value}
                label={props.Labels}
                fullWidth
                margin="dense"
                error={fieldState.invalid}
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
