
import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            <section className="hero vh-100 d-flex align-items-center justify-content-center" id="home">
                <div className="container text-center">
                    <h1>Welcome to Mental Health Support</h1>
                    <p>
                        Your journey towards better mental health starts here. Please log in or register to access exclusive features.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container text-center">
                    <div className="card mx-auto" style={{ maxWidth: '600px', border: '1px solid #ddd' }}>
                        <div className="card-body">
                            <h3 className="card-title">Advertisement</h3>
                            <p className="card-text">
                                Enjoy our exclusive content on mental wellness. Sign up now for premium access and resources.
                            </p>
                            <a href="/register" className="btn btn-accent" style={{ backgroundColor: '#ffc107', border: 'none' }}>
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
