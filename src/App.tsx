import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import StudentDashboard from './features/dashboards/StudentDashboard';
import VolunteerDashboard from './features/dashboards/VolunteerDashboard';
import OrganizationDashboard from './features/dashboards/OrganizationDashboard';
import Courses from './pages/Courses';
import Community from './pages/Community';
import About from './pages/About';
import Contact from './pages/Contact';
import Chatbot from './components/chatbot/Chatbot';

export type UserType = 'student' | 'volunteer' | 'organization' | null;

function App() {
  const [userType, setUserType] = useState<UserType>(null);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header userType={userType} setUserType={setUserType} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home setUserType={setUserType} />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
            <Route path="/organization-dashboard" element={<OrganizationDashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/community" element={<Community />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;