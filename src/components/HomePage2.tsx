import React from 'react';
import Nav2 from './NavBar2';
import Hero from './Hero';
import Consultation from './Consultation';
import Dashboard from './Dashboard';
import Games from './Games';
import DailyActivities from './DailyActivities';


const HomePage2: React.FC = () => {
    return (
        <>
            <Nav2 />
            <Hero />
            <Dashboard />
            <Games />
            <DailyActivities />
            <Consultation />



        </>
    );
};

export default HomePage2;
