import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
// import faker from 'faker'
// const data = {
//     labels: ["Red","Blue","Yellow","Green","Purple","Orange"],
//     datasets:[
//         {
//             label:"# of Votes",
//             data: [12,19,3],
//             backgroundColor:[
//                 "rgba(255,99,132,0.2)",
//                 "rgba(255,162,235,0.2)",
//                 "rgba(255,162,235,0.2)"
//             ],
//             borderColor:[
//                 "rgba(255,99,132,0.2)",
//                 "rgba(255,162,235,0.2)",
//                 "rgba(255,162,235,0.2)"           
//             ],
//             borderWidth: 1,
//         },
//     ],
// };


// const options = {
//     scales:{
//         yAxes:[
//             {
//                 ticks:{
//                     beginAtZero: true,
//                 },
//             },
//         ],
//     },
// };


export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [12,9,3,4,5,6,7,8,9,10,14,15],
     backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [12,9,3,4,5,6,7,8,9,10,14,15],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Dataset 3',
      data: [12,9,3,4,5,6,7,8,9,10,14,15],
      backgroundColor: 'rgba(55, 162, 138, 2)',
    },
    {
      label: 'Dataset 4',
      data: [12,9,3,4,5,6,7,8,9,10,10,15],
      backgroundColor: 'rgba(65, 102, 138, 2)',
    },
    {
      label: 'Dataset 5',
      data: [12,9,3,4,5,6,7,8,9,8,7,15],
      backgroundColor: 'rgba(35, 92, 138, 2)',
    }
  ],
};
const BarChart: React.FunctionComponent = () => {
    return <Bar data={data} options={options} />;

}

export default BarChart;

