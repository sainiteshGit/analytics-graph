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
  type:string;
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

const BarChart: React.FunctionComponent<Props> = ({countries,type
}) => {
  const generateChartData=()=>{
    const data: number[]=[];
    const labels: string[]=[];
    const deathData: number[]=[];
    const recoveredData: number[]=[];

    countries.forEach((country) => {
      data.push(country.NewConfirmed);
      deathData.push(country.NewDeaths);
      recoveredData.push(country.NewRecovered);
      labels.push(country.Country);
    });

    return {
      labels,
      datasets: [
        {
          label: type==='deaths'?'New Deaths':(type==='recovered'?'New Recovered':'New Confirmed Cases'),
          data:type==='deaths'?deathData:(type==='recovered'?recoveredData:data),
                backgroundColor:[
                    "rgba(2,99,32,0.2)",
                    "rgba(95,12,95,0.5)",
                    "rgba(255,96,3,90)",
                    "rgba(55,12,13,0.2)",
                    "rgba(25,2,35,0.2)"
                ],
                borderWidth: 1
        }
      ],
    }
  }
    return <ChartWrapper><Bar data={generateChartData()} options={options} /></ChartWrapper>;
}

export default BarChart;

