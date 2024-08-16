import React, { FC, useCallback, useMemo } from "react";
import { ECharts } from "echarts/core";
import dayjs from "dayjs";
import {
  DayTrip,
  ECHARTS_SETTINGS,
  NEGATIVE_CURRENCY_TEXT_COLOR,
  NEGATIVE_LINE_COLOR_VALUE,
  POSITIVE_CURRENCY_TEXT_COLOR,
  POSITIVE_LINE_COLOR,
  THEME_TEXT_COLOR,
  TOOLTIP_COLOR_VALUE,
} from "../types";
import { EChartsOption, ReactECharts } from "../react-echarts";
import { StatsTableCompact, StatsTableLarge } from "./Table";
import {
  currency,
  getHeightClass,
  useWindowDimensions,
  TenTon2024,
  TableContext,
} from "../utils";

interface StatsTrackerProps {
  label: string;
  lineColor: string;
  yearStart?: string;
  yearEnd?: string;
  dayTrips: Array<DayTrip>;
}

export const StatsTracker: FC<StatsTrackerProps> = ({
  dayTrips,
  label,
  lineColor,
  yearStart = `${dayjs(dayTrips[0][0]).toISOString().slice(0, 10)}`,
  yearEnd = `${dayjs(dayTrips[dayTrips.length - 1][0])
    .toISOString()
    .slice(0, 10)}`,
}) => {
  const { height, width } = useWindowDimensions();

  const optionWithoutSeries = useMemo(
    () =>
      ({
        title: {
          left: 0,
          height: 100,
          show: true,
          text: label,
          textStyle: {
            color: "#C48125",
          },
        },
        axisPointer: {
          triggerTooltip: true,
        },
        tooltip: {
          trigger: "axis",
          show: true,
          axisPointer: {
            type: "cross",
            label: { show: false },
          },
          backgroundColor: TOOLTIP_COLOR_VALUE,
          formatter: (params: any) => {
            const dataIndex = params[0].dataIndex;
            let content = `<div class="${THEME_TEXT_COLOR} m-[-1rem] max-w-[30rem] p-3 text-left selet-none whitespace-pre-wrap break-all">`;
            if (Array.isArray(params) && params.length) {
              content += `<b>Date: ${dayjs(params[0].data[0]).format(
                "MMM DD, YYYY",
              )}</b><br/><span class="${
                Number(
                  dayTrips[dataIndex][4].reduce(
                    (sum, amount, index) =>
                      sum + amount - dayTrips[dataIndex][3][index],
                    0,
                  ),
                ) < 0
                  ? NEGATIVE_CURRENCY_TEXT_COLOR
                  : POSITIVE_CURRENCY_TEXT_COLOR
              }">Win/Loss: ${dayTrips[dataIndex][4]
                .map(
                  (amount, index) =>
                    `<span class="${
                      amount - dayTrips[dataIndex][3][index] < 0
                        ? NEGATIVE_CURRENCY_TEXT_COLOR
                        : POSITIVE_CURRENCY_TEXT_COLOR
                    }">${currency.format(amount)}  </span>`,
                )
                .join("")}</span><br/><b class="${
                params[0].data[1] < 0
                  ? NEGATIVE_CURRENCY_TEXT_COLOR
                  : POSITIVE_CURRENCY_TEXT_COLOR
              }">YTD: ${currency.format(
                params[0].data[1],
              )}</b><br/><span>Location: ${dayTrips[dataIndex][1]
                .map(
                  (location, index) =>
                    `<span class="${
                      dayTrips[dataIndex][4][index] -
                        dayTrips[dataIndex][3][index] <
                      0
                        ? NEGATIVE_CURRENCY_TEXT_COLOR
                        : POSITIVE_CURRENCY_TEXT_COLOR
                    }">${location}${
                      index < dayTrips[dataIndex][2].length - 1 ? ", " : ""
                    }</span>`,
                )
                .join("")}</span>`;
            }
            content += "</div>";
            return content;
          },
        },
        grid: {
          left: 80,
          right: 5,
        },
        xAxis: {
          type: "time",
          axisLabel: {
            rotate: 45,
            formatter: (date: number) => dayjs(date).format("MMM DD"),
            color: "#C48125",
          },
          axisLine: {
            lineStyle: {
              width: 5,
            },
          },
          axisTick: {
            lineStyle: {
              color: "#C48125",
              width: 1,
            },
          },
          min: (value) => dayjs(yearStart).subtract(1, "day").valueOf(),
          max: (value) => dayjs(yearEnd).add(1, "day").valueOf(),
        },
        yAxis: {
          type: "value",
          name: "USD $",
          nameLocation: "middle",
          nameGap: 100,
          axisLabel: {
            formatter: (money: number) => currency.format(money),
            color: "#C48125",
          },
          splitLine: {
            lineStyle: {
              width: 1,
              type: "solid",
            },
          },
        },
        visualMap: {
          type: "continuous",
          show: false,
          dimension: 1,
          range: [1, Infinity],
          target: {
            inRange: {
              color: POSITIVE_LINE_COLOR,
            },
            outOfRange: {
              color: NEGATIVE_LINE_COLOR_VALUE,
            },
          },
        },
        animationDuration: dayTrips.length * 1000,
        animationEasing: "cubicInOut",
        series: [],
      } as EChartsOption),
    [dayTrips, label, yearStart, yearEnd],
  );

  const option = useMemo(
    () =>
      ({
        ...optionWithoutSeries,
        series: [
          {
            color: lineColor,
            type: "line",
            emphasis: {
              focus: "series",
            },
            labelLayout: {
              moveOverlap: "shiftY",
            },
            endLabel: {
              show: true,
              // @ts-ignore
              formatter: (params: any) => {
                if (params) {
                  return `${currency.format(params.value[1])}`;
                }
                return "";
              },
              valueAnimation: true,
              offset: [-80, 0],
              color: "#C48125",
            },
            data: dayTrips.reduce((acc, dayTrip, index) => {
              if (index === 0) {
                return [
                  [
                    dayTrip[0],
                    dayTrip[4].reduce(
                      (sum, value, i) => sum + value - dayTrip[3][i],
                      0,
                    ),
                    dayTrip[1].join(", "),
                  ],
                ];
              }
              acc.push([
                dayTrip[0],
                dayTrip[4].reduce(
                  (sum, value, i) => sum + value - dayTrip[3][i],
                  0,
                ) + acc[acc.length - 1][1],
                dayTrip[1].join(", "),
              ]);

              return acc;
            }, [] as any),
            datasetId: "trips",
          },
        ],
      } as EChartsOption),
    [optionWithoutSeries, dayTrips, lineColor],
  );

  const onChartReady = useCallback(
    (chart: ECharts) => {
      setTimeout(() => chart.setOption(option), 100);
    },
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [width, height, option],
  );

  return (
    <div className="mb-3 mx-3 bg-black">
      <div className={`${getHeightClass(height)} mt-5`}>
        <ReactECharts
          onChartReady={onChartReady}
          option={optionWithoutSeries}
          settings={ECHARTS_SETTINGS}
          renderer="canvas"
        />
      </div>
      <TableContext.Provider value={TenTon2024}>
        {width >= 1024 ? <StatsTableLarge /> : <StatsTableCompact />}
      </TableContext.Provider>
    </div>
  );
};
