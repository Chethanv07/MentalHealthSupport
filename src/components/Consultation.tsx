import React from 'react';
import '../App.css'; // Import the CSS file

const Consultation: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Consultation booking logic here
    };

    return (
        <section id="consultation" className="consultation-section">
            <div className="container">
                <h2 className="text-center">Book a Consultation</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-lg p-4"> {/* ✅ Added Card with Shadow */}
                            <form noValidate onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="therapistSelect" className="form-label">Choose a Therapist</label>
                                    <select className="form-select" id="therapistSelect" required>
                                        <option value="">Select therapist</option>
                                        <option value="1">Dr. Smith</option>
                                        <option value="2">Dr. Johnson</option>
                                    </select>
                                    <div className="invalid-feedback">Please select a therapist.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="consultDate" className="form-label">Date</label>
                                    <input type="date" className="form-control" id="consultDate" required />
                                    <div className="invalid-feedback">Please choose a date.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="consultTime" className="form-label">Time</label>
                                    <input type="time" className="form-control" id="consultTime" required />
                                    <div className="invalid-feedback">Please choose a time.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="consultConcerns" className="form-label">Brief Description</label>
                                    <textarea className="form-control" id="consultConcerns" rows={3} placeholder="Describe your concerns" required></textarea>
                                    <div className="invalid-feedback">Please describe your concerns.</div>
                                </div>
                                <button type="submit" className="btn book-btn w-100">
                                    Book Consultation
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Consultation;
