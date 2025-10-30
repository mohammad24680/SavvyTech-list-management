import { Formik, Form } from "formik";
import { Modal, ModalBody, ModalHeader } from "../../../components/modal";
import FormControl from "../../../components/form";
import Button from "../../../components/button";
import { useAddEditUserForm, type ITerminationInfo } from "./index.hook";

interface AddEditUserModalProps {
  refetch: () => void;
  terminationInfo?: ITerminationInfo;
}

const AddEditUserModal = ({
  refetch,
  terminationInfo,
}: AddEditUserModalProps) => {
  const {
    initialValues,
    validationSchema,
    formSubmitHandler,
    isLoading,
    isEditing,
    modalName,
    closeModal,
    handlers,
    getTouchedFields,
  } = useAddEditUserForm({ terminationInfo, refetch });

  return (
    <Modal
      loading={isLoading}
      show={modalName === "user_add_edit_modal"}
      type="normal"
      size="lg"
    >
      <ModalHeader>
        {isEditing ? "ویرایش کاربر" : "ایجاد کاربر جدید"}
      </ModalHeader>
      <ModalBody>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={formSubmitHandler}
          validateOnMount={true}
          initialTouched={getTouchedFields()}
          enableReinitialize={true}
        >
          {(formik) => {
            return (
              <Form name="AddEditUser">
                <div className="flex flex-wrap leading-none">
                  <div className="grid md:grid-cols-3 w-full mt-4 gap-x-3 gap-y-7">
                    <FormControl
                      loading={isLoading}
                      control="input"
                      type="text"
                      name="firstName"
                      label="نام"
                      formik={formik}
                      variant="outlined"
                      maxLength={50}
                    />
                    <FormControl
                      loading={isLoading}
                      control="input"
                      type="text"
                      name="lastName"
                      label="نام خانوادگی"
                      variant="outlined"
                      maxLength={50}
                    />
                    <FormControl
                      loading={isLoading}
                      control="input"
                      type="text"
                      name="companyName"
                      label="نام شرکت"
                      formik={formik}
                      variant="outlined"
                      maxLength={50}
                    />
                    <FormControl
                      loading={isLoading}
                      control="input"
                      type="text"
                      name="phoneNumber"
                      label="شماره موبایل"
                      variant="outlined"
                      formik={formik}
                      maxLength={11}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handlers.handleChangePhone(e, formik.setFieldValue)
                      }
                    />
                    <FormControl
                      loading={isLoading}
                      control="input"
                      type="text"
                      name="price"
                      label="مبلغ (ریال)"
                      formik={formik}
                      variant="outlined"
                      maxLength={50}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handlers.handleChangePrice(e, formik.setFieldValue)
                      }
                    />
                  </div>

                  <div className="flex justify-end leading-5 mt-5 w-full">
                    <Button
                      color="primary"
                      type="submit"
                      size="sm"
                      className="ml-2"
                      disabled={!formik.isValid || isLoading}
                      loading={isLoading}
                    >
                      ذخیره
                    </Button>
                    <Button
                      color="primary-outline"
                      type="button"
                      loading={isLoading}
                      disabled={isLoading}
                      size="sm"
                      onClick={closeModal}
                    >
                      انصراف
                    </Button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </ModalBody>
    </Modal>
  );
};

export default AddEditUserModal;
