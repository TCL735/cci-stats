import React, { FC, useContext } from "react";
import {
  DayTrip,
  HandleConsecutiveRepeatValueAs,
  NEGATIVE_CURRENCY_TEXT_COLOR,
  NEUTRAL_TEXT_COLOR,
  POSITIVE_CURRENCY_TEXT_COLOR,
  THEME_TEXT_COLOR,
  TableRowDataType,
} from "../../types";
import {
  Table2025Context,
  currencyFormatter,
  dateFormatter,
  getRewardsProgram,
} from "../../utils";

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
    <div className="flex flex-col justify-start items-stretch text-center h-auto">
      <div
        className={`border-b border-solid border-gray100 h-4 pt-4 pb-8 leading-4 font-semibold text-ellipsis overflow-hidden ${THEME_TEXT_COLOR}`}
      >
        {" "}
        {title}
      </div>
      {headerRows.map((value, index) => (
        <div
          key={`${title}-header-${index}`}
          className={`border-b border-solid border-gray100 h-4 pt-4 pb-8 leading-4 font-semibold text-ellipsis overflow-hidden ${headerRowColors[index]}`}
        >
          {formatter(value)}
        </div>
      ))}
      {valuesToPrint.map((value, index) => (
        <div
          key={`${title}-row-${index}`}
          className={`border-b border-solid border-gray100 h-4 pt-4 pb-14 leading-4 text-ellipsis overflow-hidden ${rowDataColors[index]}`}
        >
          <span className="">{formatter(value)}</span>
        </div>
      ))}
      {footerRows.map((value, index) => (
        <div
          key={`${title}-footer-${index}`}
          className={`border-b border-solid border-gray100 h-4 pt-4 pb-8 leading-4 text-ellipsis overflow-hidden ${footerRowColors[index]}`}
        >
          {formatter(value)}
        </div>
      ))}
    </div>
  );
};

export const StatsTableLarge: FC = () => {
  const {
    locationColors,
    totalWinLoss,
    tripBuyIns,
    tripColorUps,
    tripDates,
    tripGameTypes,
    tripFeatureBets,
    tripLocations,
    tripCrew,
    tripDealers,
    tripFloorBoxes,
    tripPrograms,
    tripResults,
    tripNotes,
    wholeTripColors,
  } = useContext(Table2025Context);

  const allGreens = Array.from(
    locationColors,
    (color) => POSITIVE_CURRENCY_TEXT_COLOR,
  );

  return (
    //                             Date            Program        Location       Game Type      Feature Bet    Buy In         Color          W/L            Crew           Dealers        Floor/Box      Notes
    <div className="grid grid-cols-[minmax(0,_2fr)_minmax(0,_1fr)_minmax(0,_2fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_4fr)]">
      <TableColumn
        formatter={dateFormatter}
        handleConsecutiveRepeatValueAs="last"
        title="Date"
        headerRows={[""]}
        headerRowColors={[""]}
        rowData={tripDates}
        rowDataColors={wholeTripColors}
      />
      <TableColumn
        handleConsecutiveRepeatValueAs="always"
        title="Program"
        headerRows={["Total"]}
        headerRowColors={[""]}
        rowData={tripPrograms}
        rowDataColors={locationColors}
      />
      <TableColumn
        handleConsecutiveRepeatValueAs="always"
        title="Location"
        headerRows={[""]}
        headerRowColors={[""]}
        rowData={tripLocations}
        rowDataColors={locationColors}
      />
      <TableColumn
        handleConsecutiveRepeatValueAs="always"
        title="Game Type"
        headerRows={[""]}
        headerRowColors={[THEME_TEXT_COLOR]}
        rowData={tripGameTypes}
        rowDataColors={locationColors}
      />
      <TableColumn
        handleConsecutiveRepeatValueAs="always"
        title="Feature Bet"
        headerRows={[""]}
        headerRowColors={[THEME_TEXT_COLOR]}
        rowData={tripFeatureBets}
        rowDataColors={locationColors}
      />
      <TableColumn
        formatter={currencyFormatter}
        handleConsecutiveRepeatValueAs="always"
        title="Buy In"
        headerRows={[""]}
        headerRowColors={[""]}
        rowData={tripBuyIns}
        rowDataColors={allGreens}
      />
      <TableColumn
        formatter={currencyFormatter}
        handleConsecutiveRepeatValueAs="always"
        title="Color"
        headerRows={[""]}
        headerRowColors={[""]}
        rowData={tripColorUps}
        rowDataColors={locationColors}
      />
      <TableColumn
        formatter={currencyFormatter}
        handleConsecutiveRepeatValueAs="always"
        rowDataColors={locationColors}
        title="W/L"
        headerRows={[totalWinLoss]}
        headerRowColors={[
          totalWinLoss >= 0
            ? POSITIVE_CURRENCY_TEXT_COLOR
            : NEGATIVE_CURRENCY_TEXT_COLOR,
        ]}
        rowData={tripResults}
      />
      <TableColumn
        handleConsecutiveRepeatValueAs="always"
        title="Crew"
        headerRows={[""]}
        headerRowColors={[""]}
        rowData={tripCrew}
        rowDataColors={locationColors}
      />
      <TableColumn
        handleConsecutiveRepeatValueAs="always"
        title="Dealers"
        headerRows={[""]}
        headerRowColors={[""]}
        rowData={tripDealers}
        rowDataColors={locationColors}
      />
      <TableColumn
        handleConsecutiveRepeatValueAs="always"
        title="Floor/Box"
        headerRows={[""]}
        headerRowColors={[""]}
        rowData={tripFloorBoxes}
        rowDataColors={locationColors}
      />
      <TableColumn
        handleConsecutiveRepeatValueAs="always"
        title="Notes"
        headerRows={[""]}
        headerRowColors={[""]}
        rowData={tripNotes}
        rowDataColors={locationColors}
      />
    </div>
  );
};

