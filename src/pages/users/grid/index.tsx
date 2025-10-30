import Table from "../../../components/table";
import { useDispatch } from "react-redux";
import Icon from "../../../components/tableIcon";
import { openModal } from "../../../store/reducers/modal";
import { toDateString } from "../../../utils/date-formatter";
import type { User } from "../../../store/services/users";
import { addCommas } from "@persian-tools/persian-tools";
import type { I_TerminationInfo } from "..";

interface UsersListProps {
  tableData?: User[];
  setTerminationInfo: (data: I_TerminationInfo) => void;
}

const UsersList = ({ tableData, setTerminationInfo }: UsersListProps) => {
  const dispatch = useDispatch();
  const columnDefs = [
    {
      field: "fullName",
      headerName: "نام و نام خانوادگی",
      skeletonType: "text",
      cellRenderer: "titleRenderer",
      flex: 1.5,
    },
    {
      field: "phoneNumber",
      headerName: "شماره موبایل",
      skeletonType: "text",
      flex: 1.5,
    },
    {
      field: "companyName",
      headerName: "نام شرکت",
      skeletonType: "text",
      flex: 1.5,
    },
    {
      field: "price",
      headerName: `مبلغ (ریال)`,
      skeletonType: "text",
      cellRenderer: "priceRenderer",
      flex: 1.5,
    },
    {
      field: "createdAt",
      headerName: "تاریخ ایجاد",
      skeletonType: "text",
      cellRenderer: "startDateRenderer",
      flex: 1.5,
    },
    {
      field: " ",
      skeletonType: "icon",
      cellRenderer: "controlRenderer",
    },
  ];
  const controlRenderer = ({ data }: { data: any }) => {
    return (
      <div className="flex justify-end items-center">
        <div className="cursor-pointer">
          <Icon
            onClick={() => {
              setTerminationInfo({
                ...data,
                price: String(data.price ?? ""),
              });
              dispatch(openModal("user_add_edit_modal"));
            }}
            icon="me-Edit"
            title="ویرایش کاربر"
            color={data.deleted && "black_60"}
          />
        </div>
        <div>
          <Icon
            icon="me-Delete cursor-pointer"
            title="حذف کاربر"
            onClick={() => {
              dispatch(openModal("delete_user"));
              setTerminationInfo(data);
            }}
          />
        </div>
      </div>
    );
  };

  const startDateRenderer = ({ data }: { data: User }) => {
    return <span>{toDateString(data.createdAt)}</span>;
  };

  const titleRenderer = ({ data }: { data: User }) => {
    return (
      <div className="flex items-center h-full">{`${data.firstName} ${data.lastName}`}</div>
    );
  };
  const priceRenderer = ({ data }: { data: User }) => {
    return (
      <div className="flex items-center h-full">{`${addCommas(
        data.price,
      )}`}</div>
    );
  };

  return (
    <div className="h-[530px] max-h-full">
      <Table
        frameworkComponents={{
          controlRenderer,
          startDateRenderer,
          titleRenderer,
          priceRenderer,
        }}
        columnDefs={columnDefs}
        data={tableData ?? []}
        suppressRowClickSelection
      />
    </div>
  );
};

export default UsersList;
