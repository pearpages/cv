import React from 'react';
import TitleWithImage from '../../title-with-image';

export default function Employers(props) {

    return (<div>
        {props.employers.map((employer) => {
            return <TitleWithImage key={employer.id} data={employer} />
        })}
    </div>)

}