const getSessionClassName = (sessions: number): string => {
  switch (sessions) {
    case 1:
      return "w-[100%]";
    case 2:
      return "w-[50%]";
    case 3:
      return "w-[30%]";
    case 4:
      return "w-[25%]";
    default:
      return "w-[20%]";
  }
};
export const StatsTableCompact: FC = () => {
  const state = useContext(Table2025Context);
  const { totalWinLoss, dayTrips } = state;

  const sessionColors = dayTrips.map((dayTrip: DayTrip) => {
    return dayTrip.colorUp.map((colorUp: number, index: number) =>
      colorUp >= dayTrip.buyIn[index]
        ? POSITIVE_CURRENCY_TEXT_COLOR
        : NEGATIVE_CURRENCY_TEXT_COLOR,
    );
  });

  const tripColors = dayTrips.map((dayTrip: DayTrip) => {
    const total = dayTrip.colorUp.reduce(
      (total, colorUp, index) => (total += colorUp - dayTrip.buyIn[index]),
      0,
    );

    return total >= 0
      ? POSITIVE_CURRENCY_TEXT_COLOR
      : NEGATIVE_CURRENCY_TEXT_COLOR;
  });

  const compactTableDetailRowClassName =
    "flex flex-row justify-start h-auto text-left";
  const compactTableDetailFieldClassName = `w-[35%] font-bold ${THEME_TEXT_COLOR}`;
  const compactTableDetailDataPointsClassName =
    "flex flex-row justify-start gap-x-3 w-[65%]";

  return (
    <div
      className={`flex flex-col-reverse border-b border-solid border-gray100`}
    >
      {dayTrips.map((dayTrip, tripNumber) => (
        <div
          key={dayTrip.date}
          className={`flex flex-col border-t border-solid border-gray100`}
        >
          <div className={compactTableDetailRowClassName}>
            <span className={compactTableDetailFieldClassName}>Date</span>
            <span
              className={`${compactTableDetailDataPointsClassName} ${tripColors[tripNumber]}`}
            >
              {dateFormatter(dayTrip.date)}
            </span>
          </div>
          <div className={compactTableDetailRowClassName}>
            <span className={compactTableDetailFieldClassName}>Program</span>
            <span className={compactTableDetailDataPointsClassName}>
              {dayTrip.location.map((location, index) => (
                <span
                  key={`program-${index}`}
                  className={`${getSessionClassName(
                    dayTrip.location.length,
                  )} ${NEUTRAL_TEXT_COLOR}`}
                >
                  {getRewardsProgram(location)}
                </span>
              ))}
            </span>
          </div>
          <div className={compactTableDetailRowClassName}>
            <span className={compactTableDetailFieldClassName}>Location</span>
            <span className={compactTableDetailDataPointsClassName}>
              {dayTrip.location.map((location, index) => (
                <span
                  key={`location-${index}`}
                  className={`${getSessionClassName(dayTrip.location.length)} ${
                    sessionColors[tripNumber][index]
                  }`}
                >
                  {location}
                </span>
              ))}
            </span>
          </div>
          <div className={compactTableDetailRowClassName}>
            <span className={compactTableDetailFieldClassName}>Game Type</span>
            <span className={compactTableDetailDataPointsClassName}>
              {dayTrip.gameType.map((gameType, index) => (
                <span
                  key={`gameType-${index}`}
                  className={`${getSessionClassName(
                    dayTrip.gameType.length,
                  )} ${NEUTRAL_TEXT_COLOR}`}
                >
                  {gameType}
                </span>
              ))}
            </span>
          </div>
          <div className={compactTableDetailRowClassName}>
            <span className={compactTableDetailFieldClassName}>
              Feature Type
            </span>
            <span className={compactTableDetailDataPointsClassName}>
              {dayTrip.featureBet.map((featureBet, index) => (
                <span
                  key={`featureBet-${index}`}
                  className={`${getSessionClassName(
                    dayTrip.featureBet.length,
                  )} ${NEUTRAL_TEXT_COLOR}`}
                >
                  {featureBet}
                </span>
              ))}
            </span>
          </div>
          <div className={compactTableDetailRowClassName}>
            <span className={compactTableDetailFieldClassName}>Buy In</span>
            <span className={compactTableDetailDataPointsClassName}>
              {dayTrip.buyIn.map((buyIn, index) => (
                <span
                  key={`buyIn-${index}`}
                  className={`${getSessionClassName(
                    dayTrip.buyIn.length,
                  )} ${POSITIVE_CURRENCY_TEXT_COLOR}`}
                >
                  {currencyFormatter(buyIn)}
                </span>
              ))}
            </span>
          </div>
          <div className={compactTableDetailRowClassName}>
            <span className={compactTableDetailFieldClassName}>Color</span>
            <span className={compactTableDetailDataPointsClassName}>
              {dayTrip.colorUp.map((colorUp, index) => (
                <span
                  key={`color-${index}`}
                  className={`${getSessionClassName(dayTrip.location.length)} ${
                    sessionColors[tripNumber][index]
                  }`}
                >
                  {currencyFormatter(colorUp)}
                </span>
              ))}
            </span>
          </div>
          <div className={compactTableDetailRowClassName}>
            <span className={compactTableDetailFieldClassName}>Win/Loss</span>
            <span className={compactTableDetailDataPointsClassName}>
              {dayTrip.colorUp.map((colorUp, index) => (
                <span
                  key={`winLoss-${index}`}
                  className={`${getSessionClassName(dayTrip.location.length)} ${
                    sessionColors[tripNumber][index]
                  }`}
                >
                  {currencyFormatter(colorUp - dayTrip.buyIn[index])}
                </span>
              ))}
            </span>
          </div>
          <div className={compactTableDetailRowClassName}>
            <span className={compactTableDetailFieldClassName}>Crew</span>
            <span className={compactTableDetailDataPointsClassName}>
              {dayTrip.crew.map((playedWith, index) => (
                <span
                  key={`crew-${index}`}
                  className={`${getSessionClassName(
                    dayTrip.location.length,
                  )} ${NEUTRAL_TEXT_COLOR}`}
                >
                  {playedWith}
                </span>
              ))}
            </span>
          </div>
          <div className={compactTableDetailRowClassName}>
            <span className={compactTableDetailFieldClassName}>Dealers</span>
            <span className={compactTableDetailDataPointsClassName}>
              {dayTrip.dealers.map((dealers, index) => (
                <span
                  key={`dealers-${index}`}
                  className={`${getSessionClassName(
                    dayTrip.location.length,
                  )} ${NEUTRAL_TEXT_COLOR}`}
                >
                  {dealers}
                </span>
              ))}
            </span>
          </div>
          <div className={compactTableDetailRowClassName}>
            <span className={compactTableDetailFieldClassName}>Floor/Box</span>
            <span className={compactTableDetailDataPointsClassName}>
              {dayTrip.floorBox.map((floorBox, index) => (
                <span
                  key={`floorBox-${index}`}
                  className={`${getSessionClassName(
                    dayTrip.location.length,
                  )} ${NEUTRAL_TEXT_COLOR}`}
                >
                  {floorBox}
                </span>
              ))}
            </span>
          </div>
          <div className={compactTableDetailRowClassName}>
            <span className={compactTableDetailFieldClassName}>Notes</span>
            <span className={compactTableDetailDataPointsClassName}>
              {dayTrip.notes.map((notes, index) => (
                <span
                  key={`notes-${index}`}
                  className={`${getSessionClassName(
                    dayTrip.location.length,
                  )} ${NEUTRAL_TEXT_COLOR}`}
                >
                  {notes}
                </span>
              ))}
            </span>
          </div>
        </div>
      ))}
      <div className={`flex flex-col border-t border-solid border-gray100`}>
        <div className={compactTableDetailRowClassName}>
          <span className={compactTableDetailFieldClassName}>
            Total Win/Loss
          </span>
          <span className={compactTableDetailDataPointsClassName}>
            <span
              key={`winLoss-total`}
              className={`${getSessionClassName(1)} ${
                totalWinLoss >= 0
                  ? POSITIVE_CURRENCY_TEXT_COLOR
                  : NEGATIVE_CURRENCY_TEXT_COLOR
              }`}
            >
              {currencyFormatter(totalWinLoss)}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
