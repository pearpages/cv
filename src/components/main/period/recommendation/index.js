import React from 'react';
import Person from './person'
import './index.scss';

export default function Recommendation(props) {

    const re = props.data;
    return (
        <div className="row recommendation">
            <div className="col-12 text">
                <div dangerouslySetInnerHTML={{ __html: re.text }} />
            </div>
            <Person className="col-12" colleague={re.colleague}/>
        </div>
    );

}