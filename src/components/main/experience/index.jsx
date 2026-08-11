import React from 'react';
import Period from '../period'

export default function Experience(props) {

    return (<div className="resume">
        {props.experience.map((v) => {
            return <Period key={v.id} data={v} />
        })}
    </div>);

}