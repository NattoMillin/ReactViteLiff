import {
  FormHelperText,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

type TextFieldProps = {
  innerRef?: 
  errorMessage?:string
}
export const TextField: React.FC<TextFieldProps> = ({
  inputRef,
  errorMessage,
  ...rest
}) => {
  return (
    <>
      <MuiTextField ref={inputRef} error={!!errorMessage} {...rest} />
      {!!errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </>
  );
};
