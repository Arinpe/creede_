import React from 'react';
import './App.css';

// Sidebar component
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </nav>
  );
};

// DashboardHeader component
const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <h1>Welcome to Your Dashboard</h1>
    </div>
  );
};

// Widget component
const Widget = ({ title, content }) => {
  return (
    <div className="widget">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

// Main component
const Main = () => {
  return (
    <main>
      <DashboardHeader />
      <Widget title="Widget 1" content="This is a sample widget content." />
      <Widget title="Widget 2" content="Another sample widget content." />
    </main>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 Your Dashboard</p>
    </footer>
  );
};

// App component
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
