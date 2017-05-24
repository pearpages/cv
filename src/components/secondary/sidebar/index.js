import React from 'react';
import LinkWithIcon from '../link-with-icon';
import './index.scss';

export default function Sidebar(props) {

    return (
        <div id={props.id} className="row section dark-blue">
            <div className={"col-md-12 sidebar " + (props.mobile ? 'anchor' : '')}>
                <h4>{props.name}</h4>

                {props.data.map((v) => <LinkWithIcon key={v.icon} linkData={v} />)}
            </div>
        </div>
    );

}