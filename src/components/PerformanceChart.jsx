import ReactApexChart from "react-apexcharts";

const PerformanceChart = () => {
  const chartOptions = {
    // Define your chart options here
    chart: {
      type: "line",
      offsetX: -15,
      offsetY: 15,
      height: '100%',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: "smooth",
    },
    series: [
      { name: "Your Teams Performance", data: [30, 40, 35, 50, 49, 60, 70, 91, 125] },
      { name: "Other Teams Average", data: [25, 7, 30, 35, 19, 25, 60, 80, 70] },
    ],
    colors: ["#000099", "#FFAE19"],
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
      ],
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "top",
      horizontalAlign: "left",
      floating: false,
      fontSize: "14px",
      fontFamily: "Helvetica, Arial",
      fontWeight: 500,
      width: '50px',
      height: '50px',
      customLegendItems: [],
      offsetX: -15,
      offsetY: 5,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 6,
        shape: "square", // circle, square, line, plus, cross
        strokeWidth: 2,
        fillColors: "#000099",
        radius: 2,
        offsetX: -1,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 0,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    }
  };

  return (
    <div className="w-full p-7 rounded-lg shadow-md">
      <h2 className="font-bold text-3xl">Your Teams Performance</h2>
      <p className="text-gray-500 font-normal pb-5">
        Here is a list of your task
      </p>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default PerformanceChart;
