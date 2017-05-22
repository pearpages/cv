import React from 'react';
import './index.scss';
import ExternalLink from '../../../shared/external-link'

export default function Recommendation(props) {

    const re = props.data;
    return (
        <div className="row recommendation">
            <div className="col-12 text">
                <div dangerouslySetInnerHTML={{ __html: re.text }} />
            </div>
            <div className="col-12 person">
                <div className="float-right">
                    <div><img src={"media/" + re.colleague.image} alt={re.colleague.name} /></div>
                    <div className="info">
                        <div className="name"><ExternalLink url={re.colleague.in}>{re.colleague.name}</ExternalLink></div>
                        <div className="position"><span className="fa fa-user"></span> {re.colleague.title}</div>
                    </div>
                </div>
            </div>
        </div>
    );

}