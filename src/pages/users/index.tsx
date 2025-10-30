import { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, HeaderTitle } from "../../components/card";
import Button from "../../components/button";
import { useGetUsersApiQuery } from "../../store/services/users";
import { useSelector } from "react-redux";
import DeleteUser from "./deletModal";
import UsersList from "./grid";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/reducers/modal";
import AddEditUserModal from "./addEditModal/form";

export interface I_TerminationInfo {
  firstName?: string;
  lastName?: string;
  companyName?: string;
  price?: string;
  phoneNumber?: number | string;
  id?: string;
}

interface IModalState {
  modalName: string;
}

const Users = () => {
  const { modalName } = useSelector(
    (state: { modal: IModalState }) => state.modal,
  );
  const dispatch = useDispatch();
  const [terminationInfo, setTerminationInfo] = useState<I_TerminationInfo>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    companyName: "",
    price: "",
    id: "",
  });
  const { data: listData, isFetching, refetch } = useGetUsersApiQuery();

  useEffect(() => {
    if (modalName === "") {
      setTerminationInfo({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        companyName: "",
        price: "",
        id: "",
      });
    }
  }, [modalName]);
  console.log("🚀 ~ Users ~ modalName:", modalName);

  return (
    <div>
      {modalName === "delete_user" && (
        <DeleteUser data={terminationInfo} refetch={refetch} />
      )}
      {modalName === "user_add_edit_modal" && (
        <AddEditUserModal terminationInfo={terminationInfo} refetch={refetch} />
      )}

      <Card>
        <CardHeader>
          <HeaderTitle>مدیریت کاربران</HeaderTitle>
          <Button
            size="md"
            color="primary"
            onClick={() => {
              dispatch(openModal("user_add_edit_modal"));
            }}
            rightIcon="me-Paper-Plus"
          >
            ایجاد کاربر
          </Button>
        </CardHeader>
        <CardBody>
          <UsersList
            tableData={!isFetching && listData ? listData : []}
            setTerminationInfo={setTerminationInfo}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default Users;
