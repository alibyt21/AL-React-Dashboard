import React from "react";
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chartjs.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "",
      data: [60, 10, 15, 20, 30, 40],
      backgroundColor: [
        "#2972c8",
        "#eaf1f9",
        "#d4e3f4",
        "#a9c7e9",
        "#7faade",
        "#548ed3",
      ],
      animateRotate: false
    },
  ],
};



function EntitysChart() {
  return (
    <div>
      <h2>تعداد کل موجودیت ها</h2>
      <div className="w-[30%] h-[30%] ">
        <Doughnut data={data}/>
      </div>
    </div>
  );
}

export default EntitysChart;
