import React from 'react';
import Summary from './summary';
import Education from './education';
import Skills from './skills';
import Period from '../period';
import ExperienceContainer from '../experience-container';
import './index.scss';

export default class Main extends React.Component {

    render() {
        return (
            <div className="col-md-9 col-sm-12 experience">
                <div id="summary" className="row profile">
                    <Summary data={this.props.summary} />
                </div>

                <ExperienceContainer id="skills" name="SKILLS">
                    <Skills data={this.props.skills} mobile={this.props.mobile} />
                </ExperienceContainer>

                <ExperienceContainer id="education" name="EDUCATION">
                    <Education data={this.props.education} />
                </ExperienceContainer>

                <ExperienceContainer id="experience" name="EXPERIENCE">
                    <div className="resume">
                        {this.props.experience.map((v) => {
                            return <Period key={v.id} data={v} />
                        })}
                    </div>
                </ExperienceContainer>
            </div>
        );
    }
}