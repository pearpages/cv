import React from 'react';
import Summary from './summary';
import Education from './education';
import Skills from './skills';
import Experience from './experience';
import Period from './period';
import ExperienceContainer from './experience-container';
import OnlyWhenVisible from '../shared/only-when-visible'
import './index.scss';

export default function Main(props) {

    return (
        <div className="col-md-9 col-sm-12 experience">
            <div id="summary" className="row anchor profile">
                <Summary data={props.summary} />
            </div>

            <OnlyWhenVisible>
                <ExperienceContainer id="skills" name="SKILLS">
                    <Skills data={props.skills} mobile={props.mobile} />
                </ExperienceContainer>
            </OnlyWhenVisible>

            <OnlyWhenVisible>
                <ExperienceContainer id="education" name="EDUCATION">
                    <Education data={props.education} />
                </ExperienceContainer>
            </OnlyWhenVisible>

            <OnlyWhenVisible>
                <ExperienceContainer id="experience" name="EXPERIENCE">
                    <Experience experience={props.experience} />
                </ExperienceContainer>
            </OnlyWhenVisible>

        </div>
    );

}