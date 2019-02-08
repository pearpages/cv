import React from 'react';
import TitleWithImage from '../../title-with-image';
import './index.scss';

export default function Employers(props) {

    return (<div className="employers">
        {props.employers.map((employer) => {
            return <TitleWithImage key={employer.id} data={employer} />
        })}
    </div>)

}