import { useState, useEffect, useRef } from "react";
import type { Dispatch, SetStateAction } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./GlobalAgGridStyle.css";
import TableSkeleton from "./skeletonTable";
import EmptyState from "./emtpyState";
import type { GridApi, GridReadyEvent } from "ag-grid-community";

interface ITable {
  columnDefs?: any;
  data?: any;
  frameworkComponents?: any;
  onGridReady?: (a: any) => void;
  customOnGridRead?: (a: any) => void;
  gridOptions?: any;
  suppressRowClickSelection?: any;
  rest?: any;
  items?: Array<object>;
  setItems?: Dispatch<SetStateAction<Array<object>>>;
}

const Table = (props: ITable) => {
  const {
    columnDefs,
    data,
    frameworkComponents,
    onGridReady: customOnGridRead = () => false,
    gridOptions,
    suppressRowClickSelection,

    items,
    setItems,
    ...rest
  } = props;
  console.log("🚀 ~ Table ~ data:", data);
  console.log("🚀 ~ Table ~ columnDefs:", columnDefs);
  const gridRef = useRef<AgGridReact>(null);
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  console.log(gridApi?.getDisplayedRowCount());

  const onGridReady = (params: GridReadyEvent) => {
    setGridApi(params.api);
    customOnGridRead(params);
  };

  useEffect(() => {
    if (!gridApi) return;
    if (data && data.length > 0) {
      gridApi.hideOverlay();
    } else {
      gridApi.showNoRowsOverlay();
    }
  }, [data, gridApi]);

  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        columnDefs={columnDefs}
        defaultColDef={{
          resizable: true,
          flex: 1,
          sortable: true,
        }}
        ref={gridRef}
        animateRows={true}
        {...rest}
        onGridReady={onGridReady}
        rowData={data || []}
        enableRtl={true}
        components={{
          ...frameworkComponents,
          customLoadingOverlay: () => <EmptyState />,
          customNoRowsOverlay: (param: any) => {
            const columns = param.api.columnModel.columnDefs.map(
              (item: any) => item.skeletonType,
            );
            return <TableSkeleton rowCount={10} columns={columns} />;
          },
        }}
        loadingOverlayComponent={"customLoadingOverlay"}
        noRowsOverlayComponent={"customNoRowsOverlay"}
        suppressPropertyNamesCheck={true}
        gridOptions={gridOptions}
        suppressDragLeaveHidesColumns={true}
        rowStyle={{
          borderColor: "#e8eaf666",
        }}
        suppressRowHoverHighlight
      />
    </div>
  );
};

export default Table;
