import { removeCommas } from "@persian-tools/persian-tools";
import * as Yup from "yup";

export default () =>
  Yup.object().shape({
    firstName: Yup.string()
      .required("نام الزامی است")
      .min(2, "نام باید حداقل ۲ حرف باشد")
      .test(
        "not-only-numbers",
        "نام نمی‌تواند فقط عدد باشد",
        (value) => !/^\d+$/.test(value || ""),
      ),
    lastName: Yup.string()
      .required("نام خانوادگی الزامی است")
      .min(2, "نام خانوادگی باید حداقل ۲ حرف باشد")
      .test(
        "not-only-numbers",
        "نام خانوادگی نمی‌تواند فقط عدد باشد",
        (value) => !/^\d+$/.test(value || ""),
      ),
    phoneNumber: Yup.string()
      .required("شماره موبایل الزامی است")
      .matches(
        /^[0-9]{10,15}$/,
        "شماره موبایل باید فقط شامل اعداد و 10 رقم باشد",
      ),
    companyName: Yup.string()
      .required("نام شرکت الزامی است")
      .min(2, "نام شرکت باید حداقل ۲ حرف باشد")
      .test(
        "not-only-numbers",
        "نام شرکت نمی‌تواند فقط عدد باشد",
        (value) => !/^\d+$/.test(value || ""),
      ),
    price: Yup.mixed<string | number>()
      .required("قیمت الزامی است")
      .test("only-digits", "قیمت باید فقط شامل اعداد باشد", (value) => {
        if (value === undefined || value === null) return false;

        const cleaned = String(removeCommas(String(value)));
        return /^\d+$/.test(cleaned);
      }),
  });
