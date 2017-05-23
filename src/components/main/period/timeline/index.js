import React from 'react';
import './index.scss';

export default function Timeline(props) {

    return (<div className="timeline-item anchor">
            <div className="date">{props.from} - {props.to}</div>

            <div className="wrapper">
                {props.children}
            </div>

        </div>);

}