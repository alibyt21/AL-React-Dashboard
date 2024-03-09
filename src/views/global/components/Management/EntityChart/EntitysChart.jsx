import React from "react";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.tooltip.backgroundColor = "rgb(191, 191, 190)";
Chart.defaults.plugins.legend.position = "bottom";
Chart.defaults.plugins.legend.title.display = true;

const legendOpts = {
  display: true,
  labels: {
    usePointStyle: true,
  },
};
const data = {
  labels: [
    "گزارش آمار یک",
    "گزارش آمار یک",
    "گزارش آمار یک",
    "گزارش آمار یک",
    "گزارش آمار یک",
    "گزارش آمار یک",
  ],
  datasets: [
    {
      data: [60, 10, 15, 20, 30, 40],
      backgroundColor: [
        "#2972c8",
        "#eaf1f9",
        "#d4e3f4",
        "#a9c7e9",
        "#7faade",
        "#548ed3",
      ],
      borderWidth: 2,
      radius: "80%",
      cutout: "80%",
    },
  ],
};

function EntitysChart() {
  return (
    <div>
      <h2 className="font-semibold  mt-3 ">تعداد کل موجودیت ها</h2>
      <p className="text-gray-600  mt-3 ">سامانه های اطلاعاتی A</p>

      <Doughnut data={data} options={{ plugins: { legend: legendOpts } }} />
    </div>
  );
}

export default EntitysChart;
