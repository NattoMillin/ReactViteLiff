import { RadioItemType } from "./Parts/RadioGroup";
import { SelectItemType } from "./Parts/Select";

export const Employment_Classification_item: SelectItemType[] = [
  {
    value: "regular",
    label: "正社員",
  },
  {
    value: "temporary",
    label: "派遣社員・期間社員",
  },
  {
    value: "Outward",
    label: "出向者",
  },
];

export const employment_item = [
  {
    value: "Ooita",
    label: "大分工場",
  },
  {
    value: "Fukuoka",
    label: "福岡工場",
  },
  {
    value: "Default",
    label: "",
  },
];

export const welfare_programme_Check_Item = [
  {
    label: "Air_conditioning",
    value: "空調服の斡旋価格にて販売・支給",
  },
  {
    label: "Water_Cooler",
    value: "冷水器の設置",
  },
  {
    label: "ice_cream",
    value: "アイスの無料提供",
  },
  {
    label: "Drink",
    value: "スポーツドリンク50円",
  },
];

export const Radio_experience: RadioItemType[] = [
  {
    value: "never",
    label: "ない",
  },
  {
    value: "experience",
    label: "ある",
  },
];

export const Radio_YesNo: RadioItemType[] = [
  {
    value: "yes",
    label: "はい",
  },
  {
    value: "No",
    label: "いいえ",
  },
];
