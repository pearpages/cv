import React from 'react';
import Sidebar from './sidebar';
import './index.scss';

export default function Secondary(props) {

    return (
        <div className="col-md-3 col-sm-12 personal">
            <div id="picture" className={"row profile " + (props.mobile ? "anchor" : '')} >
                <div className={"col-md-12 " + (props.mobile === true ? 'mobile-picture' : null)}>
                    <img id="profile-picture" className="img-fluid center-block" src="media/pere-pages.jpg" alt="Pere Pages" />
                </div>
            </div>

            <div id="contact" className="row section dark-blue">
                <Sidebar id="contact" name="CONTACT ME" mobile={props.mobile} data={props.contact} />
            </div>

            <div id="community" className="row section dark-blue">
                <Sidebar id="community" name="COMMUNITY" mobile={props.mobile} data={props.community} />
            </div>
        </div>);

}