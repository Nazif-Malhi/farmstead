import React from "react";

import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJs,
  BarController,
  BarElement,
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
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40],
      borderRadius: 12,
      borderSkipped: false,
      barThickness: "10",
      backgroundColor: [
        "white",
        // "rgba(255, 99, 132, 0.2)",
        // "rgba(255, 159, 64, 0.2)",
        // "rgba(255, 205, 86, 0.2)",
        // "rgba(75, 192, 192, 0.2)",
        // "rgba(54, 162, 235, 0.2)",
        // "rgba(153, 102, 255, 0.2)",
        // "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "white",

        // "rgb(255, 99, 132)",
        // "rgb(255, 159, 64)",
        // "rgb(255, 205, 86)",
        // "rgb(75, 192, 192)",
        // "rgb(54, 162, 235)",
        // "rgb(153, 102, 255)",
        // "rgb(201, 203, 207)",
      ],
      //   borderWidth: 2,
    },
  ],
};
const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    tooltip: {
      enable: false,
    },
    legend: false,
  },
  scales: {
    y: {
      ticks: { color: "white", beginAtZero: true },

      grid: {
        drawOnChartArea: false,
        drawBorder: false,
        border: false,
      },
      border: {
        display: false,
      },
    },
    x: {
      //   ticks: { color: "white", beginAtZero: true },
      ticks: {
        display: false,
      },
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

const BarChart = () => {
  return (
    <div style={{ width: "100%", height: "100%", marginTop: "20px" }}>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default BarChart;
