import { Bar } from 'react-chartjs-2';
import styled from "@emotion/styled";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Country } from '../types';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

interface Props{
  countries:Country[];
}

export const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };

const ChartWrapper = styled.div`
max-width: 700px;
margin: 0 auto;
`;

const BarChart: React.FunctionComponent<Props> = ({countries}) => {
  const generateChartData=()=>{
    const data: number[]=[];
    const labels: string[]=[];

    countries.forEach((country) => {
      data.push(country.NewConfirmed);
      labels.push(country.Country);
    });

    return {
      labels,
      datasets: [
        {
          label: 'New Confirmed Data',
          data,
                backgroundColor:[
                    "rgba(255,99,32,0.2)",
                    "rgba(255,162,235,0.2)",
                    "rgba(255,62,235,0.2)",
                    "rgba(55,162,235,0.2)",
                    "rgba(25,62,35,0.2)"
                ],
                borderWidth: 1
        }
      ],
    }
  }
    return <ChartWrapper><Bar data={generateChartData()} options={options} /></ChartWrapper>;
}

export default BarChart;

