// _components/BarChart.tsx
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  data: { week: string; tasksCompleted: number }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.week),
    datasets: [
      {
        label: "Tarefas Completadas",
        data: data.map((item) => item.tasksCompleted),
        backgroundColor: "rgba(0, 179, 179, 0.5)"
        ,
        borderColor: "rgba(0, 179, 179, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;