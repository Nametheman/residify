import React from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";

const EstateOverview = () => {
  const series = [
    {
      name: "",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "area",
      //   events: {
      //     click: function(chart, w, e) {
      //       // console.log(chart, w, e)
      //     }
      //   },
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: "3",
    },
    colors: ["#002DCC"],
    plotOptions: {
      bar: {
        columnWidth: "25%",
        distributed: true,
        borderRadiusTopLeft: 5,
        borderRadiusTopRight: 5,
      },
    },
    grid: {
      row: {
        colors: ["#fff", "#fff", "#fff"],
      },
      column: {
        colors: ["#fff", "#fff", "#fff"],
      },
    },
    xaxis: {
      categories: [
        "Harmony",
        "Bolu",
        "Albert",
        "Unilag",
        "Harmony",
        "Emmanuel",
        "Joshua",
      ],
    },
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <LineChartWrapper>
      <h3>Estate Overview</h3>
      <Chart options={options} series={series} width={690} height={300} />
    </LineChartWrapper>
  );
};

export default EstateOverview;

const LineChartWrapper = styled.div`
  background: #fff;
  border-radius: 20px;

  h3 {
    font-size: 20px;
    margin: 10px 0 0 10px;
  }
`;
