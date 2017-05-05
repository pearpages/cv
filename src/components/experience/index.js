import React from 'react';
import Summary from './summary';
import Education from './education';
import Skills from './skills';
import Resume from './resume';
import ExperienceContainer from './experience-container';
import './index.scss';

export default class Experience extends React.Component {

    getPeriods() {
        if (Experience.periods === undefined) {
            Experience.periods = this.mapPeriods();
        }
        return Experience.periods;
    }

    mapPeriods() {
        return this.props.data.periods.map((period) => {
            period.employer = this.props.data.employers.find((employer) => employer.id === period.employer);
            period.recommendations = this.mapRecomendations(period.recommendations);
            return period;
        });
    }

    mapRecomendations(recommendations) {
        return recommendations.map((id) => {
            const recom = this.props.data.recommendations.find((re) => re.id === id);
            recom.colleague = this.props.data.colleagues.find((col) => col.id === recom.colleague);
            return recom;
        });
    }

    render() {
        return (
            <div className="col-md-9 col-sm-9 experience">
                <div id="summary" className="row profile">
                    <Summary data={this.props.data.summary} />
                </div>

                <ExperienceContainer id="skills" name="SKILLS">
                    <Skills data={this.props.data.skills} />
                </ExperienceContainer>

                <ExperienceContainer id="education" name="EDUCATION">
                    <Education />
                </ExperienceContainer>

                <ExperienceContainer id="experience" name="EXPERIENCE">
                    <Resume data={this.getPeriods()} />
                </ExperienceContainer>


            </div>
        );
    }
}