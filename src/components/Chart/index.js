import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

import { Container } from "./styles";

const MyChart = (props) => {
  const dataChart = {
    labels: [
      "Temp/feeling temp",
      "Temp min/max",
      "% Humidity",
      "Wind speed/degree",
    ],
    datasets: [
      {
        label: "+0°C",
        data: props.dataPlus,
        backgroundColor: [
          "rgba(255, 99, 132, .2)",
          "rgba(255, 99, 132, .2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],

        borderColor: "rgba(0,0,0, .5)",

        borderWidth: 1,
      },
      {
        label: "-0°C",
        data: props.dataMinus,
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <Bar
        data={dataChart}
        width={300}
        height={300}
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

export default MyChart;
