import { useEffect, useMemo } from "react";
import {
  useAddUserApiMutation,
  useUpdateUserApiMutation,
} from "../../../store/services/users";
import { removeCommas, addCommas } from "@persian-tools/persian-tools";
import PersianNumToEnglish from "../../../utils/persian-num-to-english";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/reducers/modal";
import initialValuesBase from "./initialValues";
import validationSchemaBase from "./validation";

export interface ITerminationInfo {
  firstName?: string;
  lastName?: string;
  companyName?: string;
  price?: string;
  phoneNumber?: string | number;
  id?: string;
}

interface UseAddEditUserFormProps {
  terminationInfo?: ITerminationInfo;
  refetch: () => void;
}

interface IModalState {
  modalName: string;
}

export const useAddEditUserForm = ({
  terminationInfo,
  refetch,
}: UseAddEditUserFormProps) => {
  const dispatch = useDispatch();
  const { modalName } = useSelector(
    (state: { modal: IModalState }) => state.modal,
  );
  const isEditing = Boolean(terminationInfo?.id);

  const [addUserApi, { isLoading: addLoading, isSuccess: addSuccess }] =
    useAddUserApiMutation();
  const [
    updateUserApi,
    { isLoading: updateLoading, isSuccess: updateSuccess },
  ] = useUpdateUserApiMutation();
  const isLoading = addLoading || updateLoading;
  const isSuccess = addSuccess || updateSuccess;

  // Initial values merged with terminationInfo
  const initialValues = useMemo(() => {
    return {
      ...initialValuesBase,
      ...terminationInfo,
      price:
        terminationInfo?.price !== undefined && terminationInfo?.price !== null
          ? addCommas(String(terminationInfo.price))
          : "",
    };
  }, [terminationInfo]);

  // Validation schema
  const validationSchema = useMemo(() => validationSchemaBase(), []);

  // Submit handler
  const formSubmitHandler = (values: any) => {
    const cleanedValues = {
      ...values,
      price: Number(removeCommas(String(values.price))),
    };
    if (isEditing) {
      updateUserApi({ ...cleanedValues, id: terminationInfo?.id! });
    } else {
      addUserApi(cleanedValues);
    }
  };

  // Close modal & refetch on success
  useEffect(() => {
    if (isSuccess) {
      dispatch(closeModal());
      refetch();
    }
  }, [isSuccess]);

  // Automatically touch all fields if editing and modal is open
  const getTouchedFields = () => {
    if (isEditing && modalName === "user_add_edit_modal") {
      const touched: Record<string, boolean> = {};
      Object.keys(initialValues).forEach((key) => {
        touched[key] = true;
      });
      return touched;
    }
    return {};
  };

  // Handlers for input formatting
  const handleChangePrice = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void,
  ) => {
    const rawValue = PersianNumToEnglish(e.target.value);
    if (rawValue === "") {
      setFieldValue("price", "");
      return;
    }
    const noCommas = removeCommas(rawValue);
    const formatted = addCommas(noCommas);
    setFieldValue("price", formatted);
  };

  const handleChangePhone = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void,
  ) => {
    setFieldValue("phoneNumber", PersianNumToEnglish(e.target.value));
  };

  return {
    initialValues,
    validationSchema,
    formSubmitHandler,
    isLoading,
    isEditing,
    modalName,
    closeModal: () => dispatch(closeModal()),
    getTouchedFields,
    handlers: {
      handleChangePrice,
      handleChangePhone,
    },
  };
};
