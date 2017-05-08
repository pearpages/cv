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

    makeEmployerObject() {
        const data = this.props.data;
        let res = {
                    icon: 'terminal',
                    imageFile: data.employer.image,
                    line1: data.title,
                    line2: data.employer.name
                };

        (data.employer.url) ? res.url = this.props.data.employer.url : null;
        return res;
    }

    render() {
        const data = this.props.data;
        return (<div className="timeline-item">
            <div className="date">{data.from} - {data.to}</div>

            <div className="wrapper">
                <TitleWithImage data={this.makeEmployerObject()} />

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