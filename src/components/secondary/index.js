import React from 'react';
import Sidebar from './sidebar';
import Picture from './picture';
import './index.scss';
import OnlyWhenVisible from '../shared/only-when-visible'

export default function Secondary(props) {

    return (
        <div className="col-md-3 col-sm-12 personal">

            <OnlyWhenVisible>
                <Picture mobile={props.mobile}/>
            </OnlyWhenVisible>

            <OnlyWhenVisible>
                <Sidebar id="contact" name="CONTACT ME" mobile={props.mobile} data={props.contact} />
            </OnlyWhenVisible>

            <OnlyWhenVisible>
                <Sidebar id="community" name="COMMUNITY" mobile={props.mobile} data={props.community} />
            </OnlyWhenVisible>

        </div>);

}