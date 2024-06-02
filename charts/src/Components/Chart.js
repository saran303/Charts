import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['11:21', '11:22', '11:23', '11:24', '11:25', '11:26', '11:27'],
  datasets: [
    {
      label: 'EUR/USD',
      data: [1.3345, 1.3347, 1.3348, 1.3350, 1.3351, 1.3352, 1.33506],
      fill: false,
      backgroundColor: 'green',
      borderColor: 'green',
    },
  ],
};

const options = {
  scales: {
    x: {
      display: true,
      type: 'category', // Specify the scale type
    },
    y: {
      display: true,
    },
  },
};

function Chart() {
  return <Line data={data} options={options} />;
}

export default Chart;
