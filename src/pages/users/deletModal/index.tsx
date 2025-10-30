import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../../../components/modal";
import { closeModal } from "../../../store/reducers/modal";
import Button from "../../../components/button";
import { useDeleteUserApiMutation } from "../../../store/services/users";

interface DeleteUserData {
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | number | null;
  id?: string;
}
interface DeleteUserProps {
  data: DeleteUserData;
  refetch: () => void;
}

interface IModalState {
  modalName: string;
}

const DeleteUser = ({ data, refetch }: DeleteUserProps) => {
  const dispatch = useDispatch();
  const { modalName } = useSelector(
    (state: { modal: IModalState }) => state.modal,
  );
  const [deleteUser, { isLoading, isSuccess }] = useDeleteUserApiMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch(closeModal());
      refetch();
    }
  }, [isSuccess]);

  return (
    <Modal show={modalName === "delete_user"} type="delete" size="md">
      <ModalHeader>
        حذف کاربر {`${data.firstName} ${data.lastName}`}
      </ModalHeader>
      <ModalBody>
        آیا از حذف این کاربر با شماره موبایل {data.phoneNumber} اطمینان دارید؟
      </ModalBody>
      <ModalFooter>
        <Button
          className="ml-3"
          color="danger"
          size={"sm"}
          onClick={() => data.id && deleteUser(data.id)}
          loading={isLoading}
        >
          حذف
        </Button>
        <Button
          color="default-outline"
          size={"sm"}
          onClick={() => dispatch(closeModal())}
          loading={isLoading}
        >
          انصراف
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteUser;
