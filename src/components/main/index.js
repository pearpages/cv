import React from 'react';
import Summary from './summary';
import Education from './education';
import Skills from './skills';
import Period from './period';
import ExperienceContainer from './experience-container';
import './index.scss';

export default function Main(props) {

    return (
        <div className="col-md-9 col-sm-12 experience">
            <div id="summary" className="row anchor profile">
                <Summary data={props.summary} />
            </div>

            <ExperienceContainer id="skills" name="SKILLS">
                <Skills data={props.skills} mobile={props.mobile} />
            </ExperienceContainer>

            <ExperienceContainer id="education" name="EDUCATION">
                <Education data={props.education} />
            </ExperienceContainer>

            <ExperienceContainer id="experience" name="EXPERIENCE">
                <div className="resume">
                    {props.experience.map((v) => {
                        return <Period key={v.id} data={v} />
                    })}
                </div>
            </ExperienceContainer>
        </div>
    );

}