import moment from "jalali-moment";

export interface DateObject {
  year: number;
  month: number;
  day: number;
}

const pad = (n: number) => n.toString().padStart(2, "0");

export const toDateObject = (date?: string | number): DateObject => {
  const m = date ? moment(date) : moment();
  const [year, month, day] = m.format("jYYYY/jM/jD").split("/").map(Number);
  return { year, month, day };
};

export const toDateString = (date?: string | number): string => {
  const { year, month, day } = toDateObject(date);
  return `${year}/${pad(month)}/${pad(day)}`;
};

export const objectToTimeStamp = (date: DateObject): number =>
  moment(
    `${date.year}/${pad(date.month)}/${pad(date.day)}`,
    "jYYYY/jM/jD",
  ).valueOf();
