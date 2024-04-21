import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import '../components/Home.css'; // Import the CSS file

const Teacher = () => {
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  const scatterChartRef = useRef(null);
  const [pieChartInstance, setPieChartInstance] = useState(null);
  const [lineChartInstance, setLineChartInstance] = useState(null);
  const [barChartInstance, setBarChartInstance] = useState(null);
  const [scatterChartInstance, setScatterChartInstance] = useState(null);

  useEffect(() => {
    if (pieChartInstance) {
      pieChartInstance.destroy();
    }

    const pieCtx = pieChartRef.current.getContext('2d');
    const newPieChartInstance = new Chart(pieCtx, {
      type: 'pie',
      data: {
        labels: ['Maths', 'English', 'Science', 'History', 'Geography'],
        datasets: [{
          label: 'Total Number of Teachers',
          data: [10, 8, 6, 4, 3], // Dummy data, replace with actual data
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
        ],
        
        }],
      },
    });

    setPieChartInstance(newPieChartInstance);

    return () => {
      newPieChartInstance.destroy();
    };
  }, []);

  useEffect(() => {
    if (lineChartInstance) {
      lineChartInstance.destroy();
    }

    const lineCtx = lineChartRef.current.getContext('2d');
    const newLineChartInstance = new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: ['Maths', 'English', 'Science', 'History', 'Geography'],
        datasets: [{
          label: 'Total Number of Teachers',
          data: [10, 8, 6, 4, 3], // Dummy data, replace with actual data
          borderColor: '#FF6384',

          fill: false,
        }],
      },
    });

    setLineChartInstance(newLineChartInstance);

    return () => {
      newLineChartInstance.destroy();
    };
  }, []);

  useEffect(() => {
    if (barChartInstance) {
      barChartInstance.destroy();
    }

    const barCtx = barChartRef.current.getContext('2d');
    const newBarChartInstance = new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['Maths', 'English', 'Science', 'History', 'Geography'],
        datasets: [{
          label: 'Total Number of Teachers',
          data: [10, 8, 6, 4, 3], // Dummy data, replace with actual data
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
        ],
        
        }],
      },
    });

    setBarChartInstance(newBarChartInstance);

    return () => {
      newBarChartInstance.destroy();
    };
  }, []);

  useEffect(() => {
    if (scatterChartInstance) {
      scatterChartInstance.destroy();
    }

    const scatterCtx = scatterChartRef.current.getContext('2d');
    const newScatterChartInstance = new Chart(scatterCtx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Total Number of Teachers',
          data: [
            { x: 'Maths', y: 10 },
            { x: 'English', y: 8 },
            { x: 'Science', y: 6 },
            { x: 'History', y: 4 },
            { x: 'Geography', y: 3 },
          ], // Dummy data, replace with actual data
          backgroundColor: '#FF6384',

        }],
      },
      options: {
        scales: {
          x: {
            type: 'category',
            labels: ['Maths', 'English', 'Science', 'History', 'Geography'],
          },
        },
      },
    });

    setScatterChartInstance(newScatterChartInstance);

    return () => {
      newScatterChartInstance.destroy();
    };
  }, []);
  return (
    <div className="chart-container">
  <div className="chart-item">
    <canvas ref={pieChartRef} />
  </div>
  <div className="chart-item">
    <canvas ref={lineChartRef} />
  </div>
  <div className="chart-item">
    <canvas ref={barChartRef} />
  </div>
  <div className="chart-item">
    <canvas ref={scatterChartRef} />
  </div>
</div>

  );
  
  
};

export default Teacher;
