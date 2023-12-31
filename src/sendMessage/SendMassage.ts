import liff from "@line/liff";
import { FormType } from "../Compornents/Validate/Validate";

export function sendText(text: string) {
  console.log(text);
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
シャワールーム:${data.showerroom}
追加してほしい取り組み:${data.welfare_programme_Text?.replace(/\n/g, "・")}
暑さのせいでの体調不良:${data.heat_health}
上司への報告:${data.heat_health == "ある" ? data.heat_health_Radio : ""}
報告できなかった理由:${
    data.heat_health_Radio == "いいえ" && data.heat_health == "ある"
      ? data.heat_health_Text?.replace(/\n/g, "・")
      : ""
  }
痛い思い:${data.hete}
上司への報告:${data.hete == "ある" ? data.hete_Radio : ""}
報告できなかった理由:${
    data.hete_Radio == "いいえ" && data.hete == "ある"
      ? data.hete_Text?.replace(/\n/g, "・")
      : ""
  }
人間関係について:${data.HumanRelations}
理由:${
    data.HumanRelations == "険悪"
      ? data.HumanRelations_Text?.replace(/\n/g, "・")
      : ""
  }
改善してほしい事:${data.ImprovementRelations}
理由:${
    data.ImprovementRelations == "ある"
      ? data.ImprovementRelations_Text?.replace(/\n/g, "・")
      : ""
  }
困り事ができた際:${data.Problem}
理由:${
    data.Problem == "できない" ? data.Problem_Text?.replace(/\n/g, "・") : ""
  }
上司と会話:${data.TalkYourBoss}
理由:${
    data.TalkYourBoss == "していない"
      ? data.TalkYourBoss_Text?.replace(/\n/g, "・")
      : ""
  }
ハラスメントについて:${data.Harassment}
理由:${
    data.Harassment == "あると思う" || data.Harassment == "ある(経験した)"
      ? data.Harassment_Text?.replace(/\n/g, "・")
      : ""
  }
退職意向:${data.LeavingOffice}
理由:${
    data.TalkYourBoss == "ある"
      ? data.LeavingOffice_Text?.replace(/\n/g, "・")
      : ""
  }
要望:${data.RequestsSupervisors}
内容:${
    data.RequestsSupervisors == "ある"
      ? data.RequestsSupervisors_Text?.replace(/\n/g, "・")
      : ""
  }
ファミリーフェスタの参加有無:${data.FamilyFest}
景品について:${data.Freebie?.replace(/\n/g, "・")}`;

  return texts;
}
