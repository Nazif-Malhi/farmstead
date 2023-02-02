import React from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      labels: "Expends",
      data: [4, 2, 6, 4, 7, 3, 2],
      fill: true,
      borderColor: "rgb(203, 12, 159)",
      tension: 0.5,
      backgroundColor: "rgb(203, 12, 159, .2)",
    },
    {
      labels: "Return",
      data: [5, 3, 5, 8, 2, 4, 7],
      fill: true,
      borderColor: "rgb(67, 62, 117)",
      tension: 0.5,
      backgroundColor: "rgb(67, 62, 117, .2)",
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  animations: {
    tension: {
      duration: 5000,
      easing: "linear",
      from: 1,
      to: 0,
      loop: true,
    },
  },
  interaction: {
    mode: "index",
    intersect: "false",
    axis: "x",
  },
  plugins: {
    tooltip: {
      enable: true,
    },
    legend: false,
  },
  scales: {
    y: {
      grid: {
        drawBorder: false,
      },
      border: {
        display: true,
        dash: [10],
      },
    },
    x: {
      grid: {
        drawOnChartArea: false,
        drawBorder: false,
        border: false,
      },
      border: {
        display: false,
      },
    },
  },
};

const LineChart = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Chart type="line" data={data} options={options} />
    </div>
  );
};

export default LineChart;
