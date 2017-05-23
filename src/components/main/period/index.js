import React from 'react'
import ContainerWithTitle from '../../shared/container-with-title';
import Recommendation from './recommendation';
import TitleWithImage from '../title-with-image';
import Timeline from './timeline'
import './index.scss';

export default function Period(props) {

    const data = props.data;
    return (<Timeline from={data.from} to={data.to}>
        {Period.getEmployers(data)}
        {Period.getDescription(data)}
        {Period.getProjects(data)}
        {Period.getRecommendations(data)}
    </Timeline>);
}

Period.mapRecommendations = function (data) {
    const re = data.recommendations;
    if (re) {
        return re.map((re) => {
            return <Recommendation key={re.id} data={re} />
        });
    }
    return false;
}

Period.getEmployers = function (data) {
    return data.employers.map((employer) => {
        return <TitleWithImage key={employer.id} data={employer} />
    })
}

Period.getDescription = function (data) {
    return (data.description) ? <div className="period-description">{data.description}</div> : null;
}

Period.getProjects = function (data) {
    return (data.projects) ? <ContainerWithTitle hidden={true} size="h3" name="Projects" icon="code-fork" html={data.projects} /> : null;
}

Period.getRecommendations = function (data) {
    let recommendations = this.mapRecommendations(data);
    return (recommendations) ?
        <ContainerWithTitle hidden={true} size="h3" name="Recommendations" icon="handshake-o">{recommendations}</ContainerWithTitle> : null
}