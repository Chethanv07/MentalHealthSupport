import React from 'react';
import '../App.css'; // Import the separate CSS file

const DailyActivities: React.FC = () => {
    return (
        <section id="daily-activities" className="daily-activities-section">
            <div className="container">
                <h2 className="daily-title">Daily Activities</h2>
                <p className="daily-description">
                    Complete your daily tasks to earn rewards every 7 days!
                </p>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <ul className="daily-list">
                            <li className="daily-item">
                                <input className="form-check-input me-1" type="checkbox" aria-label="Meditation" />
                                Meditation
                            </li>
                            <li className="daily-item">
                                <input className="form-check-input me-1" type="checkbox" aria-label="Journal Writing" />
                                Journal Writing
                            </li>
                            <li className="daily-item">
                                <input className="form-check-input me-1" type="checkbox" aria-label="Exercise" />
                                Exercise
                            </li>
                            <li className="daily-item">
                                <input className="form-check-input me-1" type="checkbox" aria-label="Reading" />
                                Reading
                            </li>
                        </ul>
                        <div className="text-center mt-3">
                            <button className="btn daily-btn" onClick={() => alert('Reward Issued for 7 days!')}>
                                Claim Reward
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DailyActivities;
