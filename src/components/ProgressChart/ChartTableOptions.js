import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function ChartTable() {
  const options = {
    chart: {
      scrollablePlotArea: {
        minWidth: 700,
        minHeight: 500,
        scrollPositionX: 1,
      },
      scrollbar: {
        enabled: true,
      },
    },
    scrollbar: {
      barBackgroundColor: "orange",
    },
    credits: {
      enabled: true,
      href: "https://goit.ua/",
      text: "GOIT.UA",
    },
    title: {
      text: "Burndown Chart (Calendar Team)",
      x: 0,
      style: { fontSize: 14 },
    },
    colors: ["blue", "red"],
    plotOptions: {
      line: {
        lineWidth: 2,
        dataLabels: {
          enabled: true,
          colors: ["blue", "red"],
          y: -6,
          style: { fontSize: "8" },
        },
      },
      tooltip: {
        hideDelay: 1000,
      },
    },

    xAxis: {
      categories: [
        "Day 1",
        "Day 2",
        "Day 3",
        "Day 4",
        "Day 5",
        "Day 6",
        "Day 7",
        "Day 8",
        "Day 9",
        "Day 10",
        "Day 11",
        "Day 12",
      ],
      scrollbar: {
        enabled: true,
      },
    },
    yAxis: {
      scrollbar: {
        enabled: true,
        showFull: false,
      },
      title: {
        text: "Человеко-часы",
      },
      plotLines: [
        {
          value: 0,
          width: 1,
        },
      ],
    },
    tooltip: {
      valueSuffix: " hrs",
      crosshairs: true,
      shared: true,
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "top",
      borderWidth: 0,
    },
    series: [
      {
        name: "Актуальные оставшиеся трудозатраты в часах",
        color: "rgba(255,0,0,0.25)",
        lineWidth: 2,
        style: { fontSize: 12 },
        data: [110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0],
      },
      {
        name: "Запланированные оставшиеся трудозатраты",
        color: "rgba(0,120,200,0.75)",
        marker: {
          radius: 6,
        },
        data: [100, 110, 125, 95, 64, 76, 62, 44, 35, 29, 18, 2],
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
