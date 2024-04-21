import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../components/Home.css'; // Import the CSS file


const NonTeachingStaff = () => {
  // Sample data for top-performing non-teaching staff
  const topStaff = [
    { name: 'Manoj P.', department: 'Clerk' },
    { name: 'John D.', department: 'Admin Assistant' },
    { name: 'Ajay S.', department: 'PA' }
  ];

  // Sample data for department-wise non-teaching staff
  const departments = [
    { department: 'Clerk', staff: ['John Doe', 'Manoj P.'] },
    { department: 'Admin Assistant', staff: ['Jane Smith', 'Alice Johnson'] },
    { department: 'PA', staff: ['John Doe', 'Alice Johnson'] },
  ];

  const chartContainer1 = useRef(null);
  const chartInstance1 = useRef(null);
  const chartContainer2 = useRef(null);
  const chartInstance2 = useRef(null);

  useEffect(() => {
    // Chart 1 - Pie Chart
    if (chartInstance1.current) {
      chartInstance1.current.destroy();
    }
    const ctx1 = chartContainer1.current.getContext('2d');
    chartInstance1.current = new Chart(ctx1, {
      type: 'pie',
      data: {
        labels: ['Clerk', 'Admin Assistant', 'PA'],
        datasets: [{
          label: 'Staff Distribution by Department',
          data: [2, 2, 2], // Assuming two staff members for each department
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
        labels: ['Clerk', 'Admin Assistant', 'PA'],
        datasets: [{
          label: 'Number of Staff',
          data: [2, 2, 2], // Assuming two staff members for each department
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

    return () => {
      if (chartInstance1.current) {
        chartInstance1.current.destroy();
      }
      if (chartInstance2.current) {
        chartInstance2.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ minHeight: '150vh', overflow: 'auto' }}>
      <div>
        <h2>Top Performing Non-Teaching Staff</h2>
        <div className="top-staff-container" style={{ display: 'flex', marginBottom: '20px' }}>
          {topStaff.map((staff, index) => (
            <div key={index} className="card" style={{ marginRight: '10px' }}>
              <div className="card-body">
                <h5 className="card-title">{staff.name}</h5>
                <p className="card-text">Department: {staff.department}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', marginLeft: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1, marginRight: '20px', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 0 10px #36A2EB', position: 'relative' }}>
            <canvas ref={chartContainer1} width="400" height="400"></canvas>
          </div>
          <div style={{ flex: 1, borderRadius: '5px', overflow: 'hidden', boxShadow: '0 0 10px #36A2EB', position: 'relative' }}>
            <canvas ref={chartContainer2} width="400" height="400"></canvas>
          </div>
        </div>
        <div className="department-cards-container" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          {departments.map((dept, index) => (
            <div key={index} className="department-card" style={{ flex: '0 1 calc(30% - 10px)', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 0 10px #36A2EB', position: 'relative' }}>
              <div className="card-body">
                <h5 className="card-title">{dept.department}</h5>
                <p className="card-text">Staff Members:</p>
                <ul>
                  {dept.staff.map((staff, index) => (
                    <li key={index}>{staff}</li>
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

export default NonTeachingStaff;
