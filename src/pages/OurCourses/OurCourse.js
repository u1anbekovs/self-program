import React from 'react';
import Hero from "./Hero/Hero";
import Courses from './Courses/Courses';
import MasterClasses from './MasterClasses/MasterClasses';
import Reviews from './Reviews/Reviews';
import LeaveReview from './LeaveReview/LeaveReview';

const OurCourse = () => {
    return (
        <div>
            <Hero/>
            <Courses/>
            <MasterClasses/>
            <Reviews/>
            <LeaveReview/>
        </div>
    );
};

export default OurCourse;