import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {
  getCurrentSprintSelector,
  getAllDayInSprintSelector,
  getWastedHoursInTasksSelector,
  getPlanedTimeInSprintSelector,
} from "../../../../redux/sprints/sprintsSelectors";
import { useSelector } from "react-redux";
export default function ChartTable() {
  const currentSprint = useSelector(getCurrentSprintSelector);
  const days = useSelector(getAllDayInSprintSelector);
  const wastedTimeInAllTask = useSelector(getWastedHoursInTasksSelector);
  const plannedTime = useSelector(getPlanedTimeInSprintSelector);

  const timeSpendedInAllTasks = wastedTimeInAllTask.reduce((acc, el) => {
    el.forEach((elem, indx) => {
      acc[indx] = (acc[indx] || 0) + elem;
    });
    return acc;
  }, []);
  const middleWorkingInDay = days.reduce((acc, el, ind) => {
    acc.push(Math.floor(plannedTime - (plannedTime / days.length) * ind));
    return acc;
  }, []);

  function actualWork(plannedTime) {
    let timeSpendedInDay = timeSpendedInAllTasks.reduce((acc, el, ind) => {
      let afterWork = plannedTime - el;
      acc.push(afterWork);
      plannedTime = afterWork;
      return acc;
    }, []);
    return timeSpendedInDay;
  }

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
      text: `Спринт: ${currentSprint.name}`,
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
      categories: days,
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
        text: "Людино-години",
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
        name: "Актуальні трудозатрати в годинах",
        color: "rgba(255,0,0,0.25)",
        lineWidth: 2,
        style: { fontSize: 12 },
        data: actualWork(plannedTime),
      },
      {
        name: "Заплановані трудозатрати",
        color: "rgba(0,120,200,0.75)",
        marker: {
          radius: 6,
        },
        data: middleWorkingInDay,
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
