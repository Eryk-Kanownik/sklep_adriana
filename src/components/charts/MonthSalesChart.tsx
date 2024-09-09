"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { ChartData } from "chart.js";

// Rejestracja elementów Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Typowanie danych wykresu
const data: ChartData<"bar", number[], string> = {
  labels: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec"],
  datasets: [
    {
      label: "Sprzedaż w 2024 (w tys. PLN)",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

// Typowanie opcji wykresu
const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sprzedaż miesięczna w 2024 roku",
    },
  },
};

const SalesChart: React.FC = () => {
  return (
    <div>
      <h2>Prosty wykres słupkowy</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesChart;
