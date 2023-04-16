import React from 'react';
import CourseProgramme from "./CourseProgramme/CourseProgramme";
import AccordionProgrammer from "./accordionProgrammer/AccordionProgrammer";
import AboutCourse from "./AboutCourse/AboutCourse";
import Team from "./Team/Team";


const TeamBuilding = () => {
    return (
        <>
            <Team/>
            <AboutCourse/>
            <CourseProgramme/>
            <AccordionProgrammer/>
       </>

    );
};

export default TeamBuilding;