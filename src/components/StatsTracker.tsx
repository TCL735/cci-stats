import React, { FC, useCallback, useContext, useMemo } from "react";
import { ECharts } from "echarts/core";
import dayjs from "dayjs";
import {
  ECHARTS_SETTINGS,
  NEGATIVE_CURRENCY_TEXT_COLOR,
  NEGATIVE_LINE_COLOR_VALUE,
  POSITIVE_CURRENCY_TEXT_COLOR,
  POSITIVE_LINE_COLOR_VALUE,
  THEME_TEXT_COLOR,
  TOOLTIP_COLOR_VALUE,
} from "../types";
import { EChartsOption, ReactECharts } from "../react-echarts";
import { StatsTableCompact, StatsTableLarge } from "./Table";
import { currency, useWindowDimensions, TableContext } from "../utils";

interface StatsTrackerProps {
  label: string;
}

export const StatsTracker: FC<StatsTrackerProps> = ({ label }) => {
  const { dayTrips } = useContext(TableContext);
  const yearStart = `${dayjs(dayTrips[0][0]).toISOString().slice(0, 10)}`;
  const yearEnd = `${dayjs(dayTrips[dayTrips.length - 1][0])
    .toISOString()
    .slice(0, 10)}`;

  const { width, heightClass } = useWindowDimensions();

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
            hideOverlap: true,
          },
          axisLine: {
            lineStyle: {
              width: 5,
            },
          },
          axisTick: {
            show: true,
            length: 5,
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
        animationDuration: dayTrips.length * 200,
        animationEasing: "cubicInOut",
        series: [],
      } as EChartsOption),
    [dayTrips, label, yearStart, yearEnd],
  );

  const option = useMemo(() => {
    const data: Array<[number, number, string, string]> = dayTrips.reduce(
      (acc, dayTrip, index) => {
        const session = dayTrip[4].reduce(
          (sum, value, i) => sum + value - dayTrip[3][i],
          0,
        );
        if (index === 0) {
          return [
            [
              dayTrip[0],
              session,
              dayTrip[1].join(", "),
              session > 0
                ? POSITIVE_LINE_COLOR_VALUE
                : NEGATIVE_LINE_COLOR_VALUE,
            ],
          ];
        }
        acc.push([
          dayTrip[0],
          session + acc[acc.length - 1][1],
          dayTrip[1].join(", "),
          session > 0 ? POSITIVE_LINE_COLOR_VALUE : NEGATIVE_LINE_COLOR_VALUE,
        ]);

        return acc;
      },
      [] as any,
    );

    return {
      ...optionWithoutSeries,
      visualMap: {
        type: "piecewise",
        pieces: data.reduce((acc, dayData, index) => {
          if (index === 0) {
            acc.push({
              min: 0,
              max: dayData[0],
              color: dayData[3],
            });
          } else {
            acc.push({
              min: acc[acc.length - 1].max,
              max: dayData[0],
              color: dayData[3],
            });
          }
          return acc;
        }, [] as any),
        show: false,
        dimension: 0,
      },
      series: [
        {
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
            offset: [-70, 0],
            color: "#C48125",
          },
          data,
          datasetId: "trips",
        },
      ],
    } as EChartsOption;
  }, [optionWithoutSeries, dayTrips]);

  const onChartReady = useCallback(
    (chart: ECharts) => {
      setTimeout(() => chart.setOption(option), 100);
    },
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [width, option],
  );

  return (
    <>
      <div className="mb-3 mx-3 bg-black">
        <div className={`${heightClass} mt-5`}>
          <ReactECharts
            onChartReady={onChartReady}
            option={optionWithoutSeries}
            settings={ECHARTS_SETTINGS}
            renderer="canvas"
          />
        </div>
        {width >= 1024 ? <StatsTableLarge /> : <StatsTableCompact />}
      </div>
      <a
        href="https://www.casinotears.com/"
        target="_blank"
        rel="noreferrer"
        className={`ml-3 ${THEME_TEXT_COLOR} hover:text-white`}
      >
        <span>Casino Tears Podcast</span>
      </a>
    </>
  );
};
