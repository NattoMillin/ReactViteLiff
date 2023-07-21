import { CheckBoxItemType } from "./Parts/CheckboxGroup";
import { RadioItemType } from "./Parts/RadioGroup";
import { SelectItemType } from "./Parts/Select";

export const Employment_item: SelectItemType[] = [
  {
    label: "大分工場",
    value: "大分",
  },
  {
    label: "福岡工場",
    value: "福岡",
  },
];
export const Employment_Classification_item: SelectItemType[] = [
  {
    label: "正社員",
    value: "正社員",
  },
  {
    label: "派遣社員・期間社員",
    value: "派遣社員",
  },
  {
    label: "出向者",
    value: "出向者",
  },
];

export const CheckItems: CheckBoxItemType[] = [
  { id: "空調服", name: "冷風服をあっせん価格にて販売", checked: false },
  { id: "冷水器", name: "休憩所に冷水機", checked: false },
  { id: "アイスクリーム", name: "アイスの無料配布", checked: false },
  { id: "ドリンク", name: "スポーツドリンク50円", checked: false },
];

export const Radio_experience: RadioItemType[] = [
  {
    value: "ない",
    label: "ない",
  },
  {
    value: "ある",
    label: "ある",
  },
];

export const Radio_YesNo: RadioItemType[] = [
  {
    value: "はい",
    label: "はい",
  },
  {
    value: "いいえ",
    label: "いいえ",
  },
];
export const RelationItem: RadioItemType[] = [
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
];
