import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChalkboardTeacher, faUserGraduate, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import Teacher from './Teacher';
import Student from './Student';
import NonTeachingStaff from './NonTeachingStaff';
import Reports from './Reports';
import '../components/Home.css'; // Import the CSS file

const Home = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('');

  const renderSelectedPage = () => {
    switch (selectedMenuItem) {
      case 'teacher':
        return <Teacher />;
      case 'student':
        return <Student />;
      case 'non-teaching-staff':
        return <NonTeachingStaff />;
      case 'reports':
        return <Reports />;
      default:
        return (
            <div className="dashboard-message">
            <h2>Welcome to Dashboard</h2>
            <p>Select an option from the menu on the left to view details.</p>
          </div>
        );
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="sidebar">
            <div className="list-group">
              <Link
                to="/teacher"
                onClick={() => setSelectedMenuItem('teacher')}
                className={`list-group-item list-group-item-action ${selectedMenuItem === 'teacher' ? 'active' : ''}`}
              >
                <FontAwesomeIcon icon={faChalkboardTeacher} /> Teacher
              </Link>
              <Link
                to="/student"
                onClick={() => setSelectedMenuItem('student')}
                className={`list-group-item list-group-item-action ${selectedMenuItem === 'student' ? 'active' : ''}`}
              >
                <FontAwesomeIcon icon={faUserGraduate} /> Student
              </Link>
              <Link
                to="/non-teaching-staff"
                onClick={() => setSelectedMenuItem('non-teaching-staff')}
                className={`list-group-item list-group-item-action ${selectedMenuItem === 'non-teaching-staff' ? 'active' : ''}`}
              >
                <FontAwesomeIcon icon={faUsers} /> Non-Teaching Staff
              </Link>
              <Link
                to="/reports"
                onClick={() => setSelectedMenuItem('reports')}
                className={`list-group-item list-group-item-action ${selectedMenuItem === 'reports' ? 'active' : ''}`}
              >
                <FontAwesomeIcon icon={faClipboardList} /> Reports
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="content">
            {renderSelectedPage()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
