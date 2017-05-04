import React from 'react';
import Profile from './components/profile';
import Education from './components/education';
import Skills from './components/skills';
import Resume from './components/resume';
import './experience.scss';

export default class Experience extends React.Component {
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
                    <Resume />
                </div>
            </div>
        );
    }
}