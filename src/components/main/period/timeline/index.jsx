import React from 'react';
import OnlyWhenVisible from '../../../shared/only-when-visible'
import Wrapper from './wrapper'
import './index.scss';

export default function Timeline(props) {

    return (<div className="timeline-item anchor">
            <div className="date">{props.from} - {props.to}</div>

            <OnlyWhenVisible animate={true}>
                <Wrapper {...props}/>
            </OnlyWhenVisible>

        </div>);

}