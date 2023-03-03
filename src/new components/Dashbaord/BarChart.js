import React, { useState } from "react";
import Chart from "react-apexcharts";

const BarChart = ({data, categories}) => {
  //const [barColor, setBarColor] = useState("#F2EFFF");
  const series = [
    {
      data: data,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "bar",
      events: {
        mouseMove: function (chart, w, e) {},
      },
    },

    colors: "#F2EFFF",
    plotOptions: {
      bar: {
        columnWidth: "50%",
        distributed: false,
        borderRadius: 10,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          fontSize: "10px",
        },
      },
    },
    dropShadow: {
      enabled: true,
      top: 0,
      left: 0,
      blur: 3,
      opacity: 0.5,
    },

  };

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      width={695}
      height={250}
    />
  );
};

export default BarChart;
