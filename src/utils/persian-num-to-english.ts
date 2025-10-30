/**
 * Convert Persian or Arabic numbers in a string to English numbers
 * @param num - The input string or number
 * @returns The string with English numbers
 */
const PersianNumToEnglish = (
  num: string | number | null | undefined,
): string => {
  if (num === null || num === undefined) return "";

  let strNum = num.toString();

  const persianNumbers = [
    "۰",
    "۱",
    "۲",
    "۳",
    "۴",
    "۵",
    "۶",
    "۷",
    "۸",
    "۹",
    "٠",
    "١",
    "٢",
    "٣",
    "٤",
    "٥",
    "٦",
    "٧",
    "٨",
    "٩",
  ];
  const englishNumbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  // Replace each Persian/Arabic number with English equivalent
  persianNumbers.forEach((p, i) => {
    strNum = strNum.split(p).join(englishNumbers[i]);
  });

  // Return the converted string if it contains digits, otherwise empty string
  return /[0-9]/.test(strNum) ? strNum : "";
};

export default PersianNumToEnglish;
