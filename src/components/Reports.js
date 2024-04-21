import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../components/Home.css'; // Import the CSS file
import '../components/student.css';

const Reports = () => {
  // Sample data for the top-performing students
  const topStudents = [
    { name: 'John Doe', grade: 'A' },
    { name: 'Jane Smith', grade: 'A+' },
    { name: 'Alice Johnson', grade: 'A++' }
  ];

  // Sample data for subject-wise pass students
  const subjects = [
    { subject: 'Maths', passedStudents: ['John Doe', 'Jane Smith', 'Alice Johnson'] },
    { subject: 'History', passedStudents: ['John Doe', 'Alice Johnson'] },
    { subject: 'Geography', passedStudents: ['Jane Smith', 'Alice Johnson'] },
    
  ];

  const chartContainer1 = useRef(null);
  const chartInstance1 = useRef(null);
  const chartContainer2 = useRef(null);
  const chartInstance2 = useRef(null);
  const chartContainer3 = useRef(null);
  const chartInstance3 = useRef(null);

  useEffect(() => {
    // Chart 1 - Pie Chart
    if (chartInstance1.current) {
      chartInstance1.current.destroy();
    }
    const ctx1 = chartContainer1.current.getContext('2d');
    chartInstance1.current = new Chart(ctx1, {
      type: 'pie',
      data: {
        labels: ['A', 'A+', 'A++'],
        datasets: [{
          label: 'Grade Distribution',
          data: [1, 1, 1], // Assuming one student for each grade
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });

    // Chart 2 - Bar Chart
    if (chartInstance2.current) {
      chartInstance2.current.destroy();
    }
    const ctx2 = chartContainer2.current.getContext('2d');
    chartInstance2.current = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['A', 'A+', 'A++'],
        datasets: [{
          label: 'Number of Students',
          data: [1, 1, 1], // Assuming one student for each grade
          backgroundColor: [
            '#4BC0C0',
            '#9966FF',
            '#36A2EB',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Chart 3 - Bubble Chart
    if (chartInstance3.current) {
      chartInstance3.current.destroy();
    }
    const ctx3 = chartContainer3.current.getContext('2d');
    chartInstance3.current = new Chart(ctx3, {
      type: 'bubble',
      data: {
        datasets: [{
          label: 'Grade Distribution',
          data: [
            { x: 0, y: 0, r: 10 }, // A
            { x: 1, y: 1, r: 10 }, // A+
            { x: 2, y: 2, r: 10 }  // A++
          ],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ]
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      if (chartInstance1.current) {
        chartInstance1.current.destroy();
      }
      if (chartInstance2.current) {
        chartInstance2.current.destroy();
      }
      if (chartInstance3.current) {
        chartInstance3.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ minHeight: '150vh', overflow: 'auto' }}>
      <div>
        <h2>Topper Students</h2>
        <div className="top-students-container" style={{ display: 'flex', marginBottom: '20px' }}>
          {topStudents.map((student, index) => (
            <div key={index} className="card" style={{ marginRight: '10px' }}>
              <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <p className="card-text">Grade: {student.grade}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', marginLeft: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1, marginRight: '20px', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 0 10px #36A2EB', position: 'relative' }}>
            <canvas ref={chartContainer1} width="400" height="400"></canvas>
          </div>
          <div style={{ flex: 1, marginRight: '20px', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 0 10px #36A2EB', position: 'relative' }}>
            <canvas ref={chartContainer2} width="400" height="400"></canvas>
          </div>
          <div style={{ flex: 1, borderRadius: '5px', overflow: 'hidden', boxShadow: '0 0 10px #36A2EB', position: 'relative' }}>
            <canvas ref={chartContainer3} width="400" height="400"></canvas>
          </div>
        </div>
        <div className="subject-cards-container" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          {subjects.map((subject, index) => (
            <div key={index} className="subject-card" style={{ flex: '0 1 calc(20% - 10px)', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 0 10px #36A2EB',width:'30px',  position: 'relative' }}>
              <div className="card-body">
                <h5 className="card-title">{subject.subject}</h5>
                <p className="card-text">Passed Students:</p>
                <ul>
                  {subject.passedStudents.map((student, index) => (
                    <li key={index}>{student}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
