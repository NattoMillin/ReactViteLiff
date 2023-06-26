import { useForm } from "react-hook-form";
import { Input } from "./FormItems/Input";
import { Options } from "./FormItems/Select";
import { RtnMsg, getUserInfo, submitReternMessage } from "./Msg/Message";

export type FormValues = {
  FirstName: string;
  SelectItem: string;
};
function Home() {

  console.log("Home Start")

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      FirstName: "",
      SelectItem: "",
    },
    mode: "onChange",
  });
  const items: string[] = ["female", "male"];
  
  console.log("Home Return start")

  return (
    <>
      <form onSubmit={handleSubmit(submitReternMessage)}>
        <Input
          control={control}
          name="FirstName"
          errors={errors}
          rules={{ required: true }}
        />
        <Options
          Items={items}
          errors={errors}
          control={control}
          name="SelectItem"
          rules={{ required: true }}
        />
        <input type="submit" />
      </form>
      <button className="button" onClick={RtnMsg}>
        send message
      </button>
      <button className="button" onClick={getUserInfo}>
        show user info
      </button>
    </>
  );
}
export default Home;
