import React from 'react';
import AboutCourse from "./AboutCourse/AboutCourse";
import Team from "./Team/Team";
import ThisCours from "./thisCours/ThisCours";
import CourseProgramme from "./CourseProgramme/CourseProgramme";
import Reviews from "./Reviews/Reviews";
import Show from "./ShowCourses/Show";
import CourseBlock from "./accordionProgrammer/CoursBlock";
import Photo from "./Photo/Photo";
import YourLearn from "./YourLearn/YourLearn";


const TeamBuilding = () => {
    return (
        <>
            <Team/>
            <AboutCourse/>
            <ThisCours/>
            <Show/>
            <CourseProgramme/>
            <CourseBlock/>
            <YourLearn/>
            <Photo/>
            <Reviews/>
       </>

    );
};

export default TeamBuilding;