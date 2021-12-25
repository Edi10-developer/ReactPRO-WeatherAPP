import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

import { Container } from "../styles";

const ChartBar = (props) => {
  const dataChart = {
    labels: props.labels,
    datasets: props.datasets,
  };

  return (
    <Container>
      <Bar
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
      />
    </Container>
  );
};

export default ChartBar;
