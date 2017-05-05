import React from 'react'
import ContainerWithTitle from './container-with-title';
import Recommendation from './recommendation';
import TitleWithImage from '../title-with-image';
import './index.scss';

export default class Period extends React.Component {

    getRecommendations() {
        const re = this.props.data.recommendations;
        if (re) {
            return re.map((re) => {
                return <Recommendation key={re.id} data={re} />
            });
        }
        return false;
    }

    render() {
        const data = this.props.data;
        return (<div className="timeline-item">
            <div className="date">{data.from} - {data.to}</div>

            <TitleWithImage data={{
                icon: 'user',
                imageFile: data.employer.image,
                line1: data.title,
                line2: data.employer.name
            }} />

            <div className="period-description">{data.description}</div>

            <ContainerWithTitle name="Projects" icon="code" html={data.projects} />

            {
                (this.getRecommendations()) ?
                    <ContainerWithTitle name="Recommendations" icon="handshake-o" html={this.getRecommendations()} /> : null
            }


        </div>);
    }
}