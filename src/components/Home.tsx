import { useForm, useWatch } from "react-hook-form";
import { Selects } from "./FormItems/Select";
import { submitReternMessage } from "./Msg/Message";
import { yupResolver } from "@hookform/resolvers/yup";
import { DefaulValue, FormValues } from "../types/type";
import { schema } from "./Validater/Validation";
import { Textbox } from "./FormItems/TextBoxMain";
import { Radio } from "./FormItems/Radio";

function Home() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: DefaulValue,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const watched_SummerHeatRadio = useWatch({
    control,
    name: "Summer_Heat_Radio",
    defaultValue: "ない",
  });
  const watched_SummerHeatReportRadio = useWatch({
    control,
    name: "Summer_Heat_Report_Radio",
    defaultValue: "はい",
  });
  const watched_painfulexperienceRadio = useWatch({
    control,
    name: "painful_experience_Radio",
    defaultValue: "はい",
  });
  const watched_painfulexperienceReportRadio = useWatch({
    control,
    name: "painful_experience_Report_Radio",
    defaultValue: "はい",
  });

  return (
    <div>
      <form onSubmit={handleSubmit(submitReternMessage)}>
        <p>雇用区分について</p>
        <Selects
          Items={["", "女性", "男性", "未回答"]}
          errors={errors}
          control={control}
          name="Kind_Select"
        />

        <p>勤務先について</p>
        <Selects
          Items={["", "大分工場", "福岡工場"]}
          errors={errors}
          control={control}
          name="employment_Select"
        />

        <p>職場環境について</p>
        <span>今年度の取り組み内容</span>
        <ul>
          <li>冷風服をあっせん価格にて販売</li>
          <li>休憩所に冷水機</li>
          <li>アイスの無料配布</li>
          <li>スポーツドリンク50円</li>
        </ul>
        <p>
          来年続けてほしい・または追加してほしいことなどあれば教えてください。
        </p>
        <Textbox control={control} name="welfare_TextBox" errors={errors} />

        <p>
          工場内の暑さのせいで、体調・気分が悪くなったりしたことはありますか？
        </p>
        <Radio
          Items={["ない", "ある"]}
          errors={errors}
          control={control}
          name="Summer_Heat_Radio"
        />
        {watched_SummerHeatRadio === "ある" ? (
          <>
            <p>そのことを上司に報告しましたか？</p>
            <Radio
              Items={["はい", "いいえ"]}
              errors={errors}
              control={control}
              name="Summer_Heat_Report_Radio"
            />
          </>
        ) : null}
        {watched_SummerHeatReportRadio === "いいえ" ? (
          <>
            <p>報告できなかった(しずらかった)理由をお聞かせください。</p>
            <Textbox
              errors={errors}
              control={control}
              name="Summer_Heat_Report_TextBox"
            />
          </>
        ) : null}

        <p>作業内容で痛い思いやきつい思いをしたことがありますか？</p>
        <Radio
          Items={["ない", "ある"]}
          errors={errors}
          control={control}
          name="painful_experience_Radio"
        />
        {watched_painfulexperienceRadio === "ある" ? (
          <>
            <p>そのことを上司に報告しましたか？</p>
            <Radio
              Items={["はい", "いいえ"]}
              errors={errors}
              control={control}
              name="painful_experience_Report_Radio"
            />
          </>
        ) : null}
        {watched_painfulexperienceReportRadio === "いいえ" ? (
          <>
            <p>報告できなかった(しずらかった)理由をお聞かせください。</p>
            <Textbox
              errors={errors}
              control={control}
              name="painful_experience_Report_TextBox"
            />
          </>
        ) : null}

        <input type="submit" />
      </form>

      {/* <button className="button" onClick={RtnMsg}>
        send message
      </button>
      <button className="button" onClick={getUserInfo}>
        show user info
      </button> */}
    </div>
  );
}
export default Home;
