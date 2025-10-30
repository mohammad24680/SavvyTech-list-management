import { toast } from "react-toastify";

// Show fixed success message
const SuccessMassage = () => {
  toast.success("عملیات با موفقیت انجام شد");
};

// Show fixed error message if API call fails
const ErrorMassage = (error?: {
  errors?: { key: string; message: string }[];
}) => {
  if (error && error.errors && error.errors.length) {
    error.errors.forEach((item) => {
      toast.error(item.message.toString());
    });
  } else {
    toast.error("عملیات ناموفق");
  }
  return true;
};

export { SuccessMassage, ErrorMassage };
