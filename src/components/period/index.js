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

            <div className="wrapper">
                {
                    data.employers.map( (employer) => {
                        return <TitleWithImage key={employer.id} data={employer} />
                    })
                }

                {(data.description) ? <div className="period-description">{data.description}</div> : null}

                {(data.projects) ? <ContainerWithTitle name="Projects" icon="code-fork" html={data.projects} /> : null}

                {
                    (this.getRecommendations()) ?
                        <ContainerWithTitle name="Recommendations" icon="handshake-o" html={this.getRecommendations()} /> : null
                }
            </div>

        </div>);
    }
}