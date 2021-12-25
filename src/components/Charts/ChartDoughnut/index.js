import React from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

import { ContainerDoughnut } from "../styles";

const ChartDoughnut = (props) => {
  const dataChart = {
    labels: props.labels,
    datasets: props.datasets,
  };

  return (
    <ContainerDoughnut>
      <Doughnut
        data={dataChart}
        width={200}
        height={200}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
        style={props.style}
      />
    </ContainerDoughnut>
  );
};

export default ChartDoughnut;
