import React, { ComponentProps, FC } from "react";
import {
  TableRowDataType,
  HandleConsecutiveRepeatValueAs,
  THEME_TEXT_COLOR,
} from "../types";

interface TableColumnProps {
  formatter?: (v: TableRowDataType) => string;
  handleConsecutiveRepeatValueAs: HandleConsecutiveRepeatValueAs;
  title: string;
  headerRows?: TableRowDataType[];
  headerRowColors?: string[];
  rowData: TableRowDataType[];
  rowDataColors: string[];
  footerRows?: TableRowDataType[];
  footerRowColors?: string[];
}

// data is received in ascending order
export const TableColumn: FC<TableColumnProps> = ({
  formatter = (v) => `${v}`,
  handleConsecutiveRepeatValueAs,
  title,
  headerRows = [],
  headerRowColors = [],
  rowData,
  rowDataColors: originalRowDataColors,
  footerRows = [],
  footerRowColors = [],
}) => {
  const valuesToPrint: TableRowDataType[] = [];
  const rowDataColors = [...originalRowDataColors];
  rowDataColors.reverse();

  let previousValue: TableRowDataType;
  if (
    handleConsecutiveRepeatValueAs === "first" ||
    handleConsecutiveRepeatValueAs === "always"
  ) {
    previousValue = rowData[0];
    valuesToPrint.push(previousValue);
    for (let i = 1; i < rowData.length; i += 1) {
      valuesToPrint.push(
        rowData[i] !== previousValue
          ? rowData[i]
          : handleConsecutiveRepeatValueAs === "always"
          ? rowData[i]
          : "",
      );
      previousValue = rowData[i];
    }
    valuesToPrint.reverse();
  } else if (handleConsecutiveRepeatValueAs === "last") {
    previousValue = rowData[rowData.length - 1];
    valuesToPrint.push(previousValue);
    for (let i = rowData.length - 2; i >= 0; i -= 1) {
      valuesToPrint.push(rowData[i] !== previousValue ? rowData[i] : "");
      previousValue = rowData[i];
    }
  }

  return (
    <div className="flex flex-col justify-start items-stretch text-center">
      <div
        className={`border-b border-solid border-gray100 h-4 pt-4 pb-8 leading-4 font-semibold text-ellipsis whitespace-nowrap overflow-hidden ${THEME_TEXT_COLOR}`}
      >
        {" "}
        {title}
      </div>
      {headerRows.map((value, index) => (
        <div
          key={`${title}-header-${index}`}
          className={`border-b border-solid border-gray100 h-4 pt-4 pb-8 leading-4 font-semibold text-ellipsis whitespace-nowrap overflow-hidden ${headerRowColors[index]}`}
        >
          {formatter(value)}
        </div>
      ))}
      {valuesToPrint.map((value, index) => (
        <div
          key={`${title}-row-${index}`}
          className={`border-b border-solid border-gray100 last-of-type:border-none h-4 pt-4 pb-8 leading-4 text-ellipsis overflow-hidden ${rowDataColors[index]}`}
        >
          <span className="">{formatter(value)}</span>
        </div>
      ))}
      {footerRows.map((value, index) => (
        <div
          key={`${title}-footer-${index}`}
          className={`border-b border-solid border-gray100 h-4 pt-4 pb-8 leading-4 text-ellipsis whitespace-nowrap overflow-hidden ${footerRowColors[index]}`}
        >
          {formatter(value)}
        </div>
      ))}
    </div>
  );
};

export const TableContainer: FC<ComponentProps<"div">> = ({ children }) => {
  return (
    <div className="grid grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)_minmax(0,_4fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_4fr)_minmax(0,_2fr)_minmax(0,_1fr)]">
      {children}
    </div>
  );
};
