import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import '../components/student.css';

const Student = () => {
  const drawCharts = () => {
    const canvas = document.getElementById('barChart');
    const existingChart = Chart.getChart(canvas);

    // Destroy the existing chart if it exists
    if (existingChart) {
      existingChart.destroy();
    }

    const ctx = canvas.getContext('2d');
    const data = {
      labels: ['Maths', 'English', 'Science'],
      datasets: [{
        label: 'Number of Students Good',
        data: [15, 25, 20], // Example data (you can replace with your actual data)
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      }],
    };

    // Bar Chart
    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Radar Chart
    const radarCanvas = document.getElementById('radarChart');
    const radarCtx = radarCanvas.getContext('2d');
    const existingRadarChart = Chart.getChart(radarCanvas);
    if (existingRadarChart) {
      existingRadarChart.destroy();
    }
    new Chart(radarCtx, {
      type: 'radar',
      data: data,
      options: {
        scales: {
          r: {
            beginAtZero: true,
          },
        },
      },
    });

    // Pie Chart
    const pieCanvas = document.getElementById('pieChart');
    const pieCtx = pieCanvas.getContext('2d');
    const existingPieChart = Chart.getChart(pieCanvas);
    if (existingPieChart) {
      existingPieChart.destroy();
    }
    new Chart(pieCtx, {
      type: 'pie',
      data: data,
    });

    // Line Chart
    const lineCanvas = document.getElementById('lineChart');
    const lineCtx = lineCanvas.getContext('2d');
    const existingLineChart = Chart.getChart(lineCanvas);
    if (existingLineChart) {
      existingLineChart.destroy();
    }
    new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: ['Maths', 'English', 'Science'],
        datasets: [{
          label: 'Number of Students Good',
          data: [15, 25, 20], // Example data (you can replace with your actual data)
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
          fill: false,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  useEffect(() => {
    drawCharts();
  }, []);

  return (
    <div>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Absent Students</h5>
            <p className="card-text">10</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Present Students</h5>
            <p className="card-text">20</p>
          </div>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <canvas id="barChart"></canvas>
        </div>
        <div className="grid-item">
          <canvas id="radarChart"></canvas>
        </div>
        <div className="grid-item">
          <canvas id="pieChart"></canvas>
        </div>
        <div className="grid-item">
          <canvas id="lineChart"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Student;
