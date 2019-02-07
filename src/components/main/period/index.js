import React from 'react'
import Timeline from './timeline'
import Recommendations from './recommendations'
import Employers from './employers'
import Stack from './stack'
import Projects from './projects'
import './index.scss';

export default function Period(props) {

    const data = props.data;
    return (<Timeline from={data.from} to={data.to}>
        <Employers employers={data.employers} />
        {(data.description) ? <div className="period-description">{data.description}</div> : null}
        <Stack stack={data.stack ? data.stack : ''} />
        <Projects projects={data.projects} />
        <Recommendations data={props.data}/>
    </Timeline>);
}