import React from 'react'
import ContainerWithTitle from './container-with-title';
import Recommendation from './recommendation';
import TitleWithImage from '../title-with-image';
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
            <TitleWithImage data={{
                icon: 'user',
                imageFile: data.employer.image,
                line1: data.title,
                line2: data.employer.name
                }}/>

            <div className="period-description">{data.description}</div>

            <ContainerWithTitle name="Projects" icon="code" html={data.projects}/>

            <ContainerWithTitle name="Recommendations" icon="handshake-o" html={this.getRecommendations()}/>

        </div>);
    }
}