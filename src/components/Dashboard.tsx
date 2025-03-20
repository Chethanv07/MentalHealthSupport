import React from 'react';
import '../App.css'; // Import the separate CSS file

const Dashboard: React.FC = () => {
    return (
        <section id="dashboard" className="dashboard-section">
            <div className="container text-center">
                <h2 className="dashboard-title">User Dashboard</h2>
                <p className="dashboard-welcome">Welcome, [User Name]! Here are your available features:</p>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card dashboard-card">
                            <div className="card-body">
                                <h5 className="card-title">Consultation</h5>
                                <p className="card-text">Book a session with our experts to discuss your mental health.</p>
                                <a href="#consultation" className="btn dashboard-btn">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card dashboard-card">
                            <div className="card-body">
                                <h5 className="card-title">Games & Rewards</h5>
                                <p className="card-text">Play games and earn rewards for your mental wellness journey.</p>
                                <a href="#games" className="btn dashboard-btn">
                                    Explore
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card dashboard-card">
                            <div className="card-body">
                                <h5 className="card-title">Daily Activities</h5>
                                <p className="card-text">Complete daily tasks and get rewarded for staying consistent.</p>
                                <a href="#daily-activities" className="btn dashboard-btn">
                                    View Tasks
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
