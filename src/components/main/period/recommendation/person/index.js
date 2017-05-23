import React from 'react'
import ExternalLink from '../../../../shared/external-link'
import './index.scss';

export default function Person(props) {

    return (
        <div className={props.className+" person"}>
            <div className="float-right">
                <div><img src={"media/" + props.colleague.image} alt={props.colleague.name} /></div>
                <div className="info">
                    <div className="name"><ExternalLink url={props.colleague.in}>{props.colleague.name}</ExternalLink></div>
                    <div className="position"><span className="fa fa-user"></span> {props.colleague.title}</div>
                </div>
            </div>
        </div>
    );

}