import React from 'react';
import LinkWithIcon from '../link-with-icon';

export default function Sidebar(props) {

    return (
        <div className={"col-md-12 sidebar " + (props.mobile ? 'anchor' : '')}>
            <h4>{props.name}</h4>

            {props.data.map((v) => <LinkWithIcon key={v.icon} linkData={v} />)}
        </div>
    );

}