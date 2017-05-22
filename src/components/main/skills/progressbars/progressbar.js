import React from 'react';
import './progressbars.scss';

export default function Progressbar(props) {

    return (<div className={"row "+props.className}>
        <div className="col-sm-3">{props.name}</div>
        <div className="col-sm-9">
            <div className="progress">
                <div className={"progress-bar progress-bar-" + props.identifier} role="progressbar" style={{ width: props.value + '%' }}></div>
            </div>
        </div>
    </div>);

}