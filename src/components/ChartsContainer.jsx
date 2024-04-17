import Chart from "react-google-charts";

export const data = [
  ["Task", "Hours per day"],
  ["Leaves used", 80],
  ["Free days", 20]
];

export const options = {
  title: "Leave"
};

const ChartsContainer = () => {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"120%"}
      height={"500px"}
    />
  )
}

export default ChartsContainer