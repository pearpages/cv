import React from 'react';
import LinkWithIcon from '../link-with-icon';
import './index.scss';

export default function Sidebar(props) {

    return (
        <div id={props.id} className={"row section sidebar"+ (props.visible ? ' ready' : '')}>
            <div className={"col-md-12 " + (props.mobile ? 'anchor' : '')}>
                <h4>{props.name}</h4>
                <div className="links">
                    {props.data.map((v) => <LinkWithIcon key={v.icon} linkData={v} />)}
                </div>
            </div>
        </div>
    );

}