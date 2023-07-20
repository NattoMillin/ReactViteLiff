import liff from "@line/liff";
import { FormType } from "../Compornents/Validate/Validate";

export function sendText(text: string) {
  liff
    .sendMessages([
      {
        type: "text",
        text: text,
      },
    ])
    .then(function () {
      liff.closeWindow();
    })
    .catch(function (error) {
      window.alert("Failed to send message " + error);
    });
}

export function TextFomattar(data: FormType) {
  const texts = `雇用区分:${data.Employment_Classification}
勤務先:${data.employment}
今年度の取り組み:${
    data.welfare_programme_Check &&
    data.welfare_programme_Check.map((item) => {
      if (typeof item === "string") {
        return item;
      }
      return "";
    })
  }
続けてほしい取り組み:${data.welfare_programme_Text}
暑さのせいでの体調不良:${data.heat_health}
上司への報告:${data.heat_health_Radio}
報告できなかった理由:${data.heat_health_Text}
痛い思い:${data.hete}
上司への報告:${data.hete_Radio}
報告できなかった理由:${data.hete_Text}
人間関係について:${data.HumanRelations}
理由:${data.HumanRelations_Text}
改善してほしい事:${data.ImprovementRelations}
理由:${data.ImprovementRelations_Text}
困り事ができた際:${data.Problem}
理由:${data.Problem_Text}
上司と会話:${data.TalkYourBoss}
理由:${data.TalkYourBoss_Text}
ハラスメントについて:${data.Harassment}
理由:${data.Harassment_Text}
退社意向:${data.LeavingOffice}
理由:${data.LeavingOffice_Text}
要望:${data.RequestsSupervisors}
内容:${data.RequestsSupervisors_Text}
ファミリーフェスタの参加有無:${data.FamilyFest}
景品について:${data.Freebie}`;

  return texts;
}
