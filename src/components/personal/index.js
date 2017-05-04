import React from 'react';
import Picture from './components/picture';
import Contact from './components/contact';
import FollowMe from './components/follow-me';
import './index.scss';

export default class Personal extends React.Component {

    render() {
        return (
            <div className="col-md-3 col-sm-3 personal">
                <div id="picture" className="row profile">
                    <div className={"col-md-12 " + (this.props.mobile === true ? 'mobile-picture' : null)}>
                        <Picture />
                    </div>
                </div>

                <div id="contact" className="row section dark-blue">
                    <Contact />
                </div>

                <div id="community" className="row section dark-blue">
                    <FollowMe />
                </div>
            </div>);
    }
}