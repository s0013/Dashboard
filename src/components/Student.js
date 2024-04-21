import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../components/student.css';

const Student = () => {
  const absentStudents = 5; // Assuming there are 5 absent students
  const presentStudents = 15; // Assuming there are 15 present students

  return (
    <div>
      <h2>Student</h2>
      <div className="card-container">
        <Card className="card">
          <CardContent>
            <h3>Absent Students</h3>
            <p>{absentStudents} {absentStudents === 1 ? 'student' : 'students'} absent</p>
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent>
            <h3>Present Students</h3>
            <p>{presentStudents} {presentStudents === 1 ? 'student' : 'students'} present</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Student;
