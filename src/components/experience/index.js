import React from 'react';
import Profile from './components/profile';
import Education from './components/education';
import Skills from './components/skills';
import Resume from './components/resume';
import './experience.scss';

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
            return period;
        });
    }

    render() {
        return (
            <div className="col-md-9 col-sm-9 experience">
                <div id="summary" className="row profile">
                    <Profile />
                </div>

                <div id="skills" className="row grey">
                    <Skills />
                </div>

                <div id="education" className="row grey">
                    <Education />
                </div>

                <div id="experience" className="row grey">
                    <div className="col-md-12">
                        <h2><span className="fa fa-chevron-circle-right"></span> EXPERIENCE</h2>
                        <Resume data={this.getPeriods()} />
                    </div>
                </div>
            </div>
        );
    }
}