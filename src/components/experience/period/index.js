import React from 'react'
import ContainerWithTitle from './container-with-title';
import Recommendation from './recommendation';
import './index.scss';

export default class Period extends React.Component {

    getRecommendations() {
        return this.props.data.recommendations.map( (re) => {
            return <Recommendation key={re.id} data={re} />
        });
    }

    render() {
        const data = this.props.data;
        return (<div className="timeline-item" {...{ 'data-date-is': data.from }}>
            <div className="employer-header">
                <div className="employer-image float-left" ><img width="68px" src={"media/" + data.employer.image} alt={data.employer.name} /></div>
                <div className="name-and-title">
                    <h1><span className="fa fa-user"></span> {data.title}</h1>
                    <h2>{data.employer.name}</h2>
                </div>
            </div>

            <div className="period-description">{data.description}</div>

            <ContainerWithTitle name="Projects" icon="wrench" html={data.projects}/>

            <ContainerWithTitle name="Recommendations" icon="certificate" html={this.getRecommendations()}/>

        </div>);
    }
}